/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Dock de Control: Sistemas Anatómicos y Explorador Directo de Órganos
 * Vickora Labs
 */

import { HumanBody } from '../anatomy/humanBody.js';
import { ANATOMICAL_SYSTEMS, AnatomicalSystemId, ANATOMICAL_STRUCTURES } from '../anatomy/catalog.js';

export interface SystemSelectorCallbacks {
  onSelectOrgan?: (structureId: string) => void;
}

export class SystemSelectorUI {
  private container: HTMLElement;
  private humanBody: HumanBody;
  private callbacks: SystemSelectorCallbacks;
  private buttons: Map<AnatomicalSystemId, HTMLElement> = new Map();
  private organButtons: Map<string, HTMLElement> = new Map();
  private activeTab: 'systems' | 'organs' = 'systems';

  private static readonly ORGAN_LIST: { id: string; name: string; icon: string; systemId: AnatomicalSystemId; color: string }[] = [
    { id: 'heart', name: 'Corazón (Miocardio)', icon: '❤️', systemId: 'circulatory', color: '#ef4444' },
    { id: 'lungs', name: 'Pulmones y Vías', icon: '🫁', systemId: 'respiratory', color: '#38bdf8' },
    { id: 'brain', name: 'Encéfalo (Cerebro)', icon: '🧠', systemId: 'nervous', color: '#a855f7' },
    { id: 'liver', name: 'Hígado', icon: '🟤', systemId: 'digestive', color: '#b45309' },
    { id: 'stomach', name: 'Estómago', icon: '🟡', systemId: 'digestive', color: '#eab308' },
    { id: 'pancreas', name: 'Páncreas', icon: '⚡', systemId: 'endocrine', color: '#f59e0b' },
    { id: 'kidneys', name: 'Riñones', icon: '💧', systemId: 'urinary', color: '#06b6d4' },
    { id: 'intestine_small', name: 'Intestino Delgado', icon: '🟠', systemId: 'digestive', color: '#fb923c' },
    { id: 'intestine_large', name: 'Intestino Grueso / Colon', icon: '🟤', systemId: 'digestive', color: '#d97706' },
    { id: 'bladder', name: 'Vejiga Urinaria', icon: '💧', systemId: 'urinary', color: '#38bdf8' },
    { id: 'digestive_spleen', name: 'Bazo', icon: '🟣', systemId: 'digestive', color: '#c084fc' },
    { id: 'spinal_cord', name: 'Médula Espinal', icon: '🟡', systemId: 'nervous', color: '#facc15' },
    { id: 'thymus', name: 'Glándula Timo', icon: '⚡', systemId: 'endocrine', color: '#f472b6' },
    { id: 'thyroid', name: 'Glándula Tiroides', icon: '🦋', systemId: 'endocrine', color: '#38bdf8' },
    { id: 'skeleton', name: 'Esqueleto Completo', icon: '🦴', systemId: 'skeletal', color: '#e2e8f0' },
    { id: 'muscular', name: 'Masa Muscular', icon: '💪', systemId: 'muscular', color: '#f43f5e' },
  ];

