/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Simulación Fisiológica: Propagación del Potencial de Acción (Action Potentials)
 * Vickora Labs
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

    // 2. Right Brachial nerve & Median nerve (brazo derecho anatómico, x < 0)
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.025, 1.44, -0.025), // Raíces cervicales C5-T1
        new THREE.Vector3(-0.080, 1.41, -0.025), // Hueco axilar
        new THREE.Vector3(-0.140, 1.34, -0.030), // Cara medial brazo
        new THREE.Vector3(-0.185, 1.24, -0.025), // Surco bicipital medial
        new THREE.Vector3(-0.210, 1.12, -0.015), // Fosa cubital (codo)
        new THREE.Vector3(-0.235, 0.98, -0.010), // Antebrazo anterior
        new THREE.Vector3(-0.245, 0.86, 0.005),  // Muñeca / túnel carpiano
        new THREE.Vector3(-0.250, 0.78, 0.015),  // Palma
      ])
    );

    // 3. Left Brachial nerve & Median nerve (brazo izquierdo anatómico, x > 0)
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.025, 1.44, -0.025),  // Raíces cervicales C5-T1
        new THREE.Vector3(0.080, 1.41, -0.025),  // Hueco axilar
        new THREE.Vector3(0.140, 1.34, -0.030),  // Cara medial brazo
        new THREE.Vector3(0.185, 1.24, -0.025),  // Surco bicipital medial
        new THREE.Vector3(0.210, 1.12, -0.015),  // Fosa cubital (codo)
        new THREE.Vector3(0.235, 0.98, -0.010),  // Antebrazo anterior
        new THREE.Vector3(0.245, 0.86, 0.005),   // Muñeca / túnel carpiano
        new THREE.Vector3(0.250, 0.78, 0.015),   // Palma
      ])
    );

    // 4. Right Sciatic nerve (pierna derecha anatómica)
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.025, 1.02, -0.040),
        new THREE.Vector3(-0.055, 0.92, -0.055),
        new THREE.Vector3(-0.082, 0.80, -0.050),
        new THREE.Vector3(-0.088, 0.62, -0.045),
        new THREE.Vector3(-0.082, 0.44, -0.040),
        new THREE.Vector3(-0.078, 0.28, -0.035),
        new THREE.Vector3(-0.072, 0.12, -0.030),
      ])
    );

    // 5. Left Sciatic nerve (pierna izquierda anatómica)
    this.nerveCurves.push(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.025, 1.02, -0.040),
        new THREE.Vector3(0.055, 0.92, -0.055),
        new THREE.Vector3(0.082, 0.80, -0.050),
        new THREE.Vector3(0.088, 0.62, -0.045),
        new THREE.Vector3(0.082, 0.44, -0.040),
        new THREE.Vector3(0.078, 0.28, -0.035),
        new THREE.Vector3(0.072, 0.12, -0.030),
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
