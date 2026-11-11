/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Utilidad de Resolución de Rutas de Recursos (Asset Helper)
 * PC PUMA – UNAM
 */

export function resolveModelUrl(modelPath: string): string {
  if (modelPath.startsWith('http://') || modelPath.startsWith('https://')) {
    return modelPath;
  }

  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = modelPath.startsWith('/') ? modelPath.slice(1) : modelPath;

  return `${cleanBase}${cleanPath}`;
}
