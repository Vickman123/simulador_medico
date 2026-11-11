/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Gestor del Entorno Tridimensional y Laboratorio Futurista
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { XRApp } from './vxr/XRApp.js';

export class SceneManager {
  private app: XRApp;
  public readonly laboratoryGroup: THREE.Group;
  private ambientParticles: THREE.Points | null = null;

  constructor(app: XRApp) {
    this.app = app;
    this.laboratoryGroup = new THREE.Group();
    this.laboratoryGroup.name = 'Futuristic_Anatomy_Laboratory';

    this.setupLaboratoryEnvironment();
    this.setupLaboratoryLighting();
    this.setupAtmosphericParticles();

    this.app.scene.nativeScene.add(this.laboratoryGroup);
  }

  private setupLaboratoryEnvironment(): void {
    // 1. Scene background: deep space dark navy
    this.app.scene.nativeScene.background = new THREE.Color(0x030712);

    // 2. Subtle sci-fi holographic floor grid
    const gridHelper = new THREE.GridHelper(16, 32, 0x00f0ff, 0x0e1c38);
    gridHelper.position.y = -0.05;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.35;
    this.laboratoryGroup.add(gridHelper);

    // 3. Subtle outer boundaries ring
    const ringGeo = new THREE.RingGeometry(4.8, 5.0, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
    });
    const boundaryRing = new THREE.Mesh(ringGeo, ringMat);
    boundaryRing.rotation.x = -Math.PI / 2;
    boundaryRing.position.y = -0.045;
    this.laboratoryGroup.add(boundaryRing);
  }

  private setupLaboratoryLighting(): void {
    const scene = this.app.scene.nativeScene;

    // 1. Ambient Light: soft neutral daylight
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);

    // 2. Key Directional Light (Front-Right Top)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0002;
    scene.add(keyLight);

    // 3. Cyan Rim Light (Back-Left) for holographic edge separation
    const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    rimLight.position.set(-4, 5, -4);
    scene.add(rimLight);

    // 4. Subtle UNAM Gold Fill Light
    const fillLight = new THREE.DirectionalLight(0xd97706, 0.45);
    fillLight.position.set(0, -2, 4);
    scene.add(fillLight);
  }

  private setupAtmosphericParticles(): void {
    // Floating luminous micro-particles in the laboratory air
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = Math.random() * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.ambientParticles = new THREE.Points(geo, mat);
    this.laboratoryGroup.add(this.ambientParticles);
  }

  public update(delta: number): void {
    if (this.ambientParticles) {
      const posAttr = this.ambientParticles.geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 1; i < arr.length; i += 3) {
        arr[i] += delta * 0.04;
        if (arr[i] > 4) arr[i] = 0;
      }
      posAttr.needsUpdate = true;
    }
  }
}
