/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Gestor de Controladores WebXR y Punteros Láser para Meta Quest 3/3S
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { XRApp } from '../core/vxr/XRApp.js';

export interface ControllerRaycastHit {
  controllerIndex: number;
  intersection: THREE.Intersection | null;
}

export class ControllerManager {
  private app: XRApp;
  public readonly group: THREE.Group;
  private laserRays: THREE.Line[] = [];
  private reticles: THREE.Mesh[] = [];
  private controllerTransforms: THREE.Matrix4[] = [new THREE.Matrix4(), new THREE.Matrix4()];

  constructor(app: XRApp) {
    this.app = app;
    this.group = new THREE.Group();
    this.group.name = 'Quest_Controllers_Manager';

    this.setupControllerPointers();
  }

  private setupControllerPointers(): void {
    // Laser ray material: cyan glow gradient
    const laserMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.65,
      linewidth: 2,
    });

    const reticleGeo = new THREE.RingGeometry(0.015, 0.022, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });

    // Create pointer rays for both controllers (Index 0: Right, Index 1: Left)
    for (let i = 0; i < 2; i++) {
      // 1. Ray line (5 meters default length)
      const laserGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -5),
      ]);
      const laser = new THREE.Line(laserGeo, laserMat.clone());
      laser.name = `Laser_Ray_${i}`;
      this.laserRays.push(laser);

      // 2. Reticle ring at intersection
      const reticle = new THREE.Mesh(reticleGeo, reticleMat.clone());
      reticle.name = `Reticle_${i}`;
      reticle.visible = false;
      this.reticles.push(reticle);
      this.app.scene.nativeScene.add(reticle);

      // Attach laser line to controller space in XRSession
      const controller = this.app.session.controllers[i];
      if (controller) {
        controller.add(laser);
      }
    }
  }

  public updatePointers(targets: THREE.Object3D[]): ControllerRaycastHit[] {
    const hits: ControllerRaycastHit[] = [];

    for (let i = 0; i < 2; i++) {
      const intersections = this.app.raycastController(i, targets, true);
      const laser = this.laserRays[i];
      const reticle = this.reticles[i];

      if (intersections && intersections.length > 0) {
        const hit = intersections[0];
        hits.push({ controllerIndex: i, intersection: hit });

        // Shorten laser ray to hit point
        const distance = hit.distance;
        const posAttr = laser.geometry.attributes.position as THREE.BufferAttribute;
        posAttr.setXYZ(1, 0, 0, -distance);
        posAttr.needsUpdate = true;

        // Position reticle on surface oriented with hit normal
        reticle.position.copy(hit.point);
        if (hit.face) {
          reticle.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), hit.face.normal);
        }
        reticle.visible = true;
      } else {
        hits.push({ controllerIndex: i, intersection: null });

        // Reset laser ray to default 5 meters
        const posAttr = laser.geometry.attributes.position as THREE.BufferAttribute;
        posAttr.setXYZ(1, 0, 0, -5);
        posAttr.needsUpdate = true;
        reticle.visible = false;
      }
    }

    return hits;
  }
}
