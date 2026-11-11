/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Panel Lateral de Inspección y Ficha Médica
 * PC PUMA – UNAM
 */

import { AnatomicalStructure, ANATOMICAL_SYSTEMS } from '../anatomy/catalog.js';

export interface InfoPanelCallbacks {
  onIsolate?: (structureId: string) => void;
  onResetIsolation?: () => void;
  onClose?: () => void;
}

export class InformationPanelUI {
  private container: HTMLElement;
  private currentStructure: AnatomicalStructure | null = null;
  private isCurrentlyIsolated: boolean = false;
  private callbacks: InfoPanelCallbacks;

  constructor(callbacks: InfoPanelCallbacks = {}) {
    this.callbacks = callbacks;
    this.container = document.createElement('div');
    this.container.className = 'inspector-panel hidden';
    this.renderEmpty();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  public showStructure(structure: AnatomicalStructure): void {
    this.currentStructure = structure;
    this.container.classList.remove('hidden');
    this.renderStructure(structure);
  }

  public hide(): void {
    this.container.classList.add('hidden');
  }

  private renderEmpty(): void {
    this.container.innerHTML = `
      <div style="text-align: center; color: #94a3b8; font-size: 13px; padding: 20px 0;">
        Selecciona una estructura para visualizar su correlación médica.
      </div>
    `;
  }

  private renderStructure(structure: AnatomicalStructure): void {
    const sys = ANATOMICAL_SYSTEMS[structure.systemId];

    let pearlsHTML = '';
    if (structure.clinicalPearls && structure.clinicalPearls.length > 0) {
      pearlsHTML = `
        <div class="inspector-section">
          <span class="section-label">🩺 Correlación Clínica UNAM</span>
          <div class="clinical-box">
            ${structure.clinicalPearls.map((p) => `<p style="margin-bottom: 6px;">• ${p}</p>`).join('')}
          </div>
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="inspector-header">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="inspector-system-tag" style="color: ${sys ? sys.accentColor : '#00f0ff'};">
            ${sys ? `${sys.icon} ${sys.name}` : 'ANATOMÍA'}
          </span>
          <button id="btn-close-inspector" style="background:none; border:none; color:#94a3b8; font-size:16px; cursor:pointer;">✕</button>
        </div>
        <div class="inspector-title">${structure.name}</div>
        <div class="inspector-latin">${structure.latinName}</div>
      </div>

      <div class="inspector-section">
        <span class="section-label">Descripción General</span>
        <div class="section-body">${structure.description}</div>
      </div>

      <div class="inspector-section">
        <span class="section-label">⚡ Función Fisiológica</span>
        <div class="section-body">${structure.function}</div>
      </div>

      <div class="inspector-section">
        <span class="section-label">📍 Ubicación Topográfica</span>
        <div class="section-body">${structure.location}</div>
      </div>

      ${pearlsHTML}

      <div class="inspector-actions">
        <button class="btn-inspector-action" id="btn-isolate-organ">
          ${this.isCurrentlyIsolated ? 'Quitar Aislamiento' : '🔍 Aislar Órgano'}
        </button>
        <button class="btn-inspector-action" id="btn-read-aloud" style="flex: 0 0 44px;" title="Lectura Médica en Audio">
          🔊
        </button>
      </div>
    `;

    // Close button
    this.container.querySelector('#btn-close-inspector')?.addEventListener('click', () => {
      this.hide();
      if (this.callbacks.onClose) this.callbacks.onClose();
    });

    // Isolate button
    this.container.querySelector('#btn-isolate-organ')?.addEventListener('click', () => {
      this.isCurrentlyIsolated = !this.isCurrentlyIsolated;
      if (this.isCurrentlyIsolated) {
        if (this.callbacks.onIsolate) this.callbacks.onIsolate(structure.id);
      } else {
        if (this.callbacks.onResetIsolation) this.callbacks.onResetIsolation();
      }
      this.renderStructure(structure);
    });

    // Audio Narration
    this.container.querySelector('#btn-read-aloud')?.addEventListener('click', () => {
      this.readAloud(structure);
    });
  }

  private readAloud(structure: AnatomicalStructure): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${structure.name}. ${structure.description} Función: ${structure.function}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-MX';
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  }

  public setIsolateState(isolated: boolean): void {
    this.isCurrentlyIsolated = isolated;
    if (this.currentStructure) {
      this.renderStructure(this.currentStructure);
    }
  }
}
