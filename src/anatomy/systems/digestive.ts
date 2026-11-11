/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Digestivo (Systema digestorium)
 * Modelos anatómicos NIH HRA + BodyParts3D con shaders serosos PBR de alta fidelidad
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
  public spleenMesh: THREE.Group | null = null;
  public stomachMesh: THREE.Group | null = null;
  public smallIntestineMesh: THREE.Group | null = null;
  public largeIntestineMesh: THREE.Group | null = null;
  public esophagusMesh: THREE.Mesh | null = null;
  public gallbladderMesh: THREE.Mesh | null = null;

  public isLoaded: boolean = false;
  private organMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Digestive';
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildEsophagusAndStomach();
    this.buildGallbladder();

    // 1. Hígado anatómico (Lóbulo derecho e izquierdo, cara diafragmática)
    const loadLiver = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/liver.glb'),
        (gltf) => {
          this.liverMesh = gltf.scene;
          this.liverMesh.name = 'Anatomical_Liver';

          // Shader PBR de cápsula de Glisson y parénquima hepático húmedo
          const liverMat = new THREE.MeshStandardMaterial({
            color: 0x5e1914, // Pardo rojizo hepático profundo
            roughness: 0.28,
            metalness: 0.04,
            clearcoat: 0.85, // Serosa peritoneal brillante
            clearcoatRoughness: 0.18,
          });

          this.liverMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = liverMat.clone();
              this.organMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'digestive',
                structureId: 'liver',
                structureName: 'Hígado (Lóbulos Derecho e Izquierdo, Glisson)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.liverMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          // Escala proporcional a caja torácica inferior
          const targetSize = 0.165;
          const scale = targetSize / (size.y || 1);
          this.liverMesh.scale.setScalar(scale);

          // Hipocondrio derecho: Y ~ 1.16m, Z ~ 0.03m, X ligeramente a la derecha
          this.liverMesh.position.set(
            -center.x * scale + 0.045,
            -center.y * scale + 1.16,
            -center.z * scale + 0.028
          );

          this.group.add(this.liverMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    // 2. Bazo anatómico (Órgano linfoide y reservorio hemático en hipocondrio izquierdo)
    const loadSpleen = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/spleen.glb'),
        (gltf) => {
          this.spleenMesh = gltf.scene;
          this.spleenMesh.name = 'Anatomical_Spleen';

          const spleenMat = new THREE.MeshStandardMaterial({
            color: 0x4a1525, // Púrpura esplénico
            roughness: 0.32,
            metalness: 0.05,
            clearcoat: 0.8,
            clearcoatRoughness: 0.2,
          });

          this.spleenMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = spleenMat.clone();
              this.organMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'digestive',
                structureId: 'digestive_spleen',
                structureName: 'Bazo (Pulpa Roja y Blanca)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.spleenMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetSize = 0.085;
          const scale = targetSize / (size.y || 1);
          this.spleenMesh.scale.setScalar(scale);

          // Hipocondrio izquierdo posterolateral: Y ~ 1.17m, X ~ -0.09m, Z ~ -0.02m
          this.spleenMesh.position.set(
            -center.x * scale - 0.09,
            -center.y * scale + 1.17,
            -center.z * scale - 0.015
          );

          this.group.add(this.spleenMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    // 3. Intestino Delgado (Duodeno, Yeyuno e Íleon)
    const loadSmallIntestine = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/intestine_small.glb'),
        (gltf) => {
          this.smallIntestineMesh = gltf.scene;
          this.smallIntestineMesh.name = 'Anatomical_SmallIntestine';

          // Tono ocre entérico con serosa peritoneal
          const mat = new THREE.MeshStandardMaterial({
            color: 0xb5694a, // Mucosa intestinal
            roughness: 0.36,
            metalness: 0.04,
            clearcoat: 0.65,
            clearcoatRoughness: 0.25,
          });

          this.smallIntestineMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
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

    // 4. Intestino Grueso (Marco Cólico: Ciego, Colon ascendente, transverso, descendente, sigmoide y recto)
    const loadLargeIntestine = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/intestine_large.glb'),
        (gltf) => {
          this.largeIntestineMesh = gltf.scene;
          this.largeIntestineMesh.name = 'Anatomical_LargeIntestine';

          const mat = new THREE.MeshStandardMaterial({
            color: 0x8c3e2e, // Tono colónico más rojizo/marrón
            roughness: 0.35,
            metalness: 0.04,
            clearcoat: 0.72,
            clearcoatRoughness: 0.22,
          });

          this.largeIntestineMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = mat.clone();
              this.organMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'digestive',
                structureId: 'intestine_large',
                structureName: 'Intestino Grueso (Marco Cólico y Haustras)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.largeIntestineMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.225;
          const scale = targetHeight / (size.y || 1);
          this.largeIntestineMesh.scale.setScalar(scale);

          this.largeIntestineMesh.position.set(
            -center.x * scale,
            -center.y * scale + 0.97,
            -center.z * scale + 0.028
          );

          this.group.add(this.largeIntestineMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    await Promise.all([loadLiver, loadSpleen, loadSmallIntestine, loadLargeIntestine]);
    this.isLoaded = true;
    return this.group;
  }

  /**
   * Generación anatómica precisa del esófago y estómago humano con curvaturas mayor y menor
   */
  private buildEsophagusAndStomach(): void {
    const stomachGroup = new THREE.Group();
    stomachGroup.name = 'Anatomical_Stomach_Complex';

    // Shader PBR de mucosa y serosa gástrica
    const gastricMat = new THREE.MeshStandardMaterial({
      color: 0x9e4736, // Mucosa gástrica vascularizada
      roughness: 0.32,
      metalness: 0.04,
      clearcoat: 0.82,
      clearcoatRoughness: 0.2,
    });
    this.organMaterials.push(gastricMat);

    // 1. Esófago: Trayecto cervical, torácico y abdominal hasta el cardias (C6 a T11)
    const esoCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.48, -0.01),
      new THREE.Vector3(0, 1.36, -0.015),
      new THREE.Vector3(-0.008, 1.25, -0.01),
      new THREE.Vector3(-0.022, 1.21, 0.01), // Hiato esofágico
    ]);
    const esoGeo = new THREE.TubeGeometry(esoCurve, 24, 0.0085, 12, false);
    this.esophagusMesh = new THREE.Mesh(esoGeo, gastricMat);
    this.esophagusMesh.castShadow = true;
    this.esophagusMesh.userData = {
      systemId: 'digestive',
      structureId: 'stomach',
      structureName: 'Esófago (Cervical, Torácico y Abdominal)',
      selectable: true,
    };
    stomachGroup.add(this.esophagusMesh);

    // 2. Estómago: Órgano en forma de J en hipocondrio izquierdo y epigastrio
    // Construcción mediante curvatura Catmull-Rom extruida con diámetro variable
    const stomachCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.022, 1.205, 0.01), // Cardias
      new THREE.Vector3(-0.05, 1.225, 0.025), // Fundus (cúpula)
      new THREE.Vector3(-0.065, 1.18, 0.03),  // Curvatura mayor superior
      new THREE.Vector3(-0.055, 1.12, 0.035), // Cuerpo gástrico
      new THREE.Vector3(-0.025, 1.10, 0.032), // Antro pilórico
      new THREE.Vector3(0.005, 1.11, 0.022),  // Píloro (hacia duodeno)
    ]);

    // Modelo volumétrico del estómago
    const stomachLathePoints: THREE.Vector2[] = [];
    stomachLathePoints.push(new THREE.Vector2(0.012, -0.06));
    stomachLathePoints.push(new THREE.Vector2(0.038, -0.03));
    stomachLathePoints.push(new THREE.Vector2(0.052, 0.01));
    stomachLathePoints.push(new THREE.Vector2(0.046, 0.05));
    stomachLathePoints.push(new THREE.Vector2(0.022, 0.075));
    stomachLathePoints.push(new THREE.Vector2(0.008, 0.08));

    const stomachBaseGeo = new THREE.SphereGeometry(0.058, 24, 24);
    // Deformar la esfera para crear la morfología asimétrica exacta del estómago
    const pos = stomachBaseGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      // Expandir fundus hacia arriba a la izquierda
      if (y > 0 && x < 0) {
        x *= 1.25;
        y *= 1.15;
      }
      // Estrechar hacia el píloro en la región inferior derecha
      if (y < 0 && x > 0) {
        x *= 0.85;
        z *= 0.75;
      }
      pos.setXYZ(i, x * 1.1, y * 1.35, z * 0.95);
    }
    stomachBaseGeo.computeVertexNormals();

    const stomachMeshBody = new THREE.Mesh(stomachBaseGeo, gastricMat);
    stomachMeshBody.rotation.z = -0.35;
    stomachMeshBody.rotation.y = 0.2;
    stomachMeshBody.position.set(-0.038, 1.165, 0.028);
    stomachMeshBody.castShadow = true;
    stomachMeshBody.receiveShadow = true;

    stomachMeshBody.userData = {
      systemId: 'digestive',
      structureId: 'stomach',
      structureName: 'Estómago (Fundus, Cuerpo, Antro y Píloro)',
      selectable: true,
    };

    stomachGroup.add(stomachMeshBody);
    this.stomachMesh = stomachGroup;
    this.group.add(this.stomachMesh);
  }

  /**
   * Vesícula Biliar (Almacén y concentración de bilis)
   */
  private buildGallbladder(): void {
    const bileMat = new THREE.MeshStandardMaterial({
      color: 0x3d7041, // Verde oliva biliar intenso
      roughness: 0.25,
      metalness: 0.05,
      clearcoat: 0.88,
      clearcoatRoughness: 0.15,
    });
    this.organMaterials.push(bileMat);

    // Forma piriforme piramidal
    const gbGeo = new THREE.SphereGeometry(0.016, 16, 16);
    gbGeo.scale(1.0, 1.8, 1.0);
    this.gallbladderMesh = new THREE.Mesh(gbGeo, bileMat);
    this.gallbladderMesh.rotation.z = 0.4;
    this.gallbladderMesh.rotation.x = 0.3;
    // Debajo del lóbulo derecho hepático
    this.gallbladderMesh.position.set(0.045, 1.12, 0.04);
    this.gallbladderMesh.userData = {
      systemId: 'digestive',
      structureId: 'liver',
      structureName: 'Vesícula Biliar y Vías Biliares (Coledoco)',
      selectable: true,
    };
    this.group.add(this.gallbladderMesh);
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
    // Desplazamiento anterior e inferior para visualización por capas
    this.group.position.set(0, -offset * 0.05, offset * 0.2);
  }
}
