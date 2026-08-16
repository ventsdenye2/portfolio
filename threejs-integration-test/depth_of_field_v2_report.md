# Depth of Field v2 Report

## Scope

DOF v2 was implemented only in the Three.js integration test project. Blender files, GLB data, model transforms, ROOT transforms, camera JSON, NPR modules, and camera navigation logic were not changed.

## Root causes addressed

- The previous DOF preset was too strong for the bright NPR scene (`aperture 0.007`, `maxBlur 0.012`). Large background shadows therefore became visibly washed out and depth discontinuities were easier to notice.
- Focus was previously treated as a mostly static value. Camera transitions could therefore leave the focal plane behind the active module.
- The post-processing chain now keeps the existing color-management stage and uses a weaker Bokeh configuration.

## Pass order

The current order is:

```text
RenderPass → BokehPass (DOF after NPR) → OutputPass
```

`OutputPass` remains the final color-management/output stage. NPR rendering still happens inside the scene materials before the DOF pass; no NPR shader or material was rewritten in this task.

## State presets

| State | Focus target | Aperture | Max blur | Observed focus depth |
| --- | --- | ---: | ---: | ---: |
| `personalIntro` | `Photo_Frame` | 0.0025 | 0.0040 | 2.20u |
| `techStack` | three Terminal Panels combined | 0.0023 | 0.0040 | 4.68u |
| `projects` | `Projects_Screen` | 0.0025 | 0.0045 | 6.34u |
| `creativityBase` | `Creativity_Screen` | 0.0025 | 0.0045 | 4.89u |
| `creativityCloseup` | `Creativity_Screen` | 0.0032 | 0.0055 | 2.17u |
| `moreInterests` | `ROOT_MoreInterests` visual center | 0.0023 | 0.0040 | 8.16u |

The Bokeh `focus` uniform uses camera-space view depth rather than Euclidean distance. This is intentional: BokehPass evaluates the focal plane in camera space, so the value stays correct when the target is viewed at an angle.

## Dynamic focus / rack focus

Each instant camera state applies its corresponding focus target. During navigation, the target state is applied before and after the camera transition, while the actual focal distance is smoothed every frame with exponential easing. This produces a rack-focus transition instead of a sudden focal-plane jump.

Focus targets:

- Personal Intro: `Photo_Frame` / `PersonalIntro_Photo`
- Tech Stack: the combined visual center of `Terminal_Panel_A`, `Terminal_Panel_B`, and `Terminal_Panel_C`
- Projects: `Projects_Screen`, with `Workstation_Desk` as fallback
- Creativity: `Creativity_Screen`, with `Workstation_Monitor` as fallback
- Creativity CloseUp: `Creativity_Screen`
- More Interests: `ROOT_MoreInterests`

## Debug controls

The test page now exposes:

- DOF On/Off
- Focus Current Module
- Aperture
- Max Blur
- Focus Distance
- Focus Target
- The active post-processing order

The existing debug metrics remain available. `renderer.info` is reset once per frame before the active render path so the displayed draw-call/triangle values include the current composer render.

## Reference captures

The following captures were generated without the Debug UI:

- `references/dof_projects_off.png`
- `references/dof_projects_on.png`
- `references/dof_intro_off.png`
- `references/dof_intro_on.png`
- `references/dof_creativity_closeup.png`

The capture-only query mode (`?capture=1`) hides the test controls and does not affect normal page visits. It is used only to produce clean reference images.

## Visual comparison

- The Projects capture keeps the monitor, tower, keyboard, and desk substantially brighter than the previous strong-DOF version.
- The on/off comparison shows DOF as a restrained separation effect rather than a global gray/washed overlay.
- Intro keeps the photo frame readable while leaving distant scene elements only mildly softened.
- Creativity CloseUp focuses on the screen plane and monitor face with a slightly stronger but still restrained preset.
- The remaining NPR appearance is still determined by the existing module NPR presets; this task did not attempt to reproduce Blender Visual Master rendering pixel-for-pixel.

## Performance sample

Measured in the browser at the Projects state on the current desktop test viewport:

| Mode | FPS | Draw calls | Triangles |
| --- | ---: | ---: | ---: |
| DOF on | 120 | 482 | 143,950 |
| DOF off | 120 | 240 | 71,974 |

The extra work is expected because the Bokeh pipeline renders scene color/depth and applies the final post-process. No visible stutter was observed in the test viewport.

## Regression checks

- GLB loaded and 5/5 ROOT nodes remained present.
- All six DOF state presets resolved successfully.
- App console warnings/errors were empty during the final normal-page check.
- `Creativity CloseUp → More Interests` followed the required `CloseUp → Creativity Base → More Interests` route.
- Existing NPR, screen texture, shadow, camera, and state-machine code remained intact.

## Remaining limitations

- This is still the Three.js BokehPass prototype, not a physically accurate cinematic DOF implementation.
- BokehPass is a screen-space blur and can still soften across some depth discontinuities; the weaker values reduce the artifact rather than eliminating the algorithmic limitation.
- No DOF effect was added to Blender or baked into the GLB.
