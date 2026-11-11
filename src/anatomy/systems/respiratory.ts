/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Respiratorio (Systema respiratorium)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class RespiratorySystem {
  public readonly group: THREE.Group;
  public readonly id = 'respiratory';
  public readonly name = 'Sistema Respiratorio';
  public lungsMesh: THREE.Group | null = null;
  public tracheaGroup: THREE.Group;
  public isLoaded: boolean = false;
  private lungsBaseScale = new THREE.Vector3(1, 1, 1);
  private lungMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Respiratory';
    this.tracheaGroup = new THREE.Group();
    this.tracheaGroup.name = 'Trachea_Bronchi';
    this.group.add(this.tracheaGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    return new Promise((resolve) => {
      this.buildTracheaAndBronchi();

      loader.load(
        resolveModelUrl('models/lungs.glb'),
        (gltf) => {
          this.lungsMesh = gltf.scene;
          this.lungsMesh.name = 'Anatomical_Lungs';

          const lungMat = new THREE.MeshStandardMaterial({
            color: 0x67e8f9,
            roughness: 0.5,
            metalness: 0.05,
            transparent: true,
            opacity: 0.92,
          });

          this.lungsMesh.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = lungMat.clone();
              this.lungMaterials.push(mesh.material as THREE.MeshStandardMaterial);
              mesh.userData = {
                systemId: 'respiratory',
                structureId: 'lungs',
                structureName: 'Pulmones y Árbol Bronquial',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.lungsMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.24;
          const scale = targetHeight / (size.y || 1);
          this.lungsMesh.scale.setScalar(scale);
          this.lungsBaseScale.setScalar(scale);

          this.lungsMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.33,
            -center.z * scale + 0.01
          );

          this.group.add(this.lungsMesh);
          this.isLoaded = true;
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) onProgress(xhr.loaded / xhr.total);
        },
        (err) => {
          console.warn('[RespiratorySystem] Fallback to procedural lungs:', err);
          this.buildProceduralLungs();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private buildTracheaAndBronchi(): void {
    const cartilageMat = new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      roughness: 0.4,
      metalness: 0.1,
    });

    // Trachea (C6 to T4/T5 carina)
    const tracheaGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.12, 16);
    const trachea = new THREE.Mesh(tracheaGeo, cartilageMat);
    trachea.position.set(0, 1.46, 0.02);
    trachea.userData = {
      systemId: 'respiratory',
      structureId: 'lungs',
      structureName: 'Tráquea',
      selectable: true,
    };
    this.tracheaGroup.add(trachea);

    // Right & Left Main Bronchus branching at carina
    const rBronchusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.40, 0.02),
      new THREE.Vector3(0.025, 1.37, 0.01),
      new THREE.Vector3(0.05, 1.34, 0.0),
    ]);
    const lBronchusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.40, 0.02),
      new THREE.Vector3(-0.03, 1.37, 0.01),
      new THREE.Vector3(-0.055, 1.34, 0.0),
    ]);
    this.tracheaGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rBronchusCurve, 12, 0.007, 8, false), cartilageMat));
    this.tracheaGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lBronchusCurve, 12, 0.007, 8, false), cartilageMat));
  }

  private buildProceduralLungs(): void {
    const lungsGroup = new THREE.Group();
    lungsGroup.name = 'Procedural_Lungs';
    const mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.5,
      transparent: true,
      opacity: 0.88,
    });

    const rLung = new THREE.Mesh(new THREE.SphereGeometry(0.08, 20, 20), mat);
    rLung.scale.set(0.9, 1.4, 0.8);
    rLung.position.set(0.07, 1.33, 0.01);
    rLung.userData = { systemId: 'respiratory', structureId: 'lungs', structureName: 'Pulmón Derecho (3 Lóbulos)', selectable: true };
    lungsGroup.add(rLung);

    const lLung = new THREE.Mesh(new THREE.SphereGeometry(0.075, 20, 20), mat);
    lLung.scale.set(0.85, 1.35, 0.75);
    lLung.position.set(-0.07, 1.33, 0.01);
    lLung.userData = { systemId: 'respiratory', structureId: 'lungs', structureName: 'Pulmón Izquierdo (2 Lóbulos)', selectable: true };
    lungsGroup.add(lLung);

    this.group.add(lungsGroup);
    this.lungsMesh = lungsGroup;
  }

  public expand(expansionFactor: number): void {
    if (this.lungsMesh) {
      this.lungsMesh.scale.set(
        this.lungsBaseScale.x * expansionFactor,
        this.lungsBaseScale.y * (1 + (expansionFactor - 1) * 0.8),
        this.lungsBaseScale.z * expansionFactor
      );
    }
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0x00f0ff): void {
    this.lungMaterials.forEach((mat) => {
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
    // Moves slightly forward
    this.group.position.z = offset * 0.22;
  }
}
