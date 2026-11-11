/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Gestor de Cámara y Vistas Anatómicas Predefinidas
 * Vickora Labs
 */

import * as THREE from 'three';
import { XRApp } from './vxr/XRApp.js';

export type CameraPreset = 'frontal' | 'posterior' | 'lateral' | 'superior' | 'torax' | 'cabeza';

export class CameraManager {
  private app: XRApp;
  private targetPosition: THREE.Vector3 = new THREE.Vector3();
  private targetLookAt: THREE.Vector3 = new THREE.Vector3();
  private isTransitioning: boolean = false;
  private transitionSpeed: number = 4.5;

  private presets: Record<CameraPreset, { pos: THREE.Vector3; look: THREE.Vector3 }> = {
    frontal: {
      pos: new THREE.Vector3(0, 1.35, 2.2),
      look: new THREE.Vector3(0, 1.05, 0),
    },
    posterior: {
      pos: new THREE.Vector3(0, 1.35, -2.2),
      look: new THREE.Vector3(0, 1.05, 0),
    },
    lateral: {
      pos: new THREE.Vector3(2.2, 1.35, 0),
      look: new THREE.Vector3(0, 1.05, 0),
    },
    superior: {
      pos: new THREE.Vector3(0, 2.7, 0.45),
      look: new THREE.Vector3(0, 0.95, 0),
    },
    torax: {
      pos: new THREE.Vector3(0, 1.35, 0.85),
      look: new THREE.Vector3(0, 1.30, 0),
    },
    cabeza: {
      pos: new THREE.Vector3(0, 1.70, 0.65),
      look: new THREE.Vector3(0, 1.68, 0),
    },
  };

  constructor(app: XRApp) {
    this.app = app;
    this.targetPosition.copy(this.presets.frontal.pos);
    this.targetLookAt.copy(this.presets.frontal.look);
  }

  public setPreset(preset: CameraPreset): void {
    const config = this.presets[preset];
    if (config) {
      this.targetPosition.copy(config.pos);
      this.targetLookAt.copy(config.look);
      this.isTransitioning = true;
    }
  }

  public focusOnPoint(pos: [number, number, number], lookAt: [number, number, number]): void {
    this.targetPosition.set(pos[0], pos[1], pos[2]);
    this.targetLookAt.set(lookAt[0], lookAt[1], lookAt[2]);
    this.isTransitioning = true;
  }

  public reset(): void {
    this.setPreset('frontal');
  }

  public update(delta: number): void {
    if (!this.isTransitioning || this.app.session.isPresenting) return;

    const camera = this.app.camera;
    const controls = this.app.controls;

    camera.position.lerp(this.targetPosition, delta * this.transitionSpeed);

    if (controls) {
      controls.target.lerp(this.targetLookAt, delta * this.transitionSpeed);
      controls.update();
    } else {
      camera.lookAt(this.targetLookAt);
    }

    if (camera.position.distanceTo(this.targetPosition) < 0.01) {
      camera.position.copy(this.targetPosition);
      if (controls) controls.target.copy(this.targetLookAt);
      this.isTransitioning = false;
    }
  }
}
