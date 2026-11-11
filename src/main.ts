/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Punto de Entrada Principal (Main Application Entrypoint)
 * PC PUMA – UNAM
 */

import { ExperienceManager } from './core/experienceManager.js';

window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('webgl-canvas-container');
  const loadingOverlay = document.getElementById('loading-overlay');
  const statusText = document.getElementById('loading-status-text');

  if (!container) {
    console.error('[HUMAN XR] No se encontró el contenedor #webgl-canvas-container.');
    return;
  }

  try {
    if (statusText) statusText.textContent = 'Inicializando entorno tridimensional WebXR...';

    // 1. Instanciar Experience Manager
    const experience = new ExperienceManager(container);

    // 2. Cargar modelos anatómicos 3D
    await experience.loadAnatomicalModels((systemName, progress) => {
      if (statusText) {
        const percent = Math.round(progress * 100);
        statusText.textContent = `Cargando ${systemName} (${percent}%)...`;
      }
    });

    if (statusText) statusText.textContent = '¡Laboratorio listo!';

    // 3. Ocultar pantalla de carga
    setTimeout(() => {
      if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
          loadingOverlay.style.display = 'none';
        }, 500);
      }
    }, 400);

    console.log('[HUMAN XR] Laboratorio de Anatomía Humana cargado exitosamente.');
  } catch (error) {
    console.error('[HUMAN XR] Error crítico al inicializar la experiencia:', error);
    if (statusText) {
      statusText.textContent = 'Error al cargar recursos 3D. Verifica la conexión.';
      statusText.style.color = '#ef4444';
    }
  }
});
