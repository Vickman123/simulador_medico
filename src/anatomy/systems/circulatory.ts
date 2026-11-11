/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Circulatorio (Systema cardiovasculare)
 * Corazón anatómico NIH HRA con acabado seroso PBR y árbol vascular
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class CirculatorySystem {
  public readonly group: THREE.Group;
  public readonly id = 'circulatory';
  public readonly name = 'Sistema Circulatorio';
  public heartMesh: THREE.Group | null = null;
  public vesselsGroup: THREE.Group;
  public isLoaded: boolean = false;
  private heartBaseScale = new THREE.Vector3(1, 1, 1);
  private heartMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Circulatory';
    this.vesselsGroup = new THREE.Group();
    this.vesselsGroup.name = 'Systemic_Vasculature';
    this.group.add(this.vesselsGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    return new Promise((resolve) => {
      this.buildSystemicVasculature();

      loader.load(
        resolveModelUrl('models/heart.glb'),
        (gltf) => {
          this.heartMesh = gltf.scene;
          this.heartMesh.name = 'Anatomical_Heart';

          // Shader PBR de tejido miocárdico húmedo con serosa brillante
          const heartMat = new THREE.MeshPhysicalMaterial({
            color: 0x8b1e2a, // Rojo miocárdico profundo
            roughness: 0.3,
            metalness: 0.05,
            clearcoat: 0.85, // Serosa pericárdica fresca
            clearcoatRoughness: 0.18,
          });

          this.heartMesh.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = heartMat.clone();
              this.heartMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'circulatory',
                structureId: 'heart',
                structureName: 'Corazón (Miocardio y Cavidades)',
                selectable: true,
              };
            }
          });

          // Dimensiones de corazón adulto: ~12cm alto x 9cm ancho
          const box = new THREE.Box3().setFromObject(this.heartMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetSize = 0.115;
          const scale = targetSize / (size.y || 1);
          this.heartMesh.scale.setScalar(scale);
          this.heartBaseScale.setScalar(scale);

          // Posición anatómica precisa en mediastino medio:
          // Descansa sobre diafragma a nivel T8, inclinado a la izquierda
          this.heartMesh.position.set(
            -center.x * scale - 0.015,
            -center.y * scale + 1.28,
            -center.z * scale + 0.02
          );

          this.group.add(this.heartMesh);
          this.isLoaded = true;
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) onProgress(xhr.loaded / xhr.total);
        },
        (err) => {
          console.warn('[CirculatorySystem] Fallback a corazón procedimental:', err);
          this.buildProceduralHeart();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private buildSystemicVasculature(): void {
    const arteryMat = new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      roughness: 0.35,
      metalness: 0.1,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });
    const veinMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.35,
      metalness: 0.1,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });

    // 1. Aorta ascendente, cayado y aorta descendente toracoabdominal
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.012, 1.32, 0.02),
      new THREE.Vector3(-0.012, 1.37, 0.01),
      new THREE.Vector3(-0.018, 1.34, -0.02),
      new THREE.Vector3(-0.015, 1.20, -0.025),
      new THREE.Vector3(-0.01, 1.05, -0.025),
      new THREE.Vector3(0.0, 0.90, -0.02),
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 32, 0.011, 12, false);
    const aortaMesh = new THREE.Mesh(aortaGeo, arteryMat);
    aortaMesh.userData = {
      systemId: 'circulatory',
      structureId: 'heart',
      structureName: 'Arteria Aorta Ascendente y Descendente',
      selectable: true,
    };
    this.vesselsGroup.add(aortaMesh);

    // 2. Venas cavas superior e inferior
    const venaCavaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.018, 1.43, 0.01),
      new THREE.Vector3(0.018, 1.32, 0.015),
      new THREE.Vector3(0.014, 1.18, -0.018),
      new THREE.Vector3(0.012, 1.05, -0.018),
      new THREE.Vector3(0.008, 0.90, -0.018),
    ]);
    const cavaGeo = new THREE.TubeGeometry(venaCavaCurve, 32, 0.012, 12, false);
    const cavaMesh = new THREE.Mesh(cavaGeo, veinMat);
    cavaMesh.userData = {
      systemId: 'circulatory',
      structureId: 'heart',
      structureName: 'Vena Cava Superior e Inferior',
      selectable: true,
    };
    this.vesselsGroup.add(cavaMesh);

    // 3. Vasos carotídeos y yugulares
    const rCarotid = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.01, 1.37, 0.01),
      new THREE.Vector3(0.022, 1.50, 0.01),
      new THREE.Vector3(0.02, 1.62, 0.015),
    ]);
    const lCarotid = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.015, 1.37, 0.01),
      new THREE.Vector3(-0.022, 1.50, 0.01),
      new THREE.Vector3(-0.02, 1.62, 0.015),
    ]);
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rCarotid, 16, 0.005, 8, false), arteryMat));
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lCarotid, 16, 0.005, 8, false), arteryMat));

    // 4. Arterias ilíacas y femorales
    const rFemoral = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.90, -0.02),
      new THREE.Vector3(0.05, 0.82, 0.0),
      new THREE.Vector3(0.07, 0.62, 0.01),
      new THREE.Vector3(0.065, 0.42, 0.0),
    ]);
    const lFemoral = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.90, -0.02),
      new THREE.Vector3(-0.05, 0.82, 0.0),
      new THREE.Vector3(-0.07, 0.62, 0.01),
      new THREE.Vector3(-0.065, 0.42, 0.0),
    ]);
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rFemoral, 24, 0.006, 8, false), arteryMat));
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lFemoral, 24, 0.006, 8, false), arteryMat));
  }

  private buildProceduralHeart(): void {
    const heartGroup = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x8b1e2a, roughness: 0.3, clearcoat: 0.8 });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.06, 24, 24), mat);
    mesh.scale.set(1.0, 1.25, 0.9);
    mesh.position.set(-0.015, 1.28, 0.02);
    mesh.userData = { systemId: 'circulatory', structureId: 'heart', structureName: 'Corazón (Miocardio)', selectable: true };
    heartGroup.add(mesh);
    this.group.add(heartGroup);
    this.heartMesh = heartGroup;
  }

  public pulse(scaleFactor: number): void {
    if (this.heartMesh) {
      this.heartMesh.scale.set(
        this.heartBaseScale.x * scaleFactor,
        this.heartBaseScale.y * (scaleFactor * 0.95),
        this.heartBaseScale.z * scaleFactor
      );
    }
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0xff3366): void {
    this.heartMaterials.forEach((mat) => {
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
    this.group.position.set(-offset * 0.2, 0, offset * 0.25);
  }
}
