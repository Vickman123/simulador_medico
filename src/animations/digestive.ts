/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Simulación Fisiológica: Tránsito Gastrointestinal y Peristalsis
 * Vickora Labs
 */

import * as THREE from 'three';

export class DigestiveAnimation {
  public readonly group: THREE.Group;
  public isEnabled: boolean = true;
  private particleCount = 70;
  private particlesMesh: THREE.Points;
  private particlePositions: Float32Array;
  private particleProgress: Float32Array;
  private digestivePath: THREE.CatmullRomCurve3;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'Digestive_Transit';

    // Path representing the digestive transit from mouth -> esophagus -> stomach -> small intestine -> colon
    this.digestivePath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.58, 0.04), // Oral cavity
      new THREE.Vector3(0, 1.48, 0.0), // Pharynx
      new THREE.Vector3(0, 1.35, -0.01), // Esophagus
      new THREE.Vector3(-0.02, 1.22, 0.02), // Cardia
      new THREE.Vector3(-0.06, 1.17, 0.03), // Stomach fundus
      new THREE.Vector3(-0.02, 1.12, 0.03), // Pylorus
      new THREE.Vector3(0.01, 1.08, 0.03), // Duodenum
      new THREE.Vector3(-0.03, 1.00, 0.035), // Jejunum loops
      new THREE.Vector3(0.03, 0.95, 0.035), // Ileum
      new THREE.Vector3(0.06, 0.90, 0.02), // Cecum
      new THREE.Vector3(0.06, 1.04, 0.02), // Ascending colon
      new THREE.Vector3(0.0, 1.06, 0.03), // Transverse colon
      new THREE.Vector3(-0.06, 1.04, 0.02), // Descending colon
      new THREE.Vector3(-0.03, 0.88, 0.01), // Sigmoid & Rectum
    ]);

    this.particlePositions = new Float32Array(this.particleCount * 3);
    this.particleProgress = new Float32Array(this.particleCount);

    for (let i = 0; i < this.particleCount; i++) {
      this.particleProgress[i] = i / this.particleCount;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.012,
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.9,
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
    const transitSpeed = 0.08; // Gentle peristaltic transit rate

    for (let i = 0; i < this.particleCount; i++) {
      this.particleProgress[i] += transitSpeed * delta;
      if (this.particleProgress[i] > 1.0) {
        this.particleProgress[i] -= 1.0;
      }

      this.digestivePath.getPoint(this.particleProgress[i], tempVec);
      tempVec.x += (Math.random() - 0.5) * 0.004;
      tempVec.y += (Math.random() - 0.5) * 0.004;

      this.particlePositions[i * 3] = tempVec.x;
      this.particlePositions[i * 3 + 1] = tempVec.y;
      this.particlePositions[i * 3 + 2] = tempVec.z;
    }

    posAttr.needsUpdate = true;
  }
}
