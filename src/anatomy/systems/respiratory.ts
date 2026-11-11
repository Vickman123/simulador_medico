/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Respiratorio (Systema respiratorium)
 * Pulmones anatómicos NIH HRA con textura parenquimatosa y tráquea
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

          // Shader PBR de parénquima pulmonar realista (Rosa malva esponjoso y ligeramente translúcido)
          const lungMat = new THREE.MeshStandardMaterial({
            color: 0xbe6e7b, // Rosa grisáceo anatómico
            roughness: 0.52,
            metalness: 0.04,
            clearcoat: 0.35,
            clearcoatRoughness: 0.3,
            transparent: true,
            opacity: 0.94,
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

          // Dimensiones de pulmones adultos dentro de la caja torácica (~24cm alto)
          const targetHeight = 0.24;
          const scale = targetHeight / (size.y || 1);
          this.lungsMesh.scale.setScalar(scale);
          this.lungsBaseScale.setScalar(scale);

          // Centrado exacto en la cavidad torácica
          this.lungsMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.30,
            -center.z * scale + 0.005
          );

          this.group.add(this.lungsMesh);
          this.isLoaded = true;
          resolve(this.group);
        },
        (xhr) => {
          if (xhr.total > 0 && onProgress) onProgress(xhr.loaded / xhr.total);
        },
        (err) => {
          console.warn('[RespiratorySystem] Fallback a pulmones procedimentales:', err);
          this.buildProceduralLungs();
          this.isLoaded = true;
          resolve(this.group);
        }
      );
    });
  }

  private buildTracheaAndBronchi(): void {
    const cartilageMat = new THREE.MeshStandardMaterial({
      color: 0xe0e7ff,
      roughness: 0.35,
      metalness: 0.08,
      clearcoat: 0.4,
    });

    // Tráquea (de C6 a carina en T4/T5)
    const tracheaGeo = new THREE.CylinderGeometry(0.011, 0.011, 0.11, 16);
    const trachea = new THREE.Mesh(tracheaGeo, cartilageMat);
    trachea.position.set(0, 1.44, 0.015);
    trachea.userData = {
      systemId: 'respiratory',
      structureId: 'lungs',
      structureName: 'Tráquea Cartilaginosa',
      selectable: true,
    };
    this.tracheaGroup.add(trachea);

    // Bronquios principales derecho e izquierdo
    const rBronchusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.38, 0.015),
      new THREE.Vector3(0.024, 1.35, 0.005),
      new THREE.Vector3(0.048, 1.32, -0.005),
    ]);
    const lBronchusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.38, 0.015),
      new THREE.Vector3(-0.028, 1.35, 0.005),
      new THREE.Vector3(-0.052, 1.32, -0.005),
    ]);
    this.tracheaGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rBronchusCurve, 12, 0.006, 8, false), cartilageMat));
    this.tracheaGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lBronchusCurve, 12, 0.006, 8, false), cartilageMat));
  }

  private buildProceduralLungs(): void {
    const lungsGroup = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0xbe6e7b, roughness: 0.5, clearcoat: 0.3 });
    const rLung = new THREE.Mesh(new THREE.SphereGeometry(0.075, 20, 20), mat);
    rLung.scale.set(0.9, 1.4, 0.8);
    rLung.position.set(0.065, 1.30, 0.005);
    lungsGroup.add(rLung);

    const lLung = new THREE.Mesh(new THREE.SphereGeometry(0.07, 20, 20), mat);
    lLung.scale.set(0.85, 1.35, 0.75);
    lLung.position.set(-0.065, 1.30, 0.005);
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
    this.group.position.z = offset * 0.22;
  }
}
