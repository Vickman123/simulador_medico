/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Circulatorio (Systema cardiovasculare)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
      // 1. Build anatomical arterial and venous vascular network
      this.buildSystemicVasculature();

      // 2. Load high-resolution anatomical Heart GLB
      loader.load(
        'models/heart.glb',
        (gltf) => {
          this.heartMesh = gltf.scene;
          this.heartMesh.name = 'Anatomical_Heart';

          const heartMat = new THREE.MeshStandardMaterial({
            color: 0xb91c1c,
            roughness: 0.35,
            metalness: 0.1,
            clearcoat: 0.3,
            clearcoatRoughness: 0.2,
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
                structureName: 'Corazón (Miocardio)',
                selectable: true,
              };
            }
          });

          // Normalize and place in thoracic cavity (Mediastinum)
          const box = new THREE.Box3().setFromObject(this.heartMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          // Real heart dimensions: approx 12cm length x 9cm width
          const targetSize = 0.13;
          const scale = targetSize / (size.y || 1);
          this.heartMesh.scale.setScalar(scale);
          this.heartBaseScale.setScalar(scale);

          // Center in mediastinum: Y ~ 1.30m, slightly to the left (X ~ -0.015), Z ~ 0.04
          this.heartMesh.position.set(
            -center.x * scale - 0.012,
            -center.y * scale + 1.30,
            -center.z * scale + 0.035
          );

          this.group.add(this.heartMesh);
          this.isLoaded = true;
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) onProgress(xhr.loaded / xhr.total);
        },
        (err) => {
          console.warn('[CirculatorySystem] Fallback to procedural heart:', err);
          this.buildProceduralHeart();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private buildSystemicVasculature(): void {
    const arteryMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.3,
      metalness: 0.2,
    });
    const veinMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.3,
      metalness: 0.2,
    });

    // 1. Thoracic & Abdominal Aorta (Curved tube descending along spine)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.01, 1.34, 0.03), // Aortic root
      new THREE.Vector3(-0.01, 1.39, 0.01), // Arch apex
      new THREE.Vector3(-0.02, 1.36, -0.02), // Descending start
      new THREE.Vector3(-0.015, 1.22, -0.03), // Thoracic
      new THREE.Vector3(-0.01, 1.05, -0.03), // Abdominal
      new THREE.Vector3(0.0, 0.92, -0.02), // Iliac bifurcation
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 32, 0.012, 12, false);
    const aortaMesh = new THREE.Mesh(aortaGeo, arteryMat);
    aortaMesh.userData = {
      systemId: 'circulatory',
      structureId: 'heart',
      structureName: 'Aorta Ascendente y Abdominal',
      selectable: true,
    };
    this.vesselsGroup.add(aortaMesh);

    // 2. Vena Cava (Superior & Inferior returning to right atrium)
    const venaCavaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.02, 1.45, 0.01), // Jugular confluence
      new THREE.Vector3(0.02, 1.34, 0.02), // Superior entry
      new THREE.Vector3(0.015, 1.20, -0.02), // Inferior entry
      new THREE.Vector3(0.015, 1.05, -0.02), // Abdominal cava
      new THREE.Vector3(0.01, 0.92, -0.02), // Iliac confluence
    ]);
    const cavaGeo = new THREE.TubeGeometry(venaCavaCurve, 32, 0.013, 12, false);
    const cavaMesh = new THREE.Mesh(cavaGeo, veinMat);
    cavaMesh.userData = {
      systemId: 'circulatory',
      structureId: 'heart',
      structureName: 'Vena Cava Superior e Inferior',
      selectable: true,
    };
    this.vesselsGroup.add(cavaMesh);

    // 3. Carotid and Jugular to Head
    const rightCarotid = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.01, 1.39, 0.01),
      new THREE.Vector3(0.025, 1.52, 0.01),
      new THREE.Vector3(0.02, 1.62, 0.02),
    ]);
    const leftCarotid = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.015, 1.39, 0.01),
      new THREE.Vector3(-0.025, 1.52, 0.01),
      new THREE.Vector3(-0.02, 1.62, 0.02),
    ]);
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rightCarotid, 16, 0.006, 8, false), arteryMat));
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(leftCarotid, 16, 0.006, 8, false), arteryMat));

    // 4. Iliac & Femoral Arteries to Limbs
    const rightFemoral = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.92, -0.02),
      new THREE.Vector3(0.06, 0.85, 0.0),
      new THREE.Vector3(0.08, 0.65, 0.01),
      new THREE.Vector3(0.07, 0.45, 0.0),
    ]);
    const leftFemoral = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 0.92, -0.02),
      new THREE.Vector3(-0.06, 0.85, 0.0),
      new THREE.Vector3(-0.08, 0.65, 0.01),
      new THREE.Vector3(-0.07, 0.45, 0.0),
    ]);
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rightFemoral, 24, 0.007, 8, false), arteryMat));
    this.vesselsGroup.add(new THREE.Mesh(new THREE.TubeGeometry(leftFemoral, 24, 0.007, 8, false), arteryMat));
  }

  private buildProceduralHeart(): void {
    const heartGroup = new THREE.Group();
    heartGroup.name = 'Procedural_Heart';
    const mat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.35,
      metalness: 0.1,
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.07, 24, 24), mat);
    mesh.scale.set(1.0, 1.25, 0.9);
    mesh.position.set(-0.015, 1.30, 0.035);
    mesh.userData = {
      systemId: 'circulatory',
      structureId: 'heart',
      structureName: 'Corazón (Miocardio)',
      selectable: true,
    };
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
    // Moves slightly forward and to the left
    this.group.position.set(-offset * 0.2, 0, offset * 0.25);
  }
}
