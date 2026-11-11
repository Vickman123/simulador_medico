/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Nervioso (Systema nervosum)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class NervousSystem {
  public readonly group: THREE.Group;
  public readonly id = 'nervous';
  public readonly name = 'Sistema Nervioso';
  public brainMesh: THREE.Group | null = null;
  public spinalMesh: THREE.Group | null = null;
  public peripheralGroup: THREE.Group;
  public isLoaded: boolean = false;
  private nerveMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Nervous';
    this.peripheralGroup = new THREE.Group();
    this.peripheralGroup.name = 'Peripheral_Nerves';
    this.group.add(this.peripheralGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildPeripheralNerves();

    const loadBrain = new Promise<void>((resolve) => {
      loader.load(
        'models/brain.glb',
        (gltf) => {
          this.brainMesh = gltf.scene;
          this.brainMesh.name = 'Anatomical_Brain';

          const brainMat = new THREE.MeshStandardMaterial({
            color: 0x9333ea,
            roughness: 0.35,
            metalness: 0.1,
          });

          this.brainMesh.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = brainMat.clone();
              this.nerveMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'nervous',
                structureId: 'brain',
                structureName: 'Encéfalo (Cerebro, Cerebelo y Tronco)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.brainMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetSize = 0.14;
          const scale = targetSize / (size.y || 1);
          this.brainMesh.scale.setScalar(scale);

          // Center inside cranial vault: Y ~ 1.68m
          this.brainMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.68,
            -center.z * scale - 0.005
          );

          this.group.add(this.brainMesh);
          resolve();
        },
        undefined,
        (err) => {
          console.warn('[NervousSystem] Fallback to procedural brain:', err);
          this.buildProceduralBrain();
          resolve();
        }
      );
    });

    const loadSpine = new Promise<void>((resolve) => {
      loader.load(
        'models/spinal_cord.glb',
        (gltf) => {
          this.spinalMesh = gltf.scene;
          this.spinalMesh.name = 'Anatomical_SpinalCord';

          const spineMat = new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            roughness: 0.3,
            metalness: 0.1,
          });

          this.spinalMesh.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.material = spineMat.clone();
              this.nerveMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'nervous',
                structureId: 'spinal_cord',
                structureName: 'Médula Espinal',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.spinalMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.55;
          const scale = targetHeight / (size.y || 1);
          this.spinalMesh.scale.setScalar(scale);

          this.spinalMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.35,
            -center.z * scale - 0.03
          );

          this.group.add(this.spinalMesh);
          resolve();
        },
        undefined,
        (err) => {
          console.warn('[NervousSystem] Fallback to procedural spinal cord:', err);
          this.buildProceduralSpinalCord();
          resolve();
        }
      );
    });

    await Promise.all([loadBrain, loadSpine]);
    this.isLoaded = true;
    return this.group;
  }

  private buildPeripheralNerves(): void {
    const nerveMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
    });

    // 1. Brachial Plexus to Right & Left Arms
    const rBrachial = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.015, 1.48, -0.02),
      new THREE.Vector3(0.08, 1.45, -0.01),
      new THREE.Vector3(0.18, 1.38, 0.0),
      new THREE.Vector3(0.28, 1.25, 0.0), // Radial/Median nerve
      new THREE.Vector3(0.35, 1.05, 0.0),
    ]);
    const lBrachial = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.015, 1.48, -0.02),
      new THREE.Vector3(-0.08, 1.45, -0.01),
      new THREE.Vector3(-0.18, 1.38, 0.0),
      new THREE.Vector3(-0.28, 1.25, 0.0),
      new THREE.Vector3(-0.35, 1.05, 0.0),
    ]);
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rBrachial, 20, 0.0035, 8, false), nerveMat));
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lBrachial, 20, 0.0035, 8, false), nerveMat));

    // 2. Lumbosacral Plexus & Sciatic Nerve to Lower Limbs
    const rSciatic = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.015, 1.05, -0.025),
      new THREE.Vector3(0.045, 0.95, -0.02),
      new THREE.Vector3(0.07, 0.85, -0.01),
      new THREE.Vector3(0.08, 0.65, -0.01), // Sciatic trunk
      new THREE.Vector3(0.075, 0.45, -0.01), // Tibial nerve
    ]);
    const lSciatic = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.015, 1.05, -0.025),
      new THREE.Vector3(-0.045, 0.95, -0.02),
      new THREE.Vector3(-0.07, 0.85, -0.01),
      new THREE.Vector3(-0.08, 0.65, -0.01),
      new THREE.Vector3(-0.075, 0.45, -0.01),
    ]);
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rSciatic, 24, 0.004, 8, false), nerveMat));
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lSciatic, 24, 0.004, 8, false), nerveMat));
  }

  private buildProceduralBrain(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0x9333ea, roughness: 0.35 });
    const brain = new THREE.Mesh(new THREE.SphereGeometry(0.075, 20, 20), mat);
    brain.scale.set(1.0, 0.9, 1.2);
    brain.position.set(0, 1.68, -0.005);
    brain.userData = {
      systemId: 'nervous',
      structureId: 'brain',
      structureName: 'Encéfalo',
      selectable: true,
    };
    this.group.add(brain);
    this.brainMesh = new THREE.Group();
    this.brainMesh.add(brain);
  }

  private buildProceduralSpinalCord(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3 });
    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.55, 12), mat);
    spine.position.set(0, 1.35, -0.03);
    spine.userData = {
      systemId: 'nervous',
      structureId: 'spinal_cord',
      structureName: 'Médula Espinal',
      selectable: true,
    };
    this.group.add(spine);
    this.spinalMesh = new THREE.Group();
    this.spinalMesh.add(spine);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0x38bdf8): void {
    this.nerveMaterials.forEach((mat) => {
      if (active) {
        mat.emissive = new THREE.Color(colorHex);
        mat.emissiveIntensity = 0.65;
      } else {
        mat.emissive = new THREE.Color(0x0284c7);
        mat.emissiveIntensity = 0.15;
      }
    });
  }

  public setExploded(offset: number): void {
    // Moves backward and slightly upward
    this.group.position.set(0, offset * 0.1, -offset * 0.25);
  }
}
