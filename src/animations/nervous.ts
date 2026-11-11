/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Simulación Fisiológica: Propagación del Potencial de Acción (Action Potentials)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';

export class NervousAnimation {
  public readonly group: THREE.Group;
  public isEnabled: boolean = true;
  private pulseCount = 140;
  private pulsesMesh: THREE.Points;
  private pulsePositions: Float32Array;
  private pulseProgress: Float32Array;
  private nerveCurves: THREE.CatmullRomCurve3[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'Neural_Action_Potentials';

    // 1. Central spinal path
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.68, 0.0), // Motor cortex
        new THREE.Vector3(0, 1.58, -0.01), // Brainstem
        new THREE.Vector3(0, 1.45, -0.025), // Cervical spine
        new THREE.Vector3(0, 1.25, -0.03), // Thoracic spine
        new THREE.Vector3(0, 1.05, -0.025), // Lumbar spine
      ])
    );

    // 2. Right Brachial nerve
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.45, -0.025),
        new THREE.Vector3(0.08, 1.45, -0.01),
        new THREE.Vector3(0.18, 1.38, 0.0),
        new THREE.Vector3(0.28, 1.25, 0.0),
        new THREE.Vector3(0.35, 1.05, 0.0),
      ])
    );

    // 3. Left Brachial nerve
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.45, -0.025),
        new THREE.Vector3(-0.08, 1.45, -0.01),
        new THREE.Vector3(-0.18, 1.38, 0.0),
        new THREE.Vector3(-0.28, 1.25, 0.0),
        new THREE.Vector3(-0.35, 1.05, 0.0),
      ])
    );

    // 4. Right Sciatic nerve
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.05, -0.025),
        new THREE.Vector3(0.05, 0.95, -0.02),
        new THREE.Vector3(0.08, 0.65, -0.01),
        new THREE.Vector3(0.075, 0.45, -0.01),
      ])
    );

    // 5. Left Sciatic nerve
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1.05, -0.025),
        new THREE.Vector3(-0.05, 0.95, -0.02),
        new THREE.Vector3(-0.08, 0.65, -0.01),
        new THREE.Vector3(-0.075, 0.45, -0.01),
      ])
    );

    this.pulsePositions = new Float32Array(this.pulseCount * 3);
    this.pulseProgress = new Float32Array(this.pulseCount);

    for (let i = 0; i < this.pulseCount; i++) {
      this.pulseProgress[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pulsePositions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.013,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.pulsesMesh = new THREE.Points(geo, mat);
    this.group.add(this.pulsesMesh);
  }

  public update(delta: number): void {
    if (!this.isEnabled) {
      this.group.visible = false;
      return;
    }
    this.group.visible = true;

    const posAttr = this.pulsesMesh.geometry.attributes.position as THREE.BufferAttribute;
    const tempVec = new THREE.Vector3();
    const impulseSpeed = 0.55; // High velocity nerve conduction impulse

    for (let i = 0; i < this.pulseCount; i++) {
      this.pulseProgress[i] += impulseSpeed * delta;
      if (this.pulseProgress[i] > 1.0) {
        this.pulseProgress[i] -= 1.0;
      }

      // Assign pulses among nerve curves
      const curveIndex = i % this.nerveCurves.length;
      this.nerveCurves[curveIndex].getPoint(this.pulseProgress[i], tempVec);

      this.pulsePositions[i * 3] = tempVec.x;
      this.pulsePositions[i * 3 + 1] = tempVec.y;
      this.pulsePositions[i * 3 + 2] = tempVec.z;
    }

    posAttr.needsUpdate = true;
  }
}
