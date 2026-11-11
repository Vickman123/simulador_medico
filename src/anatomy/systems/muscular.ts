/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Muscular (Systema musculare)
 * Basado en 177 estructuras musculares anatómicas de BodyParts3D / OrganUI
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class MuscularSystem {
  public readonly group: THREE.Group;
  public readonly id = 'muscular';
  public readonly name = 'Sistema Muscular';
  public isLoaded: boolean = false;
  private muscles: THREE.Mesh[] = [];
  private muscleMaterials: THREE.MeshStandardMaterial[] = [];
  public modelGroup: THREE.Group | null = null;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Muscular';
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    return new Promise((resolve) => {
      loader.load(
        resolveModelUrl('models/muscles.glb'),
        (gltf) => {
          this.modelGroup = gltf.scene;
          this.modelGroup.name = 'Anatomical_Muscles_Model';

          // 1. Biological Striated Muscle Material (Rojo carmesí fibrilar)
          const muscleMat = new THREE.MeshPhysicalMaterial({
            color: 0x9b1c2e, // Deep anatomical muscle tone
            roughness: 0.42,
            metalness: 0.05,
            clearcoat: 0.45, // Moist tissue serosa
            clearcoatRoughness: 0.25,
            side: THREE.DoubleSide,
          });

          // 2. Aponeurosis and Tendon Material (Blanco perla nacarado)
          const tendonMat = new THREE.MeshPhysicalMaterial({
            color: 0xf1f5f9,
            roughness: 0.32,
            metalness: 0.08,
            clearcoat: 0.5,
            clearcoatRoughness: 0.2,
            side: THREE.DoubleSide,
          });

          this.muscleMaterials.push(muscleMat, tendonMat);

          this.modelGroup.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;

              const nameLower = (mesh.name || '').toLowerCase();
              const isTendon =
                nameLower.includes('aponeurosis') ||
                nameLower.includes('tendon') ||
                nameLower.includes('galea') ||
                nameLower.includes('ligament');

              mesh.material = isTendon ? tendonMat.clone() : muscleMat.clone();
              this.muscleMaterials.push(mesh.material as THREE.MeshStandardMaterial);

              // Formato amigable del nombre anatómico en español
              const formattedName = this.formatMuscleName(mesh.name);

              mesh.userData = {
                systemId: 'muscular',
                structureId: 'muscular',
                structureName: formattedName,
                selectable: true,
              };
              this.muscles.push(mesh);
            }
          });

          // Escala y posición para encajar 1:1 sobre skeleton.glb:
          // Factor de escala: (0.0025 / 0.004) * (1.75 / 4.106) = 0.26638
          const targetScale = 0.26638;
          this.modelGroup.scale.setScalar(targetScale);

          // Posición Y para alinear con el esqueleto sobre el podio
          this.modelGroup.position.set(0, 0.875, 0);

          this.group.add(this.modelGroup);
          this.isLoaded = true;
          console.log(`[MuscularSystem] ${this.muscles.length} estructuras musculares reales cargadas.`);
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) onProgress(xhr.loaded / xhr.total);
        },
        (err) => {
          console.warn('[MuscularSystem] Fallback a músculos estilizados:', err);
          this.buildProceduralMuscles();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private formatMuscleName(rawName: string): string {
    if (!rawName) return 'Músculo Esquelético';
    return rawName
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  private buildProceduralMuscles(): void {
    // Si la descarga falla, se usa un torso estilizado
    const mat = new THREE.MeshStandardMaterial({
      color: 0x9b1c2e,
      roughness: 0.45,
      clearcoat: 0.4,
    });
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 0.52, 24), mat);
    torso.position.set(0, 1.22, 0.02);
    torso.userData = { systemId: 'muscular', structureId: 'muscular', structureName: 'Músculos del Tronco', selectable: true };
    this.group.add(torso);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0xf43f5e): void {
    this.muscleMaterials.forEach((mat) => {
      if (active) {
        mat.emissive = new THREE.Color(colorHex);
        mat.emissiveIntensity = 0.5;
      } else {
        mat.emissive = new THREE.Color(0x000000);
        mat.emissiveIntensity = 0;
      }
    });
  }

  public setExploded(offset: number): void {
    this.group.position.set(0, 0, offset * 0.35);
  }
}
