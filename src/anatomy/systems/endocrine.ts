/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Endocrino (Systema endocrinum)
 * Timo y páncreas NIH HRA + tiroides, hipófisis y suprarrenales PBR
 * Vickora Labs
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { resolveModelUrl } from '../../core/assetHelper.js';

export class EndocrineSystem {
  public readonly group: THREE.Group;
  public readonly id = 'endocrine';
  public readonly name = 'Sistema Endocrino';

  public thymusMesh: THREE.Group | null = null;
  public pancreasMesh: THREE.Group | null = null;
  public thyroidMesh: THREE.Mesh | null = null;
  public pituitaryMesh: THREE.Mesh | null = null;
  public adrenalsGroup: THREE.Group;
  public isLoaded: boolean = false;
  private endocrineMaterials: (THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial)[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Endocrine';
    this.adrenalsGroup = new THREE.Group();
    this.adrenalsGroup.name = 'Adrenal_Glands';
    this.group.add(this.adrenalsGroup);
  }

  public async load(loader: GLTFLoader, onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildThyroidPituitaryAndAdrenals();

    // 1. Timo anatómico (Mediastino anterosuperior, maduración de linfocitos T)
    const loadThymus = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/thymus.glb'),
        (gltf) => {
          this.thymusMesh = gltf.scene;
          this.thymusMesh.name = 'Anatomical_Thymus';

          const mat = new THREE.MeshPhysicalMaterial({
            color: 0xad7080, // Tono linfoide rosado pálido
            roughness: 0.35,
            metalness: 0.05,
            clearcoat: 0.6,
            clearcoatRoughness: 0.2,
          });

          this.thymusMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = mat.clone();
              this.endocrineMaterials.push(mesh.material as THREE.MeshPhysicalMaterial);
              mesh.userData = {
                systemId: 'endocrine',
                structureId: 'thymus',
                structureName: 'Timo (Lóbulos Bilaterales Mediastínicos)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.thymusMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetHeight = 0.075;
          const scale = targetHeight / (size.y || 1);
          this.thymusMesh.scale.setScalar(scale);

          // Mediastino anterior/superior por delante del cayado aórtico: Y ~ 1.39m, Z ~ 0.038m
          this.thymusMesh.position.set(
            -center.x * scale,
            -center.y * scale + 1.39,
            -center.z * scale + 0.035
          );

          this.group.add(this.thymusMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    // 2. Páncreas anatómico (Cabeza, cuello, cuerpo y cola en curvatura duodenal)
    const loadPancreas = new Promise<void>((resolve) => {
      loader.load(
        resolveModelUrl('models/pancreas.glb'),
        (gltf) => {
          this.pancreasMesh = gltf.scene;
          this.pancreasMesh.name = 'Anatomical_Pancreas';

          const mat = new THREE.MeshPhysicalMaterial({
            color: 0xd49b49, // Glándula exocrina/endocrina lobulada amarillenta
            roughness: 0.38,
            metalness: 0.04,
            clearcoat: 0.68,
            clearcoatRoughness: 0.22,
          });

          this.pancreasMesh.traverse((c) => {
            if ((c as THREE.Mesh).isMesh) {
              const mesh = c as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.material = mat.clone();
              this.endocrineMaterials.push(mesh.material as THREE.MeshPhysicalMaterial);
              mesh.userData = {
                systemId: 'endocrine',
                structureId: 'endocrine_pancreas',
                structureName: 'Páncreas (Islotes de Langerhans: Insulina y Glucagón)',
                selectable: true,
              };
            }
          });

          const box = new THREE.Box3().setFromObject(this.pancreasMesh);
          const size = new THREE.Vector3();
          box.getSize(size);
          const center = new THREE.Vector3();
          box.getCenter(center);

          const targetSize = 0.14;
          const scale = targetSize / (size.x || 1);
          this.pancreasMesh.scale.setScalar(scale);

          // Retroperitoneal, detrás del estómago a nivel L1-L2
          this.pancreasMesh.position.set(
            -center.x * scale - 0.01,
            -center.y * scale + 1.135,
            -center.z * scale + 0.01
          );

          this.group.add(this.pancreasMesh);
          resolve();
        },
        undefined,
        () => resolve()
      );
    });

    await Promise.all([loadThymus, loadPancreas]);
    this.isLoaded = true;
    return this.group;
  }

  /**
   * Glándula tiroides, hipófisis y glándulas suprarrenales anatómicas
   */
  private buildThyroidPituitaryAndAdrenals(): void {
    const thyroidMat = new THREE.MeshPhysicalMaterial({
      color: 0x8f3c39, // Muy vascularizada, pardo-rojiza
      roughness: 0.32,
      metalness: 0.05,
      clearcoat: 0.75,
      clearcoatRoughness: 0.2,
    });
    this.endocrineMaterials.push(thyroidMat);

    // 1. Glándula Tiroides (Forma de mariposa o H abrazando la tráquea en C5-T1)
    const thyroidGroup = new THREE.Group();
    thyroidGroup.name = 'Thyroid_Gland';

    // Lóbulo Derecho
    const lobeGeo = new THREE.SphereGeometry(0.016, 16, 16);
    lobeGeo.scale(0.8, 1.8, 0.9);
    const rightLobe = new THREE.Mesh(lobeGeo, thyroidMat);
    rightLobe.position.set(0.016, 0, 0);
    rightLobe.rotation.z = -0.15;
    thyroidGroup.add(rightLobe);

    // Lóbulo Izquierdo
    const leftLobe = new THREE.Mesh(lobeGeo, thyroidMat);
    leftLobe.position.set(-0.016, 0, 0);
    leftLobe.rotation.z = 0.15;
    thyroidGroup.add(leftLobe);

    // Istmo tiroideo
    const isthmusGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.024, 12);
    const isthmus = new THREE.Mesh(isthmusGeo, thyroidMat);
    isthmus.rotation.z = Math.PI / 2;
    isthmus.position.set(0, -0.008, 0.006);
    thyroidGroup.add(isthmus);

    thyroidGroup.position.set(0, 1.485, 0.018);
    thyroidGroup.traverse((c) => {
      if ((c as THREE.Mesh).isMesh) {
        c.userData = {
          systemId: 'endocrine',
          structureId: 'thyroid',
          structureName: 'Glándula Tiroides e Istmo (Hormonas T3, T4 y Calcitonina)',
          selectable: true,
        };
      }
    });
    this.thyroidMesh = thyroidGroup as any;
    this.group.add(thyroidGroup);

    // 2. Hipófisis / Glándula Pituitaria (Silla turca en la base del cráneo)
    const pitMat = new THREE.MeshPhysicalMaterial({
      color: 0xa45a7c, // Neuroendocrino
      roughness: 0.35,
      metalness: 0.04,
      clearcoat: 0.65,
    });
    this.endocrineMaterials.push(pitMat);

    const pitGeo = new THREE.SphereGeometry(0.008, 16, 16);
    pitGeo.scale(1.2, 0.9, 1.0);
    this.pituitaryMesh = new THREE.Mesh(pitGeo, pitMat);
    this.pituitaryMesh.position.set(0, 1.61, -0.012);
    this.pituitaryMesh.userData = {
      systemId: 'endocrine',
      structureId: 'pituitary',
      structureName: 'Hipófisis / Pituitaria (Adenohipófisis y Neurohipófisis)',
      selectable: true,
    };
    this.group.add(this.pituitaryMesh);

    // 3. Glándulas Suprarrenales (Polos superiores de ambos riñones)
    const adrenalMat = new THREE.MeshPhysicalMaterial({
      color: 0xc89f3b, // Amarillo dorado ocre glandular
      roughness: 0.36,
      metalness: 0.04,
      clearcoat: 0.62,
    });
    this.endocrineMaterials.push(adrenalMat);

    const adrenalGeo = new THREE.ConeGeometry(0.018, 0.024, 16);
    adrenalGeo.scale(1.3, 1.0, 0.8);

    // Suprarrenal Izquierda (semilunar)
    const leftAdrenal = new THREE.Mesh(adrenalGeo, adrenalMat);
    leftAdrenal.position.set(-0.045, 1.19, -0.025);
    leftAdrenal.rotation.z = -0.2;
    leftAdrenal.userData = {
      systemId: 'endocrine',
      structureId: 'adrenals',
      structureName: 'Glándula Suprarrenal Izquierda (Corteza: Cortisol/Aldosterona; Médula: Adrenalina)',
      selectable: true,
    };
    this.adrenalsGroup.add(leftAdrenal);

    // Suprarrenal Derecha (piramidal)
    const rightAdrenal = new THREE.Mesh(adrenalGeo, adrenalMat);
    rightAdrenal.position.set(0.045, 1.175, -0.025);
    rightAdrenal.rotation.z = 0.2;
    rightAdrenal.userData = {
      systemId: 'endocrine',
      structureId: 'adrenals',
      structureName: 'Glándula Suprarrenal Derecha (Corteza y Médula Suprarrenal)',
      selectable: true,
    };
    this.adrenalsGroup.add(rightAdrenal);
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  public setHighlight(active: boolean, colorHex: number = 0xa855f7): void {
    this.endocrineMaterials.forEach((mat) => {
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
    this.group.position.set(0, offset * 0.06, offset * 0.1);
  }
}
