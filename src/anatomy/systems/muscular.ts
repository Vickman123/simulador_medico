/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Módulo: Sistema Muscular (Systema musculare)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class MuscularSystem {
  public readonly group: THREE.Group;
  public readonly id = 'muscular';
  public readonly name = 'Sistema Muscular';
  public isLoaded: boolean = false;
  private muscles: THREE.Mesh[] = [];
  private muscleMaterials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'System_Muscular';
  }

  public async load(_loader: GLTFLoader, _onProgress?: (percent: number) => void): Promise<THREE.Group> {
    this.buildAnatomicalMuscles();
    this.isLoaded = true;
    return this.group;
  }

  private buildAnatomicalMuscles(): void {
    const muscleMat = new THREE.MeshStandardMaterial({
      color: 0xbe123c,
      roughness: 0.55,
      metalness: 0.05,
      transparent: true,
      opacity: 0.92,
    });
    this.muscleMaterials.push(muscleMat);

    const tendonMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.35,
    });
    this.muscleMaterials.push(tendonMat);

    // 1. Pectoralis Major (Tórax anterior bilateral)
    const rPec = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.04), muscleMat);
    rPec.position.set(0.08, 1.34, 0.08);
    rPec.rotation.set(0.1, -0.15, -0.1);
    rPec.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Pectoral Mayor Derecho',
      selectable: true,
    };
    this.muscles.push(rPec);
    this.group.add(rPec);

    const lPec = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.04), muscleMat);
    lPec.position.set(-0.08, 1.34, 0.08);
    lPec.rotation.set(0.1, 0.15, 0.1);
    lPec.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Pectoral Mayor Izquierdo',
      selectable: true,
    };
    this.muscles.push(lPec);
    this.group.add(lPec);

    // 2. Deltoids (Hombros)
    const rDelt = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), muscleMat);
    rDelt.scale.set(0.8, 1.4, 0.9);
    rDelt.position.set(0.19, 1.42, 0.01);
    rDelt.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Deltoides Derecho',
      selectable: true,
    };
    this.muscles.push(rDelt);
    this.group.add(rDelt);

    const lDelt = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), muscleMat);
    lDelt.scale.set(0.8, 1.4, 0.9);
    lDelt.position.set(-0.19, 1.42, 0.01);
    lDelt.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Deltoides Izquierdo',
      selectable: true,
    };
    this.muscles.push(lDelt);
    this.group.add(lDelt);

    // 3. Rectus Abdominis (Pared abdominal anterior)
    const abs = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.28, 0.035), muscleMat);
    abs.position.set(0, 1.08, 0.075);
    abs.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculos Rectos del Abdomen y Línea Alba',
      selectable: true,
    };
    this.muscles.push(abs);
    this.group.add(abs);

    // 4. Biceps Brachii (Brazos)
    const rBiceps = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.025, 0.22, 12), muscleMat);
    rBiceps.position.set(0.22, 1.25, 0.02);
    rBiceps.rotation.z = -0.15;
    rBiceps.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Bíceps Braquial Derecho',
      selectable: true,
    };
    this.muscles.push(rBiceps);
    this.group.add(rBiceps);

    const lBiceps = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.025, 0.22, 12), muscleMat);
    lBiceps.position.set(-0.22, 1.25, 0.02);
    lBiceps.rotation.z = 0.15;
    lBiceps.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Bíceps Braquial Izquierdo',
      selectable: true,
    };
    this.muscles.push(lBiceps);
    this.group.add(lBiceps);

    // 5. Quadriceps Femoris (Muslos)
    const rQuad = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.38, 16), muscleMat);
    rQuad.position.set(0.09, 0.68, 0.02);
    rQuad.rotation.z = 0.06;
    rQuad.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Cuádriceps Femoral Derecho',
      selectable: true,
    };
    this.muscles.push(rQuad);
    this.group.add(rQuad);

    const lQuad = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.38, 16), muscleMat);
    lQuad.position.set(-0.09, 0.68, 0.02);
    lQuad.rotation.z = -0.06;
    lQuad.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Cuádriceps Femoral Izquierdo',
      selectable: true,
    };
    this.muscles.push(lQuad);
    this.group.add(lQuad);

    // 6. Gastrocnemius (Pantorrillas)
    const rCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.025, 0.32, 14), muscleMat);
    rCalf.position.set(0.08, 0.28, -0.015);
    rCalf.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Gastrocnemio (Gemelos)',
      selectable: true,
    };
    this.muscles.push(rCalf);
    this.group.add(rCalf);

    const lCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.025, 0.32, 14), muscleMat);
    lCalf.position.set(-0.08, 0.28, -0.015);
    lCalf.userData = {
      systemId: 'muscular',
      structureId: 'muscular',
      structureName: 'Músculo Gastrocnemio (Gemelos)',
      selectable: true,
    };
    this.muscles.push(lCalf);
    this.group.add(lCalf);
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
    this.group.position.set(0, 0, offset * 0.38);
  }
}
