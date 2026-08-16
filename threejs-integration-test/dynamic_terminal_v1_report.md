# Dynamic Terminal CanvasTexture System v1

## Architecture

- `src/terminal/TerminalTexture.ts` owns one HTML Canvas 2D surface and one `THREE.CanvasTexture`.
- `src/terminal/TerminalController.ts` owns the three panel instances, material binding, stagger timing, lifecycle, replay and debug actions.
- `src/content/techTerminalContent.ts` stores the terminal content as typed data instead of embedding text in the renderer.
- `Terminal_Panel_A/B/C` keep their original object transforms, geometry and UVs. Only their materials are replaced with independent dynamic CanvasTexture materials.

The pipeline is:

```text
typed terminal data
  -> Canvas 2D render
  -> CanvasTexture A/B/C
  -> MeshBasicMaterial
  -> Terminal_Panel_A/B/C
```

## Canvas and Material

- Canvas resolution: `1024 × 512` for each panel.
- Texture type: `THREE.CanvasTexture`.
- Color space: `THREE.SRGBColorSpace`.
- Filtering: `LinearFilter`, no mipmaps, clamp-to-edge wrapping.
- Material: `THREE.MeshBasicMaterial`.
- Terminal material is white/unlit so text is not darkened by scene lighting or NPR.
- `depthTest`, `depthWrite`, `FrontSide` and polygon offset remain enabled.
- All three panels remain `isContentPlane = true` and are excluded from NPR.

## Animation

- Panel A starts at `0ms`.
- Panel B starts at `300ms`.
- Panel C starts at `600ms`.
- Typing speed is approximately `25–43ms` per character with small jitter.
- Only command lines are typed character by character.
- Output lines appear as complete lines after the command finishes.
- Cursor blink interval: `620ms`, only while typing.
- First entry into Tech Stack plays the staggered animation.
- Leaving Tech Stack stops typing and cursor timers while preserving the last frame.
- Returning to Tech Stack shows completed content without replaying automatically.
- Debug mode provides `Replay`, `Pause` and `Complete Instantly`.

## Performance

The renderer does not redraw the terminal canvases in the main Three.js animation loop.

- Initial load: 3 Canvas renders / 3 texture update flags.
- Browser typing test: 32 total Canvas renders / texture update flags after completion, including the initial three renders.
- Browser test FPS during typing: approximately `120 FPS`.
- After completion, the terminal canvases remain static.
- After leaving Tech Stack, texture update counts remained unchanged.
- Pause test: after a short pending timer window, texture update count stayed unchanged for the following `700ms`.

The reported texture upload count is the number of `CanvasTexture.needsUpdate` requests. It is not a GPU profiler counter.

## Integration

- `main.ts` calls `terminalController.activate()` when navigating to `techStack`.
- Other module transitions call `terminalController.deactivate()`.
- Instant Camera State changes use the same lifecycle synchronization.
- The CameraController does not know about Canvas drawing details.
- Existing Camera Navigation, NPR, Projects Screen, Shadows and Creativity CloseUp remain separate.

## Regression Checks

- Intro: passed.
- Tech Stack: passed; three dynamic panels render.
- Projects: passed; Projects Screen dynamic image still loads.
- Creativity: passed.
- More Interests: passed.
- Creativity CloseUp enter: passed.
- Creativity CloseUp → More Interests: passed through the existing return-to-base rule.
- Browser console application errors: none observed.
- `npm run build`: passed.

## Known Issues

- Terminal text is currently curated placeholder content, not a live shell connection.
- Replay, Pause and Complete controls are intentionally available only in Debug Mode.
- The existing Camera composition remains unchanged; panel visibility depends on the authored Tech Stack camera angle.
