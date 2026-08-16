export const HATCH_VERTEX_SHADER = /* glsl */ `
  varying vec3 vNprWorldNormal;

  void main() {
    vNprWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const HATCH_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec3 uLightDirection;
  uniform vec3 uHatchColor;
  uniform float uHatchLineWidth;
  uniform float uHatchSpacing;
  uniform float uHatchAngle;
  uniform float uHatchOpacity;
  uniform float uMidtoneStrength;
  uniform float uShadowThreshold;
  uniform float uDeepShadowThreshold;
  uniform float uShadowDarkenAmount;

  varying vec3 vNprWorldNormal;

  float hatchLines(vec2 screenPosition, float angle) {
    vec2 axis = vec2(cos(angle), sin(angle));
    float coordinate = dot(screenPosition, axis);
    float phase = fract(coordinate / uHatchSpacing);
    float distanceToLine = abs(phase - 0.5);
    float halfWidth = 0.5 * uHatchLineWidth / uHatchSpacing;
    float antiAlias = 0.012;
    return 1.0 - smoothstep(halfWidth, halfWidth + antiAlias, distanceToLine);
  }

  void main() {
    float brightness = max(dot(normalize(vNprWorldNormal), normalize(uLightDirection)), 0.0);
    // Thresholds are brightness thresholds: only genuinely dark-facing areas
    // receive hatching. The base material remains responsible for the light.
    float shadowMask = 1.0 - smoothstep(uShadowThreshold - 0.05, uShadowThreshold + 0.05, brightness);
    float deepMask = 1.0 - smoothstep(uDeepShadowThreshold - 0.03, uDeepShadowThreshold + 0.03, brightness);

    float primaryLines = hatchLines(gl_FragCoord.xy, uHatchAngle);
    float crossLines = hatchLines(gl_FragCoord.xy, uHatchAngle + 1.5707963);
    float alpha = shadowMask * primaryLines * uHatchOpacity * uMidtoneStrength;
    alpha += deepMask * primaryLines * uHatchOpacity * 0.98;
    alpha += deepMask * crossLines * uHatchOpacity * 0.28;

    // A very restrained deep-shadow veil is allowed, but it never replaces
    // the light base with a global gray tone.
    alpha += deepMask * uShadowDarkenAmount * 0.18;

    gl_FragColor = vec4(uHatchColor, min(alpha, 0.92));
  }
`;

export const PAPER_VERTEX_SHADER = /* glsl */ `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const PAPER_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec3 uPaperColor;
  uniform float uPaperOpacity;

  float hash(vec2 value) {
    return fract(sin(dot(value, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 cell = floor(gl_FragCoord.xy * 0.72);
    float grain = hash(cell);
    float alpha = uPaperOpacity * (0.35 + grain * 0.65);
    gl_FragColor = vec4(uPaperColor, alpha);
  }
`;

export const OUTLINE_VERTEX_SHADER = /* glsl */ `
  uniform float uOutlineWidth;

  void main() {
    vec3 transformed = position + normal * uOutlineWidth;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

export const FLAT_COLOR_FRAGMENT_SHADER = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;

  void main() {
    gl_FragColor = vec4(uColor, 1.0);
  }
`;
