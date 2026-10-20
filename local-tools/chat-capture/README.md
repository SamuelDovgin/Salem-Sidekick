# Local chat transcript capture (macOS)

This optional fallback reads the **Town of Salem 2 game window only**, OCRs the visible chat panel, and writes a local `.txt` file. It does not change the game, send messages, or keep screenshots. It can miss fast messages or misread stylized text, so the Game Logs mod is preferable when it works.

Requirements on this Mac are already present: Python 3 with Pillow, Swift, and Tesseract.

## First run

1. Open Town of Salem 2 and wait until its game window is visible. Use a text-chat match; this tool cannot transcribe voice chat.
2. In Finder, choose **Go → Go to Folder…** and enter `/Users/samueldovgin/Developer/Salem Sidekick/local-tools/chat-capture`.
3. Double-click **Start Chat Capture.command** before the match begins. Terminal opens and should show `Capturing Town of Salem 2 window`, a `Transcript:` path, and `Press Ctrl-C after the match`.
4. If macOS asks for screen access, allow it for Terminal or whichever app the prompt names. If access was denied earlier, enable that app in **System Settings → Privacy & Security → Screen & System Audio Recording**, then quit and reopen it. The tool captures the game window only and does not record audio.
5. Play normally. Keep the lower-left chat panel visible. Do not minimize the game window or scroll the chat far back while capture runs.
6. After the match, click the Terminal window and press **Control-C**. It prints `Saved N lines to …`.
7. In Finder, use **Go → Go to Folder…** with `/Users/samueldovgin/Developer/Salem Sidekick/local-tools/chat-capture/transcripts`. Open the newest `salem-YYYYMMDD-HHMMSS.txt` file and check that it contains chat. Attach it to the review chat with your role, player number, mode, night actions, and outcome.

You can also start it from the repository root with:

```sh
python3 local-tools/chat-capture/capture.py
```

The dated transcript directory is local and ignored by Git.

To check OCR on the current game screen without starting a log:

```sh
python3 local-tools/chat-capture/capture.py --probe --save-probe /tmp/salem-chat-probe.png
```

The default crop is the lower-left chat panel at the current 3024×1946 game-window size. If the game's chat panel moves, use `--crop left,top,right,bottom` with fractions from 0 to 1. The first run should be treated as a test because chat OCR has not yet been validated against a complete live match.

The transcript contains only text seen by this client's window. For postgame quizzes, include your player number, role, mode, night actions, and outcome separately; the capture does not infer those facts.
