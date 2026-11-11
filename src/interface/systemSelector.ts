/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Dock de Selección y Control de Sistemas Anatómicos
 * Vickora Labs
 */

import { HumanBody } from '../anatomy/humanBody.js';
import { ANATOMICAL_SYSTEMS, AnatomicalSystemId } from '../anatomy/catalog.js';

export class SystemSelectorUI {
  private container: HTMLElement;
  private humanBody: HumanBody;
  private buttons: Map<AnatomicalSystemId, HTMLElement> = new Map();

  constructor(humanBody: HumanBody) {
    this.humanBody = humanBody;
    this.container = document.createElement('div');
    this.container.className = 'systems-dock';
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="systems-dock-header">
        <span>SISTEMAS ANATÓMICOS</span>
        <span style="font-size: 10px; color: #94a3b8;">8 CAPAS</span>
      </div>
      <div class="systems-list" id="systems-list-container"></div>
      <div class="system-dock-footer">
        <button class="btn-dock-action" id="btn-show-all-systems">Ver Todos</button>
        <button class="btn-dock-action" id="btn-hide-all-systems">Ocultar Todos</button>
      </div>
    `;

    const list = this.container.querySelector('#systems-list-container')!;

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

      // Toggle system on click
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
      list.appendChild(item);
    });

    // "Ver Todos"
    this.container.querySelector('#btn-show-all-systems')?.addEventListener('click', () => {
      this.humanBody.showAllSystems();
      this.buttons.forEach((el, sysId) => {
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
  }

  public updateSystemState(sysId: AnatomicalSystemId, isVisible: boolean): void {
    const el = this.buttons.get(sysId);
    if (el) {
      el.classList.toggle('active', isVisible);
      (el.querySelector('input') as HTMLInputElement).checked = isVisible;
    }
  }
}