  constructor(humanBody: HumanBody, callbacks: SystemSelectorCallbacks = {}) {
    this.humanBody = humanBody;
    this.callbacks = callbacks;
    this.container = document.createElement('div');
    this.container.className = 'systems-dock';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- Pestañas de Navegación del Dock -->
      <div class="dock-tab-header">
        <button class="dock-tab-btn ${this.activeTab === 'systems' ? 'active' : ''}" id="tab-btn-systems">
          🧬 Sistemas (8)
        </button>
        <button class="dock-tab-btn ${this.activeTab === 'organs' ? 'active' : ''}" id="tab-btn-organs">
          🫀 Órganos (16)
        </button>
      </div>

      <!-- Vista 1: Lista de Sistemas con Capas -->
      <div class="dock-view-container ${this.activeTab === 'systems' ? '' : 'hidden'}" id="view-systems">
        <div class="systems-list" id="systems-list-container"></div>
        <div class="system-dock-footer">
          <button class="btn-dock-action" id="btn-show-all-systems">Ver Todos</button>
          <button class="btn-dock-action" id="btn-hide-all-systems">Ocultar Todos</button>
        </div>
        <button class="btn-dock-visceral" id="btn-visceral-quick" title="Ocultar Músculos y Huesos para ver e interactuar con los órganos internos">
          🫀 Ver Órganos Internos (Sin Músculos)
        </button>
      </div>

      <!-- Vista 2: Lista Directa de Órganos -->
      <div class="dock-view-container ${this.activeTab === 'organs' ? '' : 'hidden'}" id="view-organs">
        <div class="organs-list-intro">Haz clic en cualquier órgano para ver su función médica e inspeccionarlo:</div>
        <div class="organs-list" id="organs-list-container"></div>
      </div>
    `;

    // 1. Manejador de Pestañas
    const btnTabSystems = this.container.querySelector('#tab-btn-systems') as HTMLButtonElement;
    const btnTabOrgans = this.container.querySelector('#tab-btn-organs') as HTMLButtonElement;
    const viewSystems = this.container.querySelector('#view-systems') as HTMLElement;
    const viewOrgans = this.container.querySelector('#view-organs') as HTMLElement;

    btnTabSystems.addEventListener('click', () => {
      this.activeTab = 'systems';
      btnTabSystems.classList.add('active');
      btnTabOrgans.classList.remove('active');
      viewSystems.classList.remove('hidden');
      viewOrgans.classList.add('hidden');
    });

    btnTabOrgans.addEventListener('click', () => {
      this.activeTab = 'organs';
      btnTabOrgans.classList.add('active');
      btnTabSystems.classList.remove('active');
      viewOrgans.classList.remove('hidden');
      viewSystems.classList.add('hidden');
    });

    // 2. Renderizar Sistemas
    const systemsList = this.container.querySelector('#systems-list-container')!;
    (Object.keys(ANATOMICAL_SYSTEMS) as AnatomicalSystemId[]).forEach((sysId) => {
      const sys = ANATOMICAL_SYSTEMS[sysId];
      const item = document.createElement('div');
      item.className = 'system-item-btn active';
      item.innerHTML = `
        <div class="system-item-left">
          <input type="checkbox" class="system-toggle-checkbox" checked id="chk-${sysId}">
          <span>${sys.icon}</span>
          <span style="color: ${sys.accentColor}; font-weight: 600;">${sys.name}</span>
        </div>
      `;

      const checkbox = item.querySelector('input') as HTMLInputElement;

      item.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        const isVisible = checkbox.checked;
        this.humanBody.setSystemVisibility(sysId, isVisible);
        item.classList.toggle('active', isVisible);
      });

      checkbox.addEventListener('change', () => {
        this.humanBody.setSystemVisibility(sysId, checkbox.checked);
        item.classList.toggle('active', checkbox.checked);
      });

      this.buttons.set(sysId, item);
      systemsList.appendChild(item);
    });

    // "Ver Todos"
    this.container.querySelector('#btn-show-all-systems')?.addEventListener('click', () => {
      this.humanBody.showAllSystems();
      this.buttons.forEach((el) => {
        el.classList.add('active');
        (el.querySelector('input') as HTMLInputElement).checked = true;
      });
    });

    // "Ocultar Todos"
    this.container.querySelector('#btn-hide-all-systems')?.addEventListener('click', () => {
      (Object.keys(ANATOMICAL_SYSTEMS) as AnatomicalSystemId[]).forEach((sysId) => {
        this.humanBody.setSystemVisibility(sysId, false);
      });
      this.buttons.forEach((el) => {
        el.classList.remove('active');
        (el.querySelector('input') as HTMLInputElement).checked = false;
      });
    });

    // "Ver Órganos Internos (Sin Músculos ni Huesos)"
    this.container.querySelector('#btn-visceral-quick')?.addEventListener('click', () => {
      this.humanBody.toggleVisceralView();
      // Sincronizar checkboxes del dock
      (Object.keys(ANATOMICAL_SYSTEMS) as AnatomicalSystemId[]).forEach((id) => {
        const isVis = this.humanBody.isSystemVisible(id);
        this.updateSystemState(id, isVis);
      });
    });

    // 3. Renderizar Órganos Directos
    const organsList = this.container.querySelector('#organs-list-container')!;
    SystemSelectorUI.ORGAN_LIST.forEach((org) => {
      const item = document.createElement('div');
      item.className = 'organ-card-btn';
      item.innerHTML = `
        <div class="organ-card-left">
          <span class="organ-icon">${org.icon}</span>
          <div class="organ-info">
            <span class="organ-name">${org.name}</span>
            <span class="organ-tag" style="color: ${org.color};">${ANATOMICAL_SYSTEMS[org.systemId]?.name || 'Anatomía'}</span>
          </div>
        </div>
        <span class="organ-arrow">→</span>
      `;

      item.addEventListener('click', () => {
        // Asegurar que el sistema correspondiente esté visible
        if (!this.humanBody.isSystemVisible(org.systemId)) {
          this.humanBody.setSystemVisibility(org.systemId, true);
          this.updateSystemState(org.systemId, true);
        }

        // Marcar este botón como activo
        this.organButtons.forEach((btn) => btn.classList.remove('active'));
        item.classList.add('active');

        // Notificar selección
        if (this.callbacks.onSelectOrgan) {
          this.callbacks.onSelectOrgan(org.id);
        }
      });

      this.organButtons.set(org.id, item);
      organsList.appendChild(item);
    });
  }

  public updateSystemState(sysId: AnatomicalSystemId, isVisible: boolean): void {
    const el = this.buttons.get(sysId);
    if (el) {
      el.classList.toggle('active', isVisible);
      (el.querySelector('input') as HTMLInputElement).checked = isVisible;
    }
  }

  public highlightOrgan(structureId: string): void {
    this.organButtons.forEach((btn, id) => {
      btn.classList.toggle('active', id === structureId);
    });
  }
}
