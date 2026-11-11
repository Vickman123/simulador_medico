/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Urinario (Systema urinarium)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class UrinarySystem {
  public readonly group: THREE.Group;
  public readonly id = 'urinary';
  public readonly name = 'Sistema Urinario';
  public kidneyLeftMesh: THREE.Group | null = null;
  public kidneyRightMesh: THREE.Group | null = null;
  public bladderMesh: THREE.Group | null = null;
  public uretersGroup: THREE.Group;
  public isLoaded: boolean = false;
  private urinaryMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Urinary';
    this.uretersGroup = new THREE.Group();
    this.uretersGroup.name = 'Ureters';
    this.group.add(this.uretersGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildUreters();

    const kidneyMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      roughness: 0.35,
      metalness: 0.1,
    });
    const bladderMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.4,
      metalness: 0.05,
    });

    const loadLeftKidney = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/kidney_left.glb'),
        (gltf) => {
          this.kidneyLeftMesh = gltf.scene;
          this.kidneyLeftMesh.name = 'Anatomical_Kidney_L';

          this.kidneyLeftMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = kidneyMat.clone();
              this.urinaryMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'urinary',
                structureId: 'kidneys',
                structureName: 'Riñón Izquierdo (Corteza, Médula y Pelvis)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.kidneyLeftMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.11;
          const scale = targetHeight / (size.y || 1);
          this.kidneyLeftMesh.scale.setScalar(scale);

          this.kidneyLeftMesh.position.set(
            -center.x * scale - 0.045,
            -center.y * scale + 1.13,
            -center.z * scale - 0.025
          );

          this.group.add(this.kidneyLeftMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    const loadRightKidney = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/kidney_right.glb'),
        (gltf) => {
          this.kidneyRightMesh = gltf.scene;
          this.kidneyRightMesh.name = 'Anatomical_Kidney_R';

          this.kidneyRightMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = kidneyMat.clone();
              this.urinaryMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'urinary',
                structureId: 'kidneys',
                structureName: 'Riñón Derecho (Corteza, Médula y Pelvis)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.kidneyRightMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.11;
          const scale = targetHeight / (size.y || 1);
          this.kidneyRightMesh.scale.setScalar(scale);

          // Slightly lower than left due to liver
          this.kidneyRightMesh.position.set(
            -center.x * scale + 0.045,
            -center.y * scale + 1.11,
            -center.z * scale - 0.025
          );

          this.group.add(this.kidneyRightMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    const loadBladder = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/bladder.glb'),
        (gltf) => {
          this.bladderMesh = gltf.scene;
          this.bladderMesh.name = 'Anatomical_Bladder';

          this.bladderMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = bladderMat.clone();
              this.urinaryMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'urinary',
                structureId: 'bladder',
                structureName: 'Vejiga Urinaria (Detrusor y Trígono)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.bladderMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.09;
          const scale = targetHeight / (size.y || 1);
          this.bladderMesh.scale.setScalar(scale);

          this.bladderMesh.position.set(
            -center.x * scale,
            -center.y * scale + 0.88,
            -center.z * scale + 0.02
          );

          this.group.add(this.bladderMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    await Promise.all([loadLeftKidney, loadRightKidney, loadBladder]);
    this.isLoaded = true;
    return this.group;
  }

  private buildUreters(): void {
    const ureterMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      roughness: 0.35,
    });

    // Right Ureter (Renal pelvis to bladder trigonum)
    const rUreterCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.04, 1.10, -0.02),
      new THREE.Vector3(0.03, 1.00, -0.015),
      new THREE.Vector3(0.018, 0.90, 0.01),
    ]);
    const lUreterCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.04, 1.12, -0.02),
      new THREE.Vector3(-0.03, 1.00, -0.015),
      new THREE.Vector3(-0.018, 0.90, 0.01),
    ]);

    this.uretersGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rUreterCurve, 16, 0.003, 8, false), ureterMat));
    this.uretersGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lUreterCurve, 16, 0.003, 8, false), ureterMat));
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0x10b981): void {
    this.urinaryMaterials.forEach((mat) => {
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
    // Moves slightly backward in retroperitoneal plane
    this.group.position.set(0, 0, -offset * 0.15);
  }
}
