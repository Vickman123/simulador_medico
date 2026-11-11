/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Endocrino (Systema endocrinum)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class EndocrineSystem {
  public readonly group: THREE.Group;
  public readonly id = 'endocrine';
  public readonly name = 'Sistema Endocrino';
  public thymusMesh: THREE.Group | null = null;
  public pancreasMesh: THREE.Group | null = null;
  public thyroidMesh: THREE.Mesh | null = null;
  public pituitaryMesh: THREE.Mesh | null = null;
  public adrenalsGroup: THREE.Group;
  public isLoaded: boolean = false;
  private endocrineMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Endocrine';
    this.adrenalsGroup = new THREE.Group();
    this.adrenalsGroup.name = 'Adrenal_Glands';
    this.group.add(this.adrenalsGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildThyroidPituitaryAndAdrenals();

    const loadThymus = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/thymus.glb'),
        (gltf) => {
          this.thymusMesh = gltf.scene;
          this.thymusMesh.name = 'Anatomical_Thymus';

          const mat = new THREE.MeshStandardMaterial({
            color: 0xa855f7,
            roughness: 0.35,
            metalness: 0.1,
          });

          this.thymusMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = mat.clone();
              this.endocrineMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'endocrine',
                structureId: 'thymus',
                structureName: 'Timo (Lóbulos Bilaterales)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.thymusMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.07;
          const scale = targetHeight / (size.y || 1);
          this.thymusMesh.scale.setScalar(scale);

          // Mediastinum anterior/superior: Y ~ 1.40m, Z ~ 0.04m
          this.thymusMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.40,
            -center.z * scale + 0.038
          );

          this.group.add(this.thymusMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    const loadPancreas = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/pancreas.glb'),
        (gltf) => {
          this.pancreasMesh = gltf.scene;
          this.pancreasMesh.name = 'Anatomical_Pancreas';

          const mat = new THREE.MeshStandardMaterial({
            color: 0xf59e0b,
            roughness: 0.4,
            metalness: 0.05,
          });

          this.pancreasMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = mat.clone();
              this.endocrineMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'endocrine',
                structureId: 'pancreas',
                structureName: 'Páncreas Endocrino (Islotes de Langerhans)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.pancreasMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetLength = 0.14;
          const scale = targetLength / (size.x || 1);
          this.pancreasMesh.scale.setScalar(scale);

          // Retroperitoneal: Y ~ 1.15m, X ~ -0.01m, Z ~ -0.01m
          this.pancreasMesh.position.set(
            -center.x * scale - 0.01,
            -center.y * scale + 1.14,
            -center.z * scale - 0.01
          );

          this.group.add(this.pancreasMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    await Promise.all([loadThymus, loadPancreas]);
    this.isLoaded = true;
    return this.group;
  }

  private buildThyroidPituitaryAndAdrenals(): void {
    const glandMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      roughness: 0.35,
      metalness: 0.1,
    });

    // 1. Thyroid Gland (H-shaped in front of trachea C5-T1)
    const thyroidGeo = new THREE.TorusGeometry(0.018, 0.007, 12, 16, Math.PI);
    this.thyroidMesh = new THREE.Mesh(thyroidGeo, glandMat);
    this.thyroidMesh.rotation.z = Math.PI;
    this.thyroidMesh.position.set(0, 1.48, 0.026);
    this.thyroidMesh.userData = {
      systemId: 'endocrine',
      structureId: 'thymus',
      structureName: 'Glándula Tiroides',
      selectable: true,
    };
    this.endocrineMaterials.push(glandMat);
    this.group.add(this.thyroidMesh);

    // 2. Pituitary Gland (Hipófisis en la silla turca del esfenoides)
    const pitGeo = new THREE.SphereGeometry(0.006, 12, 12);
    this.pituitaryMesh = new THREE.Mesh(pitGeo, glandMat);
    this.pituitaryMesh.position.set(0, 1.66, 0.01);
    this.pituitaryMesh.userData = {
      systemId: 'endocrine',
      structureId: 'brain',
      structureName: 'Glándula Hipófisis (Pituitaria)',
      selectable: true,
    };
    this.group.add(this.pituitaryMesh);

    // 3. Adrenal Glands (Suprarenales: capuchón piramidal sobre cada riñón)
    const adrenalMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.4,
    });
    const rAdrenal = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.015, 8), adrenalMat);
    rAdrenal.position.set(0.045, 1.16, -0.025);
    rAdrenal.userData = {
      systemId: 'endocrine',
      structureId: 'kidneys',
      structureName: 'Glándula Suprarrenal Derecha (Corteza y Médula)',
      selectable: true,
    };

    const lAdrenal = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.015, 8), adrenalMat);
    lAdrenal.position.set(-0.045, 1.18, -0.025);
    lAdrenal.userData = {
      systemId: 'endocrine',
      structureId: 'kidneys',
      structureName: 'Glándula Suprarrenal Izquierda (Corteza y Médula)',
      selectable: true,
    };

    this.adrenalsGroup.add(rAdrenal);
    this.adrenalsGroup.add(lAdrenal);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0xa855f7): void {
    this.endocrineMaterials.forEach((mat) => {
      if (active) {
        mat.emissive = new THREE.Color(colorHex);
        mat.emissiveIntensity = 0.55;
      } else {
        mat.emissive = new THREE.Color(0x000000);
        mat.emissiveIntensity = 0;
      }
    });
  }

  public setExploded(offset: number): void {
    this.group.position.set(0, offset * 0.08, offset * 0.15);
  }
}
