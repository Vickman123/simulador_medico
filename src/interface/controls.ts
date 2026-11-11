/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Barra de Controles Inferior y Vistas Anatómicas
 * PC PUMA – UNAM
 */

export interface ControlsCallbacks {
  onToggleExploded?: () => boolean;
  onToggleSkin?: () => boolean;
  onTogglePhysiology?: () => boolean;
  onOpenQuiz?: () => void;
  onResetView?: () => void;
  onCameraPreset?: (preset: 'frontal' | 'posterior' | 'lateral' | 'superior' | 'torax' | 'cabeza') => void;
}

export class ControlsUI {
  private container: HTMLElement;
  private callbacks: ControlsCallbacks;

  constructor(callbacks: ControlsCallbacks = {}) {
    this.callbacks = callbacks;
    this.container = document.createElement('div');
    this.container.className = 'bottom-controls-bar';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <button class="control-btn" id="btn-toggle-exploded" title="Separar los sistemas anatómicos en capas espaciales">
        <span>✨</span> Vista Desglosada
      </button>

      <button class="control-btn" id="btn-toggle-skin" title="Mostrar u ocultar la silueta humana de cristal">
        <span>👤</span> Silueta Cristal
      </button>

      <button class="control-btn active" id="btn-toggle-physiology" title="Activar/Pausar animaciones fisiológicas de latido, respiración y peristalsis">
        <span>💓</span> Simulación Fisiológica
      </button>

      <button class="control-btn btn-quiz" id="btn-open-quiz" title="Evaluación Anatómica interactiva UNAM">
        <span>📝</span> Evaluación UNAM
      </button>

      <div class="separator"></div>

      <button class="control-btn" id="btn-preset-frontal" title="Vista Anterior / Frontal">
        Frontal
      </button>
      <button class="control-btn" id="btn-preset-posterior" title="Vista Posterior">
        Posterior
      </button>
      <button class="control-btn" id="btn-preset-lateral" title="Vista Lateral">
        Lateral
      </button>
      <button class="control-btn" id="btn-preset-torax" title="Enfoque Tórax (Corazón / Pulmones)">
        Tórax
      </button>
      <button class="control-btn" id="btn-preset-cabeza" title="Enfoque Cabeza (Encéfalo / Cráneo)">
        Encéfalo
      </button>

      <div class="separator"></div>

      <button class="control-btn" id="btn-reset-view" title="Restablecer Posición Original">
        <span>🔄</span> Restablecer
      </button>
    `;

    // Exploded Layers Toggle
    const explodedBtn = this.container.querySelector('#btn-toggle-exploded') as HTMLElement;
    explodedBtn.addEventListener('click', () => {
      if (this.callbacks.onToggleExploded) {
        const isExploded = this.callbacks.onToggleExploded();
        explodedBtn.classList.toggle('active', isExploded);
      }
    });

    // Skin Silhouette Toggle
    const skinBtn = this.container.querySelector('#btn-toggle-skin') as HTMLElement;
    skinBtn.addEventListener('click', () => {
      if (this.callbacks.onToggleSkin) {
        const isSkin = this.callbacks.onToggleSkin();
        skinBtn.classList.toggle('active', isSkin);
      }
    });

    // Physiology Toggle
    const physioBtn = this.container.querySelector('#btn-toggle-physiology') as HTMLElement;
    physioBtn.addEventListener('click', () => {
      if (this.callbacks.onTogglePhysiology) {
        const isActive = this.callbacks.onTogglePhysiology();
        physioBtn.classList.toggle('active', isActive);
      }
    });

    // Quiz Button
    this.container.querySelector('#btn-open-quiz')?.addEventListener('click', () => {
      if (this.callbacks.onOpenQuiz) this.callbacks.onOpenQuiz();
    });

    // Camera Presets
    this.container.querySelector('#btn-preset-frontal')?.addEventListener('click', () => {
      if (this.callbacks.onCameraPreset) this.callbacks.onCameraPreset('frontal');
    });
    this.container.querySelector('#btn-preset-posterior')?.addEventListener('click', () => {
      if (this.callbacks.onCameraPreset) this.callbacks.onCameraPreset('posterior');
    });
    this.container.querySelector('#btn-preset-lateral')?.addEventListener('click', () => {
      if (this.callbacks.onCameraPreset) this.callbacks.onCameraPreset('lateral');
    });
    this.container.querySelector('#btn-preset-torax')?.addEventListener('click', () => {
      if (this.callbacks.onCameraPreset) this.callbacks.onCameraPreset('torax');
    });
    this.container.querySelector('#btn-preset-cabeza')?.addEventListener('click', () => {
      if (this.callbacks.onCameraPreset) this.callbacks.onCameraPreset('cabeza');
    });

    // Reset View
    this.container.querySelector('#btn-reset-view')?.addEventListener('click', () => {
      if (this.callbacks.onResetView) this.callbacks.onResetView();
    });
  }
}
