export function calculateEdpi(dpi: number, sensitivity: number) { return dpi * sensitivity; }

export function calculateCm360(dpi: number, sensitivity: number, yawDegreesPerCount: number) {
  return (360 * 2.54) / (dpi * sensitivity * yawDegreesPerCount);
}

export function calculateDpi(cm360: number, sensitivity: number, yawDegreesPerCount: number) {
  return (360 * 2.54) / (cm360 * sensitivity * yawDegreesPerCount);
}

export function convertSensitivity(sensitivity: number, fromYaw: number, toYaw: number) {
  return (sensitivity * fromYaw) / toYaw;
}

export function scaleResolution(width: number, height: number, targetWidth: number) {
  return { width: targetWidth, height: Math.round((targetWidth * height) / width) };
}

export function simplifyAspectRatio(width: number, height: number) {
  function gcd(first: number, second: number): number { return second === 0 ? first : gcd(second, first % second); }
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
}

export function calculateDownloadSeconds(sizeGb: number, speedMbps: number) { return (sizeGb * 1024 * 8) / speedMbps; }
export function calculateFps(frameTimeMs: number) { return 1000 / frameTimeMs; }