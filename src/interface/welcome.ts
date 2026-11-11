/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Pantalla de Bienvenida y Guía de Interacción Inmersiva
 * Vickora Labs
 */

export interface WelcomeModalCallbacks {
  onStart?: () => void;
}

export class WelcomeModalUI {
  private overlay: HTMLElement;
  private card: HTMLElement;
  private callbacks: WelcomeModalCallbacks;

  constructor(callbacks: WelcomeModalCallbacks = {}) {
    this.callbacks = callbacks;
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay';

    this.card = document.createElement('div');
    this.card.className = 'modal-card';
    this.overlay.appendChild(this.card);

    this.render();
  }

  public getElement(): HTMLElement {
    return this.overlay;
  }

  public close(): void {
    this.overlay.classList.add('hidden');
    if (this.callbacks.onStart) this.callbacks.onStart();
  }

  public open(): void {
    this.overlay.classList.remove('hidden');
  }

  private render(): void {
    this.card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="modal-badge">VICKORA LABS | INNOVACIÓN MÉDICA</span>
        <span style="font-size: 12px; color: #00f0ff; font-weight: 700;">DEMO TECNOLÓGICA</span>
      </div>

      <div>
        <div class="modal-title">
          HUMAN <span>XR</span>
        </div>
        <div style="color: #94a3b8; font-size: 14px; margin-top: 4px;">
          Laboratorio de Anatomía Humana Inmersiva para Meta Quest 3 & 3S
        </div>
      </div>

      <div class="modal-description">
        Bienvenido al entorno tridimensional de aprendizaje anatómico inmersivo de Vickora Labs. Explora el cuerpo humano a través de 8 sistemas anatómicos interactivos, visualiza simulaciones fisiológicas en tiempo real y evalúa tus conocimientos morfológicos.
      </div>

      <div class="controls-guide-grid">
        <div class="guide-column">
          <h4>🖥️ MODO ESCRITORIO</h4>
          <ul>
            <li><strong>Clic + Arrastrar:</strong> Rotar el modelo 3D</li>
            <li><strong>Rueda del ratón:</strong> Acercar / Alejar zoom</li>
            <li><strong>Clic en órgano:</strong> Abrir ficha médica y aislar</li>
            <li><strong>Barra inferior:</strong> Vistas, capas y quiz</li>
          </ul>
        </div>
        <div class="guide-column">
          <h4>🥽 META QUEST 3 / 3S</h4>
          <ul>
            <li><strong>Puntero Láser:</strong> Apuntar a los órganos</li>
            <li><strong>Gatillo (Trigger):</strong> Seleccionar estructura</li>
            <li><strong>Stick Analógico:</strong> Rotación y navegación</li>
            <li><strong>Botón 'Modo VR':</strong> Entrar en WebXR inmersivo</li>
          </ul>
        </div>
      </div>

      <button class="btn-primary-action" id="btn-enter-lab">
        INGRESAR AL LABORATORIO ANATÓMICO ➔
      </button>
    `;

    this.card.querySelector('#btn-enter-lab')?.addEventListener('click', () => {
      this.close();
    });
  }
}
