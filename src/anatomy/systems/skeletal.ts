/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Óseo (Systema skeletale)
 * Basado en 242 huesos anatómicos de BodyParts3D / OrganUI
 * Vickora Labs
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class SkeletalSystem {
  public readonly group: THREE.Group;
  public readonly id = 'skeletal';
  public readonly name = 'Sistema Óseo';
  private originalMaterials: Map<THREE.Mesh, THREE.Material> = new Map();
  private bones: THREE.Mesh[] = [];
  public isLoaded: boolean = false;
  public modelGroup: THREE.Group | null = null;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Skeletal';
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    return new Promise((resolve) => {
      loader.load(
        resolveModelUrl('models/skeleton.glb'),
        (gltf) => {
          this.modelGroup = gltf.scene;
          this.modelGroup.name = 'Skeleton_Model';

          // 1. Realistic Medical Bone Material (Marfil osteológico con micro-rugosidad)
          const boneMaterial = new THREE.MeshStandardMaterial({
            color: 0xf5f3ee, // Natural ivory bone
            roughness: 0.45,
            metalness: 0.04,
            side: THREE.DoubleSide,
          });

          // 2. Hyaline Cartilage Material (Azul hielo traslúcido para cartílagos costales y articulares)
          const cartilageMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xdbeafe, // Soft hyaline blue
            roughness: 0.32,
            metalness: 0.06,
            clearcoat: 0.4,
            side: THREE.DoubleSide,
          });

          this.modelGroup.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              this.originalMaterials.set(mesh, mesh.material as THREE.Material);

              const nameLower = (mesh.name || '').toLowerCase();
              const isCartilage = nameLower.includes('cartilage') || nameLower.includes('costal') || nameLower.includes('disc');

              mesh.material = isCartilage ? cartilageMaterial.clone() : boneMaterial.clone();

              const formattedName = this.formatBoneName(mesh.name);

              mesh.userData = {
                systemId: 'skeletal',
                structureId: 'skeleton',
                structureName: formattedName,
                selectable: true,
              };
              this.bones.push(mesh);
            }
          });

          // Estandarizar altura humana a 1.75m:
          // Altura nativa de skeleton.glb = 4.106
          const skelScale = 1.75 / 4.106; // ~0.4262
          this.modelGroup.scale.setScalar(skelScale);

          // Posicionar de pie sobre el podio en Y = 0
          this.modelGroup.position.set(0, 0.875, 0);

          this.group.add(this.modelGroup);
          this.isLoaded = true;
          console.log(`[SkeletalSystem] ${this.bones.length} huesos anatómicos cargados.`);
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) {
            onProgress(xhr.loaded / xhr.total);
          }
        },
        (error) => {
          console.warn('[SkeletalSystem] Fallback a esqueleto básico:', error);
          this.buildProceduralSkeleton();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private formatBoneName(rawName: string): string {
    if (!rawName) return 'Hueso';
    return rawName
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  private buildProceduralSkeleton(): void {
    const mat = new THREE.MeshStandardMaterial({ color: 0xf5f3ee, roughness: 0.5 });
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), mat);
    skull.position.set(0, 1.65, 0);
    skull.userData = { structureId: 'skeleton', structureName: 'Cráneo' };
    this.group.add(skull);
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
    this.group.position.z = -offset * 0.35;
  }
}
