/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Orquestador Central del Cuerpo Humano (Human Body Master Model)
 * Integra los 8 sistemas anatómicos y silueta humana de cristal traslúcida
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SkeletalSystem } from './systems/skeletal.js';
import { MuscularSystem } from './systems/muscular.js';
import { CirculatorySystem } from './systems/circulatory.js';
import { NervousSystem } from './systems/nervous.js';
import { DigestiveSystem } from './systems/digestive.js';
import { RespiratorySystem } from './systems/respiratory.js';
import { UrinarySystem } from './systems/urinary.js';
import { EndocrineSystem } from './systems/endocrine.js';
import { AnatomicalSystemId, ANATOMICAL_SYSTEMS } from './catalog.js';
import { resolveModelUrl } from '../core/assetHelper.js';

export class HumanBody {
  public readonly group: THREE.Group;
  public readonly pedestalGroup: THREE.Group;

  public readonly skeletal: SkeletalSystem;
  public readonly muscular: MuscularSystem;
  public readonly circulatory: CirculatorySystem;
  public readonly nervous: NervousSystem;
  public readonly digestive: DigestiveSystem;
  public readonly respiratory: RespiratorySystem;
  public readonly urinary: UrinarySystem;
  public readonly endocrine: EndocrineSystem;

  public skinGroup: THREE.Group | null = null;
  private isSkinVisible: boolean = false;
  private skinMaterial: THREE.MeshPhysicalMaterial | null = null;

  private loader: GLTFLoader;
  private systemStates: Record<AnatomicalSystemId, boolean> = {
    skeletal: true,
    muscular: true,
    circulatory: true,
    nervous: true,
    digestive: true,
    respiratory: true,
    urinary: true,
    endocrine: true,
  };

  private isExploded: boolean = false;
  private explodeFactor: number = 0;
  private targetExplodeFactor: number = 0;

  private isolatedStructureId: string | null = null;
  private pedestalRing: THREE.Mesh | null = null;
  private haloLight: THREE.PointLight | null = null;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HumanBody_Master';
    this.pedestalGroup = new THREE.Group();
    this.pedestalGroup.name = 'Futuristic_Pedestal';
    this.group.add(this.pedestalGroup);

    this.loader = new GLTFLoader();

    // Instanciar los 8 sistemas anatómicos
    this.skeletal = new SkeletalSystem();
    this.muscular = new MuscularSystem();
    this.circulatory = new CirculatorySystem();
    this.nervous = new NervousSystem();
    this.digestive = new DigestiveSystem();
    this.respiratory = new RespiratorySystem();
    this.urinary = new UrinarySystem();
    this.endocrine = new EndocrineSystem();

    this.group.add(this.skeletal.group);
    this.group.add(this.muscular.group);
    this.group.add(this.circulatory.group);
    this.group.add(this.nervous.group);
    this.group.add(this.digestive.group);
    this.group.add(this.respiratory.group);
    this.group.add(this.urinary.group);
    this.group.add(this.endocrine.group);

