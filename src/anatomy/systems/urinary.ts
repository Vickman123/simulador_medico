/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Urinario (Systema urinarium)
 * Riñones y vejiga NIH HRA + uréteres y cápsula renal PBR
 * Vickora Labs
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
  private urinaryMaterials: (THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial)[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Urinary';
    this.uretersGroup = new THREE.Group();
    this.uretersGroup.name = 'Ureters';
    this.group.add(this.uretersGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildUreters();

    // Shader PBR de corteza renal y cápsula fibrosa con brillo seroso
    const kidneyMat = new THREE.MeshPhysicalMaterial({
      color: 0x6e2428, // Pardo rojizo renal anatómico (no verde artificial)
      roughness: 0.32,
      metalness: 0.05,
      clearcoat: 0.85, // Cápsula renal húmeda
      clearcoatRoughness: 0.18,
    });

    // Shader PBR del músculo detrusor vesical
    const bladderMat = new THREE.MeshPhysicalMaterial({
      color: 0xa8534c, // Detrusor y mucosa vesical
      roughness: 0.36,
      metalness: 0.04,
      clearcoat: 0.78,
      clearcoatRoughness: 0.22,
    });

    // 1. Riñón Izquierdo (T12 - L3, más alto que el derecho)
    const loadLeftKidney = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/kidney_left.glb'),
        (gltf) => {
          this.kidneyLeftMesh = gltf.scene;
          this.kidneyLeftMesh.name = 'Anatomical_Kidney_L';

          this.kidneyLeftMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = kidneyMat.clone();
              this.urinaryMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'urinary',
                structureId: 'kidneys',
                structureName: 'Riñón Izquierdo (Corteza, Médula, Pirámides y Pelvis Renal)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.kidneyLeftMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.115;
          const scale = targetHeight / (size.y || 1);
          this.kidneyLeftMesh.scale.setScalar(scale);

          // Posición retroperitoneal izquierda
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

    // 2. Riñón Derecho (Ligeramente más caudal por la presencia del lóbulo hepático derecho)
    const loadRightKidney = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/kidney_right.glb'),
        (gltf) => {
          this.kidneyRightMesh = gltf.scene;
          this.kidneyRightMesh.name = 'Anatomical_Kidney_R';

          this.kidneyRightMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = kidneyMat.clone();
              this.urinaryMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'urinary',
                structureId: 'kidneys',
                structureName: 'Riñón Derecho (Corteza, Médula y Cápsula Renal)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.kidneyRightMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.115;
          const scale = targetHeight / (size.y || 1);
          this.kidneyRightMesh.scale.setScalar(scale);

          // Posición retroperitoneal derecha (~1.5 cm más baja)
          this.kidneyRightMesh.position.set(
            -center.x * scale + 0.045,
            -center.y * scale + 1.115,
            -center.z * scale - 0.025
          );

          this.group.add(this.kidneyRightMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    // 3. Vejiga Urinaria (Alojada en pelvis menor, posterior a sínfisis púbica)
    const loadBladder = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/bladder.glb'),
        (gltf) => {
          this.bladderMesh = gltf.scene;
          this.bladderMesh.name = 'Anatomical_Bladder';

          this.bladderMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = bladderMat.clone();
              this.urinaryMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'urinary',
                structureId: 'urinary_bladder',
                structureName: 'Vejiga Urinaria (Detrusor y Trígono Vesical)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.bladderMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.085;
          const scale = targetHeight / (size.y || 1);
          this.bladderMesh.scale.setScalar(scale);

          // Hipogastrio / Pelvis menor: Y ~ 0.88m, Z ~ 0.02m
          this.bladderMesh.position.set(
            -center.x * scale,
            -center.y * scale + 0.88,
            -center.z * scale + 0.015
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

  /**
   * Construcción de uréteres anatómicos (conductos musculares retroperitoneales)
   */
  private buildUreters(): void {
    const ureterMat = new THREE.MeshPhysicalMaterial({
      color: 0xdec0af, // Urotelio aperlado
      roughness: 0.38,
      metalness: 0.04,
      clearcoat: 0.65,
    });
    this.urinaryMaterials.push(ureterMat);

    // Uréter Izquierdo: Desde pelvis renal izquierda (~1.12m) hasta trígono vesical (~0.89m)
    const leftCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.045, 1.11, -0.02),
      new THREE.Vector3(-0.038, 1.04, -0.015),
      new THREE.Vector3(-0.025, 0.96, -0.005),
      new THREE.Vector3(-0.015, 0.89, 0.01),
    ]);
    const leftGeo = new THREE.TubeGeometry(leftCurve, 20, 0.0035, 8, false);
    const leftUreter = new THREE.Mesh(leftGeo, ureterMat);
    leftUreter.userData = {
      systemId: 'urinary',
      structureId: 'urinary_bladder',
      structureName: 'Uréter Izquierdo (Conducto Urotelial Retroperitoneal)',
      selectable: true,
    };
    this.uretersGroup.add(leftUreter);

    // Uréter Derecho: Desde pelvis renal derecha (~1.095m) hasta trígono vesical (~0.89m)
    const rightCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.045, 1.095, -0.02),
      new THREE.Vector3(0.038, 1.03, -0.015),
      new THREE.Vector3(0.025, 0.96, -0.005),
      new THREE.Vector3(0.015, 0.89, 0.01),
    ]);
    const rightGeo = new THREE.TubeGeometry(rightCurve, 20, 0.0035, 8, false);
    const rightUreter = new THREE.Mesh(rightGeo, ureterMat);
    rightUreter.userData = {
      systemId: 'urinary',
      structureId: 'urinary_bladder',
      structureName: 'Uréter Derecho (Conducto Urotelial Retroperitoneal)',
      selectable: true,
    };
    this.uretersGroup.add(rightUreter);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0x10b981): void {
    this.urinaryMaterials.forEach((mat) => {
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
    // Los riñones se desplazan posteriormente y la vejiga hacia abajo/adelante
    this.group.position.set(0, -offset * 0.04, -offset * 0.12);
  }
}
