/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Digestivo (Systema digestorium)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class DigestiveSystem {
  public readonly group: THREE.Group;
  public readonly id = 'digestive';
  public readonly name = 'Sistema Digestivo';
  public liverMesh: THREE.Group | null = null;
  public stomachMesh: THREE.Mesh | null = null;
  public smallIntestineMesh: THREE.Group | null = null;
  public largeIntestineMesh: THREE.Group | null = null;
  public esophagusMesh: THREE.Mesh | null = null;
  public isLoaded: boolean = false;
  private organMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Digestive';
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildEsophagusAndStomach();

    const loadLiver = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/liver.glb'),
        (gltf) => {
          this.liverMesh = gltf.scene;
          this.liverMesh.name = 'Anatomical_Liver';

          const liverMat = new THREE.MeshStandardMaterial({
            color: 0x991b1b,
            roughness: 0.35,
            metalness: 0.05,
          });

          this.liverMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = liverMat.clone();
              this.organMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'digestive',
                structureId: 'liver',
                structureName: 'Hígado (Lóbulos Derecho e Izquierdo)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.liverMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetSize = 0.17;
          const scale = targetSize / (size.y || 1);
          this.liverMesh.scale.setScalar(scale);

          // Position in Right Hypochondrium: Y ~ 1.16m, X ~ 0.05m, Z ~ 0.03m
          this.liverMesh.position.set(
            -center.x * scale + 0.045,
            -center.y * scale + 1.16,
            -center.z * scale + 0.03
          );

          this.group.add(this.liverMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    const loadSmallIntestine = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/intestine_small.glb'),
        (gltf) => {
          this.smallIntestineMesh = gltf.scene;
          this.smallIntestineMesh.name = 'Anatomical_SmallIntestine';

          const mat = new THREE.MeshStandardMaterial({
            color: 0xd97706,
            roughness: 0.45,
          });

          this.smallIntestineMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = mat.clone();
              this.organMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'digestive',
                structureId: 'intestine_small',
                structureName: 'Intestino Delgado (Duodeno, Yeyuno e Íleon)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.smallIntestineMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.18;
          const scale = targetHeight / (size.y || 1);
          this.smallIntestineMesh.scale.setScalar(scale);

          this.smallIntestineMesh.position.set(
            -center.x * scale,
            -center.y * scale + 0.95,
            -center.z * scale + 0.035
          );

          this.group.add(this.smallIntestineMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    const loadLargeIntestine = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/intestine_large.glb'),
        (gltf) => {
          this.largeIntestineMesh = gltf.scene;
          this.largeIntestineMesh.name = 'Anatomical_LargeIntestine';

          const mat = new THREE.MeshStandardMaterial({
            color: 0xb45309,
            roughness: 0.4,
          });

          this.largeIntestineMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.material = mat.clone();
              this.organMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'digestive',
                structureId: 'intestine_large',
                structureName: 'Intestino Grueso (Colon y Recto)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.largeIntestineMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.22;
          const scale = targetHeight / (size.y || 1);
          this.largeIntestineMesh.scale.setScalar(scale);

          this.largeIntestineMesh.position.set(
            -center.x * scale,
            -center.y * scale + 0.97,
            -center.z * scale + 0.03
          );

          this.group.add(this.largeIntestineMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    await Promise.all([loadLiver, loadSmallIntestine, loadLargeIntestine]);
    this.isLoaded = true;
    return this.group;
  }

  private buildEsophagusAndStomach(): void {
    const visceraMat = new THREE.MeshStandardMaterial({
      color: 0xca8a04,
      roughness: 0.35,
      metalness: 0.05,
    });

    // 1. Esophagus (Tube from pharynx C6 to cardia T11)
    const esoCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.48, 0.0),
      new THREE.Vector3(0, 1.35, -0.01),
      new THREE.Vector3(-0.01, 1.22, 0.0),
    ]);
    const esoGeo = new THREE.TubeGeometry(esoCurve, 16, 0.009, 8, false);
    this.esophagusMesh = new THREE.Mesh(esoGeo, visceraMat);
    this.esophagusMesh.userData = {
      systemId: 'digestive',
      structureId: 'intestine_small',
      structureName: 'Esófago',
      selectable: true,
    };
    this.group.add(this.esophagusMesh);

    // 2. Stomach (J-shaped organ in left hypochondrium / epigastrium)
    const stomachGeo = new THREE.SphereGeometry(0.065, 20, 20);
    this.stomachMesh = new THREE.Mesh(stomachGeo, visceraMat);
    this.stomachMesh.scale.set(1.2, 1.4, 0.9);
    this.stomachMesh.rotation.z = -Math.PI / 6;
    this.stomachMesh.position.set(-0.045, 1.18, 0.03);
    this.stomachMesh.userData = {
      systemId: 'digestive',
      structureId: 'intestine_small',
      structureName: 'Estómago (Fondo, Cuerpo y Antro)',
      selectable: true,
    };
    this.organMaterials.push(visceraMat);
    this.group.add(this.stomachMesh);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0xf59e0b): void {
    this.organMaterials.forEach((mat) => {
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
    // Moves forward and down
    this.group.position.set(0, -offset * 0.05, offset * 0.2);
  }
}
