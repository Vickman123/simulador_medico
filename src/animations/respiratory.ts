/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Simulación Fisiológica: Mecánica Ventilatoria (Respiratory Mechanics)
 * Vickora Labs
 */

import * as THREE from 'three';
import { RespiratorySystem } from '../anatomy/systems/respiratory.js';

export class RespiratoryAnimation {
  public readonly group: THREE.Group;
  private respiratory: RespiratorySystem;
  public isEnabled: boolean = true;
  private bpm: number = 14; // Normal adult respiratory rate (12-16 rpm)
  private timeAccumulator: number = 0;

  // Airflow particles entering and leaving trachea
  private particleCount = 120;
  private particlesMesh: THREE.Points;
  private particlePositions: Float32Array;
  private particleProgress: Float32Array;
  private tracheaCurve: THREE.CatmullRomCurve3;

  constructor(respiratory: RespiratorySystem) {
    this.respiratory = respiratory;
    this.group = new THREE.Group();
    this.group.name = 'Airflow_Simulation';

    this.tracheaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.58, 0.05), // Nasopharynx
      new THREE.Vector3(0, 1.48, 0.02), // Larynx
      new THREE.Vector3(0, 1.40, 0.01), // Trachea
      new THREE.Vector3(0.04, 1.34, 0.0), // Right bronchus
    ]);

    this.particlePositions = new Float32Array(this.particleCount * 3);
    this.particleProgress = new Float32Array(this.particleCount);

    for (let i = 0; i < this.particleCount; i++) {
      this.particleProgress[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.009,
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.75,
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

    const cycleDuration = 60 / this.bpm; // ~4.28s
    this.timeAccumulator = (this.timeAccumulator + delta) % cycleDuration;
    const progress = this.timeAccumulator / cycleDuration;

    // Normal respiratory cycle:
    // 0.0 - 0.4: Inspiration (lung expansion)
    // 0.4 - 0.48: Post-inspiratory pause
    // 0.48 - 1.0: Expiration (elastic recoil relaxation)
    let expansionFactor = 1.0;
    let isInspiring = true;

    if (progress < 0.4) {
      const p = progress / 0.4;
      // Smooth sigmoid curve for inspiration
      expansionFactor = 1.0 + Math.sin((p * Math.PI) / 2) * 0.12;
      isInspiring = true;
    } else if (progress < 0.48) {
      expansionFactor = 1.12;
      isInspiring = true;
    } else {
      const p = (progress - 0.48) / 0.52;
      expansionFactor = 1.12 - Math.sin((p * Math.PI) / 2) * 0.12;
      isInspiring = false;
    }

    this.respiratory.expand(expansionFactor);

    // Animate airflow particles along trachea
    const posAttr = this.particlesMesh.geometry.attributes.position as THREE.BufferAttribute;
    const tempVec = new THREE.Vector3();
    const speed = isInspiring ? 0.35 : -0.3;

    for (let i = 0; i < this.particleCount; i++) {
      this.particleProgress[i] += speed * delta;
      if (this.particleProgress[i] > 1.0) this.particleProgress[i] -= 1.0;
      if (this.particleProgress[i] < 0.0) this.particleProgress[i] += 1.0;

      this.tracheaCurve.getPoint(this.particleProgress[i], tempVec);
      tempVec.x += (Math.random() - 0.5) * 0.005;
      tempVec.z += (Math.random() - 0.5) * 0.005;

      this.particlePositions[i * 3] = tempVec.x;
      this.particlePositions[i * 3 + 1] = tempVec.y;
      this.particlePositions[i * 3 + 2] = tempVec.z;
    }

    posAttr.needsUpdate = true;
  }
}
