/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Óseo (Systema skeletale)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class SkeletalSystem {
  public readonly group: THREE.Group;
  public readonly id = 'skeletal';
  public readonly name = 'Sistema Óseo';
  private originalMaterials: Map<THREE.Mesh, THREE.Material> = new Map();
  private bones: THREE.Mesh[] = [];
  public isLoaded: boolean = false;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Skeletal';
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      loader.load(
        'models/skeleton.glb',
        (gltf) => {
          const model = gltf.scene;
          model.name = 'Skeleton_Model';

          // Standardize scale and position in CCF space
          // skeleton.glb from BodyParts3D is centered and approximately human height (1.75m)
          const boneMaterial = new THREE.MeshStandardMaterial({
            color: 0xf3f4f6,
            roughness: 0.45,
            metalness: 0.05,
          });

          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              this.originalMaterials.set(mesh, mesh.material as THREE.Material);

              mesh.material = boneMaterial.clone();
              mesh.userData = {
                systemId: 'skeletal',
                structureId: 'skeleton',
                structureName: mesh.name || 'Hueso',
                selectable: true,
              };
              this.bones.push(mesh);
            }
          });

          // Scale and position skeleton to stand firmly on the pedestal
          // The skeleton height is approx 1.7m, center around Y = 0.9m
          const box = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          // Normalize height to ~1.75 meters
          const targetHeight = 1.75;
          const scale = targetHeight / (size.y || 1);
          model.scale.setScalar(scale);

          // Ground to pedestal at Y = 0
          model.position.y = -box.min.y * scale;
          model.position.x = -center.x * scale;
          model.position.z = -center.z * scale;

          this.group.add(model);
          this.isLoaded = true;
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) {
            onProgress(xhr.loaded / xhr.total);
          }
        },
        (error) => {
          console.warn('[SkeletalSystem] Fallback to procedural skeleton bones:', error);
          this.buildProceduralSkeleton();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private buildProceduralSkeleton(): void {
    // Elegant procedural anatomical armature in case asset fails
    const mat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.5,
      metalness: 0.05,
    });

    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), mat);
    skull.position.set(0, 1.65, 0);
    skull.userData = { structureId: 'skeleton', structureName: 'Cráneo' };
    this.group.add(skull);

    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.55, 12), mat);
    spine.position.set(0, 1.3, -0.02);
    spine.userData = { structureId: 'skeleton', structureName: 'Columna Vertebral' };
    this.group.add(spine);

    const ribs = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.35, 16, 1, true), mat);
    ribs.position.set(0, 1.35, 0);
    ribs.userData = { structureId: 'skeleton', structureName: 'Caja Torácica' };
    this.group.add(ribs);

    const pelvis = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.04, 12, 24), mat);
    pelvis.rotation.x = Math.PI / 2;
    pelvis.position.set(0, 0.95, 0);
    pelvis.userData = { structureId: 'skeleton', structureName: 'Pelvis Ósea' };
    this.group.add(pelvis);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0x00f0ff): void {
    this.bones.forEach((mesh) => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (active) {
        mat.emissive = new THREE.Color(colorHex);
        mat.emissiveIntensity = 0.45;
      } else {
        mat.emissive = new THREE.Color(0x000000);
        mat.emissiveIntensity = 0;
      }
    });
  }

  public setExploded(offset: number): void {
    // Move slightly backward in exploded layer view
    this.group.position.z = -offset * 0.35;
  }
}
