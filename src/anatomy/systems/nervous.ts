/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Nervioso (Systema nervosum)
 * Encéfalo Allen Reference Atlas en cavidad craneal, médula y red periférica
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

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
        resolveModelUrl('models/brain.glb'),
        (gltf) => {
          this.brainMesh = gltf.scene;
          this.brainMesh.name = 'Anatomical_Brain';

          // Color y textura de sustancia gris/corteza cerebral real (Gris rosáceo con piamadre húmeda)
          const brainMat = new THREE.MeshPhysicalMaterial({
            color: 0xc4a494, // Gris rosáceo parenquimatoso real (no morado artificial)
            roughness: 0.38,
            metalness: 0.04,
            clearcoat: 0.55, // Líquido cefalorraquídeo y piamadre
            clearcoatRoughness: 0.2,
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
                structureName: 'Encéfalo (Corteza, Tronco y Cerebelo)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.brainMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          // Ajuste de escala para alojarse dentro de la cavidad craneal del esqueleto (~14cm)
          const targetSize = 0.138;
          const scale = targetSize / (size.y || 1);
          this.brainMesh.scale.setScalar(scale);

          // Alojado perfectamente dentro de la fosa craneal
          this.brainMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.635,
            -center.z * scale - 0.018
          );

          this.group.add(this.brainMesh);
          resolve();
        },
        undefined,
        (err) => {
          console.warn('[NervousSystem] Fallback a encéfalo procedimental:', err);
          this.buildProceduralBrain();
          resolve();
        }
      );
    });

    const loadSpine = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/spinal_cord.glb'),
        (gltf) => {
          this.spinalMesh = gltf.scene;
          this.spinalMesh.name = 'Anatomical_SpinalCord';

          const spineMat = new THREE.MeshStandardMaterial({
            color: 0xfef08a, // Blanco amarillento mielínico
            roughness: 0.35,
            metalness: 0.05,
            clearcoat: 0.4,
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

          const targetHeight = 0.50;
          const scale = targetHeight / (size.y || 1);
          this.spinalMesh.scale.setScalar(scale);

          // Alojada dentro del conducto raquídeo vertebral
          this.spinalMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.32,
            -center.z * scale - 0.028
          );

          this.group.add(this.spinalMesh);
          resolve();
        },
        undefined,
        (err) => {
          console.warn('[NervousSystem] Fallback a médula procedimental:', err);
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
      color: 0xfef08a, // Mielina
      roughness: 0.35,
      emissive: 0x0284c7,
      emissiveIntensity: 0.18,
    });

    // Plexos braquiales a miembros superiores
    const rBrachial = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.015, 1.45, -0.02),
      new THREE.Vector3(0.08, 1.42, -0.01),
      new THREE.Vector3(0.18, 1.34, 0.0),
      new THREE.Vector3(0.28, 1.20, 0.0),
      new THREE.Vector3(0.35, 1.02, 0.0),
    ]);
    const lBrachial = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.015, 1.45, -0.02),
      new THREE.Vector3(-0.08, 1.42, -0.01),
      new THREE.Vector3(-0.18, 1.34, 0.0),
      new THREE.Vector3(-0.28, 1.20, 0.0),
      new THREE.Vector3(-0.35, 1.02, 0.0),
    ]);
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rBrachial, 20, 0.003, 8, false), nerveMat));
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lBrachial, 20, 0.003, 8, false), nerveMat));

    // Nervios ciáticos a miembros inferiores
    const rSciatic = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.015, 1.02, -0.025),
      new THREE.Vector3(0.045, 0.92, -0.02),
      new THREE.Vector3(0.068, 0.82, -0.01),
      new THREE.Vector3(0.075, 0.62, -0.01),
      new THREE.Vector3(0.07, 0.42, -0.01),
    ]);
    const lSciatic = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.015, 1.02, -0.025),
      new THREE.Vector3(-0.045, 0.92, -0.02),
      new THREE.Vector3(-0.068, 0.82, -0.01),
      new THREE.Vector3(-0.075, 0.62, -0.01),
      new THREE.Vector3(-0.07, 0.42, -0.01),
    ]);
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rSciatic, 24, 0.0035, 8, false), nerveMat));
    this.peripheralGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lSciatic, 24, 0.0035, 8, false), nerveMat));
  }

  private buildProceduralBrain(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0xc4a494, roughness: 0.4, clearcoat: 0.5 });
    const brain = new THREE.Mesh(new THREE.SphereGeometry(0.07, 24, 24), mat);
    brain.scale.set(1.0, 0.9, 1.2);
    brain.position.set(0, 1.635, -0.018);
    this.group.add(brain);
  }

  private buildProceduralSpinalCord(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.35 });
    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.50, 12), mat);
    spine.position.set(0, 1.32, -0.028);
    this.group.add(spine);
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
        mat.emissiveIntensity = 0.12;
      }
    });
  }

  public setExploded(offset: number): void {
    this.group.position.set(0, offset * 0.1, -offset * 0.25);
  }
}
