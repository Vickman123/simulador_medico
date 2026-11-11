/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Sistema Unificado de Raycasting (Escritorio + WebXR)
 * Vickora Labs
 */

import * as THREE from 'three';
import { XRApp } from '../core/vxr/XRApp.js';
import { ControllerManager } from './controllerManager.js';

export interface RaycastCallbacks {
  onHover?: (structureId: string | null, meshName: string | null) => void;
  onSelect?: (structureId: string, meshName: string, hitPoint: THREE.Vector3) => void;
}

export class UnifiedRaycaster {
  private app: XRApp;
  private controllers: ControllerManager;
  private callbacks: RaycastCallbacks;

  private currentHoveredMesh: THREE.Mesh | null = null;
  private originalEmissive: THREE.Color = new THREE.Color(0, 0, 0);
  private originalIntensity: number = 0;

  private mousePosition: THREE.Vector2 = new THREE.Vector2(-999, -999);
  private isPointerDown: boolean = false;

  constructor(app: XRApp, controllers: ControllerManager, callbacks: RaycastCallbacks = {}) {
    this.app = app;
    this.controllers = controllers;
    this.callbacks = callbacks;

    this.setupDesktopEvents();
    this.setupWebXREvents();
  }

  private setupDesktopEvents(): void {
    const dom = this.app.renderer.domElement;

    dom.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = dom.getBoundingClientRect();
      this.mousePosition.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mousePosition.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    dom.addEventListener('pointerdown', () => {
      this.isPointerDown = true;
    });

    dom.addEventListener('pointerup', (e: PointerEvent) => {
      if (!this.isPointerDown) return;
      this.isPointerDown = false;

      // Only handle selection when NOT in active VR session
      if (!this.app.session.isPresenting) {
        const hits = this.app.raycastPointer(e);
        this.processHitSelection(hits);
      }
    });
  }

  private setupWebXREvents(): void {
    // When VR trigger is clicked
    this.app.onControllerSelect((controllerIndex, controller) => {
      const hits = this.app.raycastController(controllerIndex);
      this.processHitSelection(hits);
    });
  }

  private processHitSelection(intersections: THREE.Intersection[]): void {
    if (!intersections || intersections.length === 0) return;

    // Priorizar órganos internos específicos sobre las mallas musculares o esqueléticas envolventes
    const specificHit = intersections.find((hit) => {
      const mesh = hit.object as THREE.Mesh;
      const id = mesh.userData?.structureId;
      return id && id !== 'muscular' && id !== 'skeleton' && id !== 'skin' && mesh.userData.selectable;
    });

    const targetHit = specificHit || intersections.find((hit) => {
      const mesh = hit.object as THREE.Mesh;
      return mesh.userData && mesh.userData.selectable && mesh.userData.structureId;
    });

    if (targetHit) {
      const mesh = targetHit.object as THREE.Mesh;
      if (this.callbacks.onSelect) {
        this.callbacks.onSelect(
          mesh.userData.structureId,
          mesh.userData.structureName || mesh.name,
          targetHit.point
        );
      }
    }
  }

  public update(selectableTargets: THREE.Object3D[]): void {
    let activeHit: THREE.Intersection | null = null;

    if (this.app.session.isPresenting) {
      // 1. Raycast in WebXR via Controllers
      const controllerHits = this.controllers.updatePointers(selectableTargets);
      for (const ch of controllerHits) {
        if (ch.intersection && ch.intersection.object.userData?.selectable) {
          activeHit = ch.intersection;
          break;
        }
      }
    } else {
      // 2. Raycast in Desktop via Mouse
      if (this.mousePosition.x > -2 && this.mousePosition.y > -2) {
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(this.mousePosition, this.app.camera);
        const hits = raycaster.intersectObjects(selectableTargets, true);
        if (hits.length > 0) {
          // Priorizar órganos específicos si el cursor apunta sobre ellos
          const specificHit = hits.find((h) => {
            const id = h.object.userData?.structureId;
            return id && id !== 'muscular' && id !== 'skeleton' && id !== 'skin' && h.object.userData?.selectable;
          });
          activeHit = specificHit || hits.find((h) => h.object.userData?.selectable) || null;
        }
      }
    }

    // Handle Hover Highlight
    if (activeHit) {
      const mesh = activeHit.object as THREE.Mesh;
      if (this.currentHoveredMesh !== mesh) {
        this.clearHover();
        this.setHover(mesh);
      }
    } else {
      if (this.currentHoveredMesh) {
        this.clearHover();
      }
    }
  }

  private setHover(mesh: THREE.Mesh): void {
    this.currentHoveredMesh = mesh;
    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (mat && mat.emissive) {
      this.originalEmissive.copy(mat.emissive);
      this.originalIntensity = mat.emissiveIntensity || 0;
      mat.emissive.setHex(0x00f0ff);
      mat.emissiveIntensity = 0.45;
    }

    const dom = this.app.renderer.domElement;
    dom.style.cursor = 'pointer';

    if (this.callbacks.onHover) {
      this.callbacks.onHover(mesh.userData.structureId, mesh.userData.structureName || mesh.name);
    }
  }

  private clearHover(): void {
    if (this.currentHoveredMesh) {
      const mat = this.currentHoveredMesh.material as THREE.MeshStandardMaterial;
      if (mat && mat.emissive) {
        mat.emissive.copy(this.originalEmissive);
        mat.emissiveIntensity = this.originalIntensity;
      }
      this.currentHoveredMesh = null;
    }

    const dom = this.app.renderer.domElement;
    dom.style.cursor = 'default';

    if (this.callbacks.onHover) {
      this.callbacks.onHover(null, null);
    }
  }
}
