/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Simulación Fisiológica: Flujo Hemodinámico / Circulación Sanguínea
 * Vickora Labs
 */

import * as THREE from 'three';

export class CirculationAnimation {
  public readonly group: THREE.Group;
  public isEnabled: boolean = true;
  private particleCount = 280;
  private particlesMesh: THREE.Points;
  private particlePositions: Float32Array;
  private particleColors: Float32Array;
  private particlePathProgress: Float32Array;
  private particleSpeeds: Float32Array;
  private particleTypes: Uint8Array; // 0 = arterial (red), 1 = venous (blue)

  // Spline paths for arterial & venous flow
  private arterialPath: THREE.CatmullRomCurve3;
  private venousPath: THREE.CatmullRomCurve3;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'Hemodynamic_Flow';

    // 1. Arterial systemic path (Heart -> Aorta -> Iliac -> Lower limbs)
    this.arterialPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.01, 1.34, 0.03),
      new THREE.Vector3(-0.015, 1.38, 0.01),
      new THREE.Vector3(-0.02, 1.25, -0.02),
      new THREE.Vector3(-0.015, 1.05, -0.03),
      new THREE.Vector3(0.0, 0.92, -0.02),
      new THREE.Vector3(0.06, 0.85, 0.0),
      new THREE.Vector3(0.075, 0.65, 0.01),
      new THREE.Vector3(0.07, 0.45, 0.0),
    ]);

    // 2. Venous return path (Lower limbs -> Iliac veins -> Vena Cava -> Right Atrium)
    this.venousPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.07, 0.45, 0.0),
      new THREE.Vector3(-0.075, 0.65, 0.01),
      new THREE.Vector3(-0.06, 0.85, 0.0),
      new THREE.Vector3(0.01, 0.92, -0.02),
      new THREE.Vector3(0.015, 1.05, -0.02),
      new THREE.Vector3(0.018, 1.22, -0.02),
      new THREE.Vector3(0.02, 1.34, 0.02),
    ]);

    this.particlePositions = new Float32Array(this.particleCount * 3);
    this.particleColors = new Float32Array(this.particleCount * 3);
    this.particlePathProgress = new Float32Array(this.particleCount);
    this.particleSpeeds = new Float32Array(this.particleCount);
    this.particleTypes = new Uint8Array(this.particleCount);

    for (let i = 0; i < this.particleCount; i++) {
      this.particlePathProgress[i] = Math.random();
      this.particleSpeeds[i] = 0.15 + Math.random() * 0.12;
      this.particleTypes[i] = i % 2 === 0 ? 0 : 1;

      // Color: 0 = arterial red (#ff2a2a), 1 = venous cyan-blue (#00b4d8)
      if (this.particleTypes[i] === 0) {
        this.particleColors[i * 3] = 1.0;
        this.particleColors[i * 3 + 1] = 0.15;
        this.particleColors[i * 3 + 2] = 0.2;
      } else {
        this.particleColors[i * 3] = 0.0;
        this.particleColors[i * 3 + 1] = 0.7;
        this.particleColors[i * 3 + 2] = 1.0;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.particleColors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.012,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particlesMesh = new THREE.Points(geo, mat);
    this.group.add(this.particlesMesh);
  }

  public update(delta: number): void {
    if (!this.isEnabled) {
      this.group.visible = false;
      return;
    }
    this.group.visible = true;

    const posAttr = this.particlesMesh.geometry.attributes.position as THREE.BufferAttribute;
    const tempVec = new THREE.Vector3();

    for (let i = 0; i < this.particleCount; i++) {
      this.particlePathProgress[i] += this.particleSpeeds[i] * delta;
      if (this.particlePathProgress[i] > 1.0) {
        this.particlePathProgress[i] -= 1.0;
      }

      const path = this.particleTypes[i] === 0 ? this.arterialPath : this.venousPath;
      path.getPoint(this.particlePathProgress[i], tempVec);

      // Add subtle radial perturbation around vessel lumen
      const angle = i * 0.5;
      const jitter = 0.003;
      tempVec.x += Math.cos(angle) * jitter;
      tempVec.z += Math.sin(angle) * jitter;

      this.particlePositions[i * 3] = tempVec.x;
      this.particlePositions[i * 3 + 1] = tempVec.y;
      this.particlePositions[i * 3 + 2] = tempVec.z;
    }

    posAttr.needsUpdate = true;
  }
}
