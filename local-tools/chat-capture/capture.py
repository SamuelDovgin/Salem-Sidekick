#!/usr/bin/env python3
"""Save visible Town of Salem 2 chat as local text, without retaining images."""

from __future__ import annotations

import argparse
import difflib
import io
import re
import subprocess
import sys
import tempfile
import time
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps, ImageStat


HERE = Path(__file__).resolve().parent
DEFAULT_CROP = (0.02, 0.49, 0.34, 0.89)  # left, top, right, bottom


def game_window_id() -> str:
    result = subprocess.run(
        ["swift", str(HERE / "window_id.swift")],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout.strip()


def screenshot(window_id: str) -> Image.Image:
    with tempfile.NamedTemporaryFile(suffix=".png") as temp:
        subprocess.run(
            ["screencapture", "-x", "-l", window_id, "-t", "png", temp.name],
            check=True,
            capture_output=True,
        )
        with Image.open(temp.name) as image:
            return image.convert("RGB")


def chat_crop(image: Image.Image, bounds: tuple[float, float, float, float]) -> Image.Image:
    width, height = image.size
    left, top, right, bottom = bounds
    cropped = image.crop((
        round(left * width), round(top * height),
        round(right * width), round(bottom * height),
    ))
    # The game uses bright text on a dark, translucent panel. Invert it for OCR.
    gray = ImageOps.grayscale(cropped)
    gray = ImageEnhance.Contrast(gray).enhance(1.5)
    gray = ImageOps.invert(gray)
    return gray.resize((gray.width * 2, gray.height * 2))


def chat_panel_visible(image: Image.Image) -> bool:
    """Skip black transition screens whose loading tips cross the chat crop."""
    width, height = image.size
    border = image.crop((0, round(height * 0.53), round(width * 0.025), round(height * 0.84)))
    return max(ImageStat.Stat(border).mean) > 12


def read_lines(image: Image.Image) -> list[str]:
    data = io.BytesIO()
    image.save(data, format="PNG")
    result = subprocess.run(
        ["tesseract", "stdin", "stdout", "--psm", "6", "-l", "eng"],
        input=data.getvalue(),
        capture_output=True,
        check=True,
    )
    lines = []
    for raw in result.stdout.decode("utf-8", "replace").splitlines():
        line = re.sub(r"\s+", " ", raw).strip()
        if len(line) >= 3 and re.search(r"[A-Za-z0-9]", line):
            lines.append(line)
    return lines


def comparable(line: str) -> str:
    return re.sub(r"[^a-z0-9]", "", line.casefold())


def similar(a: str, b: str) -> bool:
    a, b = comparable(a), comparable(b)
    return bool(a and b) and difflib.SequenceMatcher(None, a, b).ratio() >= 0.86


def additions(previous: list[str], current: list[str]) -> list[str]:
    """Keep lines after the latest overlap, tolerating small OCR differences."""
    if not previous:
        return current
    last_match = -1
    for index, line in enumerate(current):
        if any(similar(line, old) for old in previous):
            last_match = index
    return current[last_match + 1:] if last_match >= 0 else current


def parse_crop(value: str) -> tuple[float, float, float, float]:
    try:
        parts = tuple(float(piece) for piece in value.split(","))
    except ValueError as exc:
        raise argparse.ArgumentTypeError("crop needs left,top,right,bottom fractions") from exc
    if len(parts) != 4 or not (0 <= parts[0] < parts[2] <= 1 and 0 <= parts[1] < parts[3] <= 1):
        raise argparse.ArgumentTypeError("crop needs 0-1 left,top,right,bottom fractions")
    return parts


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, help="Transcript path; defaults to a dated file beside this script")
    parser.add_argument("--interval", type=float, default=0.7, help="Seconds between captures (default: 0.7)")
    parser.add_argument("--crop", type=parse_crop, default=DEFAULT_CROP, help="Window fractions: left,top,right,bottom")
    parser.add_argument("--probe", action="store_true", help="Read one frame and print OCR text without making a transcript")
    parser.add_argument("--save-probe", type=Path, help="Optional cropped image to inspect while calibrating OCR")
    args = parser.parse_args()
    if args.interval < 0.2:
        parser.error("interval must be at least 0.2 seconds")
    try:
        window_id = game_window_id()
    except subprocess.CalledProcessError as exc:
        print(exc.stderr.strip() or "Town of Salem 2 window not found", file=sys.stderr)
        return 1
    print(f"Capturing Town of Salem 2 window {window_id}", file=sys.stderr)
    output = args.output or HERE / "transcripts" / f"salem-{datetime.now().strftime('%Y%m%d-%H%M%S')}.txt"
    previous: list[str] = []
    recent: list[str] = []
    captured_count = 0
    out = None
    if not args.probe:
        output.parent.mkdir(parents=True, exist_ok=True)
        out = output.open("x", encoding="utf-8")
        out.write(f"# Town of Salem 2 visible chat capture — {datetime.now().isoformat(timespec='seconds')}\n")
        out.write("# OCR may miss or misread lines; review uncertain deductions against the in-game log.\n\n")
        print(f"Transcript: {output}\nPress Ctrl-C after the match.", file=sys.stderr)
    try:
        while True:
            try:
                frame = screenshot(window_id)
                visible = chat_panel_visible(frame)
                if visible:
                    crop = chat_crop(frame, args.crop)
                    if args.save_probe:
                        crop.save(args.save_probe)
                    current = read_lines(crop)
                else:
                    current = []
            except subprocess.CalledProcessError as exc:
                print(f"Capture failed: {exc.stderr.decode('utf-8', 'replace').strip()}", file=sys.stderr)
                if args.probe:
                    return 1
                try:
                    window_id = game_window_id()
                except subprocess.CalledProcessError:
                    pass
                time.sleep(2)
                continue
            if args.probe:
                print("\n".join(current) or ("(No chat text recognized)" if visible else "(Chat panel not visible)"))
                return 0
            new = additions(previous, current)
            for line in new:
                if any(similar(line, old) for old in recent[-20:]):
                    continue
                out.write(f"[{datetime.now().strftime('%H:%M:%S')}] {line}\n")
                out.flush()
                captured_count += 1
                recent.append(line)
            previous = current
            time.sleep(args.interval)
    except KeyboardInterrupt:
        return 0
    finally:
        if out:
            out.close()
            print(f"Saved {captured_count} lines to {output}", file=sys.stderr)


if __name__ == "__main__":
    raise SystemExit(main())