    this.buildLaboratoryPedestal();
  }

  private buildLaboratoryPedestal(): void {
    // 1. Podio circular metálico futurista
    const platformGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.08, 48);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x081120,
      metalness: 0.85,
      roughness: 0.25,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.04;
    platform.receiveShadow = true;
    this.pedestalGroup.add(platform);

    // 2. Anillo de energía holográfico cian
    const ringGeo = new THREE.RingGeometry(0.72, 0.77, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    this.pedestalRing = new THREE.Mesh(ringGeo, ringMat);
    this.pedestalRing.rotation.x = -Math.PI / 2;
    this.pedestalRing.position.y = 0.003;
    this.pedestalGroup.add(this.pedestalRing);

    // 3. Anillo dorado conmemorativo UNAM
    const goldRingGeo = new THREE.RingGeometry(0.64, 0.66, 48);
    const goldRingMat = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const goldRing = new THREE.Mesh(goldRingGeo, goldRingMat);
    goldRing.rotation.x = -Math.PI / 2;
    goldRing.position.y = 0.004;
    this.pedestalGroup.add(goldRing);

    // 4. Luz de proyección vertical
    this.haloLight = new THREE.PointLight(0x00f0ff, 1.2, 3.5);
    this.haloLight.position.set(0, 0.1, 0);
    this.pedestalGroup.add(this.haloLight);
  }

  public async loadAll(onProgress?: (systemName: string, progress: number) => void): Promise<void> {
    const systemsToLoad = [
      { sys: this.skeletal, name: 'Sistema Óseo' },
      { sys: this.muscular, name: 'Sistema Muscular' },
      { sys: this.circulatory, name: 'Sistema Circulatorio' },
      { sys: this.nervous, name: 'Sistema Nervioso' },
      { sys: this.digestive, name: 'Sistema Digestivo' },
      { sys: this.respiratory, name: 'Sistema Respiratorio' },
      { sys: this.urinary, name: 'Sistema Urinario' },
      { sys: this.endocrine, name: 'Sistema Endocrino' },
    ];

    let completed = 0;
    const totalSteps = systemsToLoad.length + 1; // +1 por la silueta de cristal

    for (const item of systemsToLoad) {
      if (onProgress) onProgress(item.name, completed / totalSteps);
      try {
        await item.sys.load(this.loader);
      } catch (err) {
        console.warn(`[HumanBody] Error cargando ${item.name}:`, err);
      }
      completed++;
      if (onProgress) onProgress(item.name, completed / totalSteps);
    }

    // Cargar silueta humana de piel holográfica / cristal
    try {
      if (onProgress) onProgress('Silueta Holográfica Corporal', completed / totalSteps);
      await this.loadSkinSilhouette();
    } catch (err) {
      console.warn('[HumanBody] No se pudo cargar la silueta de piel:', err);
    }
  }

  /**
   * Carga la silueta corporal de cristal / holograma médico (skin.glb)
   */
  private async loadSkinSilhouette(): Promise<void> {
    return new Promise((resolve) => {
      this.loader.load(
        resolveModelUrl('models/skin.glb'),
        (gltf) => {
          this.skinGroup = gltf.scene;
          this.skinGroup.name = 'Holographic_Skin_Silhouette';

          // Shader PBR de vidrio/holograma biomédico traslúcido
          this.skinMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x38bdf8, // Azul cian holográfico
            roughness: 0.22,
            metalness: 0.05,
            transmission: 0.7,
            transparent: true,
            opacity: 0.14,
            depthWrite: false, // Permite ver los órganos y huesos internos con nitidez
            side: THREE.DoubleSide,
          });

          this.skinGroup.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.material = this.skinMaterial!;
              mesh.userData = {
                systemId: null,
                structureId: 'skin',
                structureName: 'Silueta Humana (Piel Translúcida de Cristal)',
                selectable: false,
              };
            }
          });

          // Escala: 1.75 / 1.8295 = 0.95655
          const scale = 1.75 / 1.8295;
          this.skinGroup.scale.setScalar(scale);
          this.skinGroup.position.set(0, 0.875, 0);

          // Inicialmente oculta o visible según configuración
          this.skinGroup.visible = this.isSkinVisible;

          this.group.add(this.skinGroup);
          console.log('[HumanBody] Silueta corporal de piel holográfica cargada correctamente.');
          resolve();
        },
        undefined,
        (err) => {
          console.warn('[HumanBody] Error al cargar skin.glb:', err);
          resolve();
        }
      );
    });
  }

  public toggleSkin(): boolean {
    this.isSkinVisible = !this.isSkinVisible;
    if (this.skinGroup) {
      this.skinGroup.visible = this.isSkinVisible;
    }
    return this.isSkinVisible;
  }

  public setSkinVisible(visible: boolean): void {
    this.isSkinVisible = visible;
    if (this.skinGroup) {
      this.skinGroup.visible = visible;
    }
  }

  public isSkinSilhouetteVisible(): boolean {
    return this.isSkinVisible;
  }

  public setSystemVisibility(systemId: AnatomicalSystemId, visible: boolean): void {
    this.systemStates[systemId] = visible;
    switch (systemId) {
      case 'skeletal':
        this.skeletal.setVisible(visible);
        break;
      case 'muscular':
        this.muscular.setVisible(visible);
        break;
      case 'circulatory':
        this.circulatory.setVisible(visible);
        break;
      case 'nervous':
        this.nervous.setVisible(visible);
        break;
      case 'digestive':
        this.digestive.setVisible(visible);
        break;
      case 'respiratory':
        this.respiratory.setVisible(visible);
        break;
      case 'urinary':
        this.urinary.setVisible(visible);
        break;
      case 'endocrine':
        this.endocrine.setVisible(visible);
        break;
    }
  }

  public toggleSystem(systemId: AnatomicalSystemId): boolean {
    const nextState = !this.systemStates[systemId];
    this.setSystemVisibility(systemId, nextState);
    return nextState;
  }

  public isSystemVisible(systemId: AnatomicalSystemId): boolean {
    return this.systemStates[systemId];
  }

  public showAllSystems(): void {
    (Object.keys(this.systemStates) as AnatomicalSystemId[]).forEach((id) => {
      this.setSystemVisibility(id, true);
    });
  }

  public showOnlySystem(targetSystemId: AnatomicalSystemId): void {
    (Object.keys(this.systemStates) as AnatomicalSystemId[]).forEach((id) => {
      this.setSystemVisibility(id, id === targetSystemId);
    });
  }

  public toggleExplodedView(): boolean {
    this.isExploded = !this.isExploded;
    this.targetExplodeFactor = this.isExploded ? 1.0 : 0.0;
    return this.isExploded;
  }

  public getIsExploded(): boolean {
    return this.isExploded;
  }

  public isolateStructure(structureId: string): void {
    this.isolatedStructureId = structureId;

    // Atenuar el resto de estructuras
    this.group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && child.userData && child.userData.structureId) {
        const mesh = child as THREE.Mesh;
        const isTarget = mesh.userData.structureId === structureId;
        const mat = mesh.material as THREE.MeshStandardMaterial;

        if (isTarget) {
          mat.opacity = 1.0;
          mat.transparent = false;
          mat.emissive = new THREE.Color(0x00f0ff);
          mat.emissiveIntensity = 0.45;
        } else {
          mat.transparent = true;
          mat.opacity = 0.12;
          mat.emissiveIntensity = 0;
        }
      }
    });
  }

  public resetIsolation(): void {
    this.isolatedStructureId = null;

    this.group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && child.userData && child.userData.systemId) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.transparent = false;
        mat.opacity = 1.0;
        mat.emissiveIntensity = 0;
      }
    });

    (Object.keys(this.systemStates) as AnatomicalSystemId[]).forEach((id) => {
      this.setSystemVisibility(id, this.systemStates[id]);
    });
  }

  public getIsolatedStructureId(): string | null {
    return this.isolatedStructureId;
  }

  public getSelectableMeshes(): THREE.Object3D[] {
    const list: THREE.Object3D[] = [];
    this.group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && child.userData && child.userData.selectable) {
        const sysId = child.userData.systemId as AnatomicalSystemId;
        if (!sysId || this.systemStates[sysId]) {
          list.push(child);
        }
      }
    });
    return list;
  }

  public update(delta: number, elapsed: number): void {
    // 1. Suave interpolación de capas en vista estallada
    if (Math.abs(this.explodeFactor - this.targetExplodeFactor) > 0.001) {
      this.explodeFactor += (this.targetExplodeFactor - this.explodeFactor) * (delta * 6.0);
      this.skeletal.setExploded(this.explodeFactor);
      this.muscular.setExploded(this.explodeFactor);
      this.circulatory.setExploded(this.explodeFactor);
      this.nervous.setExploded(this.explodeFactor);
      this.digestive.setExploded(this.explodeFactor);
      this.respiratory.setExploded(this.explodeFactor);
      this.urinary.setExploded(this.explodeFactor);
      this.endocrine.setExploded(this.explodeFactor);
    }

    // 2. Rotación del anillo podio futurista
    if (this.pedestalRing) {
      this.pedestalRing.rotation.z = elapsed * 0.15;
    }
  }
}
