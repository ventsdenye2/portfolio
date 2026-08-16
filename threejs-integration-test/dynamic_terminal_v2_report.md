# Live Terminal v2 Report

## Architecture

- `TerminalTexture` continues to use one HTML Canvas 2D surface per panel, a `THREE.CanvasTexture`, and an unlit `MeshBasicMaterial`.
- Each terminal now has an explicit runtime state: `idle`, `typing`, `output`, `scrolling`, or `paused`.
- The texture owns its history buffer, visible scroll window, command typing, cursor timer, and short scroll tween. It does not depend on the Three.js render loop for Canvas redraws.
- `TerminalController` owns the three panel lifecycles, staggered boot sequence, event selection, pause/resume, replay, manual event generation, and maximum-history policy.
- Scroll animation lasts 240ms and schedules approximately every 33ms only while a scroll is active. The steady state only redraws for low-frequency cursor blinking or a new event.

## Event Pools and Content

- Development / `Terminal_Panel_A`: Vite, npm, TypeScript checks, HMR, route requests, compilation, and build status.
- Version Control / `Terminal_Panel_B`: branch status, fetch, log, diff checks, and clean working-tree messages.
- Tools / `Terminal_Panel_C`: Codex, Blender MCP, Three.js scene loading, glTF checks, asset cache, and NPR pipeline status.
- Event templates are data-driven in `src/content/techTerminalContent.ts`. Only curated templates and safe visual placeholders are used; no real tokens, private paths, or live shell commands are generated.
- Recent event IDs are retained per panel so the same event is not selected repeatedly in the last three choices.

## Timing

- Initial boot: A / B / C staggered at 0ms / 500ms / 1000ms.
- Command typing: base 34ms per character with jitter of approximately 25–45ms.
- Live event delay: A 0.9–2.4s, B 1.4–3.2s, C 1.0–2.9s, with individual templates allowed to extend that range.
- Output pause: approximately 180–360ms before the output group is committed.
- Scroll duration: 240ms with ease-out interpolation.
- Cursor interval: 620ms, updated only when its visible state toggles.

## Performance

Continuous 30-second Tech Stack sample after a fresh load:

| Metric | Result |
|---|---:|
| Samples | 30 |
| Average FPS | 119.2 |
| Minimum FPS | 109 |
| Events generated | 34 total across A/B/C |
| Canvas redraws | 745 |
| CanvasTexture update requests | 745 |

The redraw and texture-upload counters are logical `CanvasTexture.needsUpdate` requests, not a GPU driver-level transfer counter. They occur during command typing, cursor toggles, and the short scroll tween; there is no terminal Canvas redraw scheduled from the main 60FPS loop.

## Lifecycle

- First entry into `techStack`: starts the three-panel boot sequence and transitions into live scheduling.
- Leaving Tech: clears pending controller timers and pauses each texture without clearing history.
- Returning to Tech: resumes the paused state and schedules the next event from the preserved history; it does not replay the boot sequence.
- Debug `Replay`: explicitly clears history and replays the staggered boot sequence.
- Debug `Pause` / `Live Off`: pauses all terminal timers and disables live generation. `Resume` / `Live On` enables it again.
- Debug `Generate A/B/C`: creates one curated event for the selected panel when it is idle.
- Debug `Clear History`: clears the visible history buffer without changing the panel material or geometry.
- `document.visibilitychange`: hidden tabs pause timers and visible Tech tabs resume them. Visibility resume is idempotent with respect to pending timers.
- `prefers-reduced-motion: reduce`: skips the animated scroll tween and commits the target scroll position immediately.
- History is capped at 100 logical lines per panel.

## Regression Checks

- `npm run build`: passed.
- GLB loading and 5/5 ROOT validation: passed.
- Tech initial sequence, live updates, pause, resume, manual event, and clear-history controls: passed.
- Leaving Tech for Projects kept all three terminal upload counters unchanged during the observation window.
- Returning to Tech preserved the existing counters/history and resumed live activity.
- Projects, Creativity Base, Creativity CloseUp, and More Interests navigation: passed.
- CloseUp navigation to another module completed through `CreativityCloseup → CreativityBase → target module`.
- Browser application console errors: none observed. Statsig telemetry timeout messages are external browser telemetry warnings, not application errors.

## Known Issues

- Terminal output is curated visual content, not a connection to a real shell or repository.
- The authored Tech Stack camera composition still crops parts of some panels at the edge of the frame; this v2 intentionally does not change Camera State or layout.
- The debug controls remain available under `?debug=1`; they are not part of the intended production UI.
- GPU texture transfer bandwidth is not directly measurable through the current browser-side counters.
