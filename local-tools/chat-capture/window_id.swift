import CoreGraphics

guard let windows = CGWindowListCopyWindowInfo(.optionAll, kCGNullWindowID) as? [[String: Any]] else {
    exit(1)
}

let candidates: [(id: Int, area: Int)] = windows.compactMap { window in
    guard (window[kCGWindowOwnerName as String] as? String) == "Town of Salem 2",
          (window[kCGWindowLayer as String] as? Int) == 0,
          (window[kCGWindowName as String] as? String) == "Town of Salem 2",
          let id = window[kCGWindowNumber as String] as? Int,
          let bounds = window[kCGWindowBounds as String] as? [String: Any],
          let width = bounds["Width"] as? Int,
          let height = bounds["Height"] as? Int,
          width > 800,
          height > 500 else {
        return nil
    }
    return (id, width * height)
}

guard let game = candidates.max(by: { $0.area < $1.area }) else {
    fputs("Town of Salem 2 window not found\n", stderr)
    exit(1)
}

print(game.id)
