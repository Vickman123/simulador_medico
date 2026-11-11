/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Punto de Entrada Principal (Main Application Entrypoint)
 * Vickora Labs
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

    // 1. Instanciar Experience Manager (VXR Core + Escena + UI)
    const experience = new ExperienceManager(container);

    // 2. Cargar modelos anatómicos 3D con respaldo procedimental automático
    try {
      await experience.loadAnatomicalModels((systemName, progress) => {
        if (statusText) {
          const percent = Math.round(progress * 100);
          statusText.textContent = `Cargando ${systemName} (${percent}%)...`;
        }
      });
    } catch (modelErr) {
      console.warn('[HUMAN XR] Advertencia en carga de modelos, activando respaldo procedimental:', modelErr);
    }

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
  } catch (error: any) {
    console.error('[HUMAN XR] Error crítico al inicializar la experiencia:', error);
    if (statusText) {
      statusText.innerHTML = `
        <div style="color: #ef4444; font-weight: 700; margin-bottom: 6px;">Error al inicializar el laboratorio</div>
        <div style="font-size: 11px; color: #fca5a5; max-width: 420px; margin: 0 auto 12px auto;">${error?.message || error}</div>
        <button onclick="location.reload()" style="background: #00f0ff; color: #030712; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; cursor: pointer;">Reintentar</button>
      `;
    }
  }
});
