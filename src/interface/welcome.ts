/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Pantalla de Bienvenida y Hero Landing
 * Vickora Labs
 */

import { resolveModelUrl } from '../core/assetHelper.js';

export interface WelcomeModalCallbacks {
  onStart?: () => void;
}

export class WelcomeModalUI {
  private overlay: HTMLElement;
  private container: HTMLElement;
  private callbacks: WelcomeModalCallbacks;

  constructor(callbacks: WelcomeModalCallbacks = {}) {
    this.callbacks = callbacks;
    this.overlay = document.createElement('div');
    this.overlay.className = 'welcome-hero-overlay';

    this.container = document.createElement('div');
    this.container.className = 'welcome-hero-container';
    this.overlay.appendChild(this.container);

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
    const bgUrl = resolveModelUrl('images/welcome_hero_clean.jpg');

    this.container.style.backgroundImage = `url('${bgUrl}')`;

    this.container.innerHTML = `
      <!-- HUD Decorative Corner Brackets -->
      <div class="hud-corner top-left"></div>
      <div class="hud-corner top-right"></div>
      <div class="hud-corner bottom-left"></div>
      <div class="hud-corner bottom-right"></div>

      <!-- Right Column: Interactive Hero Content -->
      <div class="welcome-hero-content">
        <!-- Brand Header -->
        <div class="hero-brand-header">
          <svg class="vickora-logo-svg" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 3 L 13 3 L 21 25 L 16 25 Z" fill="#ffffff" />
            <path d="M 22 3 L 37 3 L 26 18 L 20 13 Z" fill="#ffffff" fill-opacity="0.95" />
          </svg>
          <span class="hero-brand-name">VICKORA LABS</span>
          <span class="hero-brand-divider"></span>
          <span class="hero-brand-tag">INNOVACIÓN MÉDICA</span>
        </div>

        <!-- Main Title -->
        <h1 class="hero-main-title">
          HUMAN <span class="cyan-gradient">XR</span>
        </h1>

        <!-- Subtitle -->
        <div class="hero-subtitle">
          LABORATORIO DE ANATOMÍA HUMANA INMERSIVA
        </div>

        <!-- Description -->
        <p class="hero-description">
          Explora el cuerpo humano en 3D, interactúa con sus sistemas anatómicos y vive una experiencia de aprendizaje inmersivo.
        </p>

        <!-- CTA Enter Button (Pill with Glowing Cube) -->
        <div class="hero-cta-wrapper">
          <button class="hero-enter-btn" id="btn-enter-lab" title="Ingresar al Laboratorio de Anatomía 3D">
            <div class="btn-icon-capsule">
              <svg viewBox="0 0 24 24" class="cube-icon" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <span class="btn-label">INGRESAR AL LABORATORIO</span>
            <span class="btn-arrow">→</span>
          </button>
        </div>

        <!-- Bottom Capabilities Row -->
        <div class="hero-capabilities-row">
          <div class="capability-item">
            <svg viewBox="0 0 24 24" class="cap-icon" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="2" y="6" width="20" height="12" rx="4"></rect>
              <circle cx="8" cy="12" r="2.5"></circle>
              <circle cx="16" cy="12" r="2.5"></circle>
              <path d="M10.5 14.5 Q12 13.5 13.5 14.5"></path>
            </svg>
            <span>Meta Quest 3 / 3S</span>
          </div>

          <div class="cap-divider"></div>

          <div class="capability-item">
            <svg viewBox="0 0 24 24" class="cap-icon" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="4" width="18" height="12" rx="2"></rect>
              <line x1="2" y1="20" x2="22" y2="20"></line>
            </svg>
            <span>WebXR / Desktop</span>
          </div>

          <div class="cap-divider"></div>

          <div class="capability-item">
            <svg viewBox="0 0 24 24" class="cap-icon" fill="none" stroke="currentColor" stroke-width="1.8">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 12 12 17 22 12"></polyline>
              <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
            <span>8 Sistemas Anatómicos</span>
          </div>
        </div>
      </div>
    `;

    this.container.querySelector('#btn-enter-lab')?.addEventListener('click', () => {
      this.close();
    });
  }
}
