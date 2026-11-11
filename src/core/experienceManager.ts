/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Experience Manager (Master Controller)
 * Vickora Labs
 */

import * as THREE from 'three';
import { XRApp } from './vxr/XRApp.js';
import { SceneManager } from './sceneManager.js';
import { CameraManager, CameraPreset } from './cameraManager.js';
import { HumanBody } from '../anatomy/humanBody.js';
import { ANATOMICAL_STRUCTURES, AnatomicalStructure } from '../anatomy/catalog.js';

// Physiological Animations
import { CardiacAnimation } from '../animations/cardiac.js';
import { CirculationAnimation } from '../animations/circulation.js';
import { RespiratoryAnimation } from '../animations/respiratory.js';
import { DigestiveAnimation } from '../animations/digestive.js';
import { NervousAnimation } from '../animations/nervous.js';

// XR & Interaction
import { HolographicInfoPanel } from '../education/informationPanels.js';
import { ControllerManager } from '../xr/controllerManager.js';
import { UnifiedRaycaster } from '../xr/raycasting.js';
import { XRSessionManager } from '../xr/xrSession.js';

// 2D Interface Overlays
import { SystemSelectorUI } from '../interface/systemSelector.js';
import { InformationPanelUI } from '../interface/informationPanel.js';
import { ControlsUI } from '../interface/controls.js';
import { WelcomeModalUI } from '../interface/welcome.js';
import { QuizModalUI } from '../interface/quizModal.js';

export class ExperienceManager {
  public readonly app: XRApp;
  public readonly sceneMgr: SceneManager;
  public readonly cameraMgr: CameraManager;
  public readonly humanBody: HumanBody;
  public readonly sessionMgr: XRSessionManager;

  // Animations
  public readonly cardiacAnim: CardiacAnimation;
  public readonly circulationAnim: CirculationAnimation;
  public readonly respiratoryAnim: RespiratoryAnimation;
  public readonly digestiveAnim: DigestiveAnimation;
  public readonly nervousAnim: NervousAnimation;

  // XR & 3D UI
  public readonly holographicPanel3D: HolographicInfoPanel;
  public readonly controllers: ControllerManager;
  public readonly raycaster: UnifiedRaycaster;

  // 2D UI Overlays
  public readonly systemSelectorUI: SystemSelectorUI;
  public readonly infoPanelUI: InformationPanelUI;
  public readonly controlsUI: ControlsUI;
  public readonly welcomeModalUI: WelcomeModalUI;
  public readonly quizModalUI: QuizModalUI;

  private isPhysiologyActive: boolean = true;
  private floatingSoloHud: HTMLElement | null = null;

  constructor(container: HTMLElement) {
    // 1. Initialize VXR Core Application
    this.app = new XRApp({
      container,
      enableShadows: true,
      enableGrid: false, // We use custom futuristic laboratory grid
      backgroundColor: 0x030712,
      cameraPosition: [0, 1.35, 2.2],
      autoVRButton: false, // We provide custom styled VR button in header
      runtime: 'webxr',
      questOptimization: true,
      targetFrameRate: 72,
    });

    // 2. Setup Subsystems
    this.sceneMgr = new SceneManager(this.app);
    this.cameraMgr = new CameraManager(this.app);
    this.humanBody = new HumanBody();
    this.app.scene.nativeScene.add(this.humanBody.group);

    // 3. Setup Physiological Animations (Ancladas a sus respectivos sistemas anatómicos)
    this.cardiacAnim = new CardiacAnimation(this.humanBody.circulatory, () => {
      this.playHeartbeatSound();
    });
    this.circulationAnim = new CirculationAnimation();
    this.humanBody.circulatory.group.add(this.circulationAnim.group);

    this.respiratoryAnim = new RespiratoryAnimation(this.humanBody.respiratory);
    this.humanBody.respiratory.group.add(this.respiratoryAnim.group);

    this.digestiveAnim = new DigestiveAnimation();
    this.humanBody.digestive.group.add(this.digestiveAnim.group);

    this.nervousAnim = new NervousAnimation();
    this.humanBody.nervous.group.add(this.nervousAnim.group);

    // 4. Setup 3D Floating Holographic Panel
    this.holographicPanel3D = new HolographicInfoPanel();
    this.app.scene.nativeScene.add(this.holographicPanel3D.group);

    // 5. Setup WebXR Controllers & Raycasting
    this.controllers = new ControllerManager(this.app);
    this.app.scene.nativeScene.add(this.controllers.group);

    this.sessionMgr = new XRSessionManager(this.app);

    this.raycaster = new UnifiedRaycaster(this.app, this.controllers, {
      onHover: (structureId, meshName) => {
        // Can trigger subtle sound or status update
      },
      onSelect: (structureId, meshName, hitPoint) => {
        this.selectStructure(structureId);
      },
    });

    // 6. Setup 2D UI Components
    this.systemSelectorUI = new SystemSelectorUI(this.humanBody, {
      onSelectOrgan: (structureId) => {
        this.selectStructure(structureId);
      },
    });

    this.infoPanelUI = new InformationPanelUI({
      onIsolate: (structureId) => {
        this.enterSoloMode(structureId);
      },
      onResetIsolation: () => {
        this.exitSoloMode();
      },
      onClose: () => {
        this.holographicPanel3D.hide();
        this.humanBody.restoreMuscularAndSkeletalOpacity();
        this.cameraMgr.reset();
      },
    });

    this.controlsUI = new ControlsUI({
      onToggleExploded: () => {
        const isExploded = this.humanBody.toggleExplodedView();
        this.playUiClickSound();
        return isExploded;
      },
      onToggleSkin: () => {
        const isSkin = this.humanBody.toggleSkin();
        this.playUiClickSound();
        return isSkin;
      },
      onToggleVisceral: () => {
        const isVisceral = this.humanBody.toggleVisceralView();
        (Object.keys(ANATOMICAL_SYSTEMS) as AnatomicalSystemId[]).forEach((id) => {
          this.systemSelectorUI.updateSystemState(id, this.humanBody.isSystemVisible(id));
        });
        this.playUiClickSound();
        return isVisceral;
      },
      onTogglePhysiology: () => {
        this.isPhysiologyActive = !this.isPhysiologyActive;
        this.cardiacAnim.isEnabled = this.isPhysiologyActive;
        this.circulationAnim.isEnabled = this.isPhysiologyActive;
        this.circulationAnim.group.visible = this.isPhysiologyActive;
        this.respiratoryAnim.isEnabled = this.isPhysiologyActive;
        this.respiratoryAnim.group.visible = this.isPhysiologyActive;
        this.digestiveAnim.isEnabled = this.isPhysiologyActive;
        this.digestiveAnim.group.visible = this.isPhysiologyActive;
        this.nervousAnim.isEnabled = this.isPhysiologyActive;
        this.nervousAnim.group.visible = this.isPhysiologyActive;
        this.playUiClickSound();
        return this.isPhysiologyActive;
      },
      onOpenQuiz: () => {
        this.quizModalUI.open();
        this.playUiClickSound();
      },
      onResetView: () => {
        this.exitSoloMode();
      },
      onCameraPreset: (preset: CameraPreset) => {
        this.cameraMgr.setPreset(preset);
        this.playUiClickSound();
      },
    });

    this.welcomeModalUI = new WelcomeModalUI({
      onStart: () => {
        this.playUiClickSound();
      },
    });

    this.quizModalUI = new QuizModalUI({
      onFocusStructure: (structureId) => {
        this.selectStructure(structureId, false);
      },
      onSoundCorrect: () => {
        this.playCorrectSound();
      },
      onSoundIncorrect: () => {
        this.playIncorrectSound();
      },
      onClose: () => {
        this.humanBody.resetIsolation();
        this.cameraMgr.reset();
      },
    });

    // 7. Mount UI to DOM
    this.mountInterface(container);

    // 8. Register Animation Loop
    this.app.onUpdate((delta, elapsed) => {
      this.update(delta, elapsed);
    });

    // 9. Start Rendering Loop
    this.app.start();
  }

  private mountInterface(root: HTMLElement): void {
    // Header Bar
    const header = document.createElement('div');
    header.className = 'header-bar';
    header.innerHTML = `
      <div class="brand-section">
        <span class="unam-logo-badge">VICKORA LABS</span>
        <div>
          <div class="brand-title">HUMAN <span>XR</span></div>
          <div class="brand-subtitle">Laboratorio de Anatomía Humana Inmersiva</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn-header" id="btn-header-guide">ℹ️ Guía</button>
        <button class="btn-header btn-vr-mode" id="btn-enter-vr">🥽 Entrar en VR</button>
      </div>
    `;
    root.appendChild(header);

    header.querySelector('#btn-header-guide')?.addEventListener('click', () => {
      this.welcomeModalUI.open();
    });

    const vrBtn = header.querySelector('#btn-enter-vr') as HTMLElement;
    vrBtn.addEventListener('click', async () => {
      if (!navigator.xr) {
        alert('WebXR no está disponible en este navegador. Para la experiencia completa en Meta Quest 3/3S, abre esta página desde Meta Quest Browser.');
        return;
      }
      try {
        await this.app.session.enterVR();
      } catch (err) {
        console.error('[HUMAN XR] Error al iniciar sesión WebXR:', err);
      }
    });

    // Append interface components
    root.appendChild(this.systemSelectorUI.getElement());
    root.appendChild(this.infoPanelUI.getElement());
    root.appendChild(this.controlsUI.getElement());
    root.appendChild(this.quizModalUI.getElement());
    root.appendChild(this.welcomeModalUI.getElement());

    // Floating Solo Mode Return HUD
    this.floatingSoloHud = document.createElement('div');
    this.floatingSoloHud.className = 'floating-solo-hud hidden';
    this.floatingSoloHud.innerHTML = `
      <div class="solo-hud-box">
        <span class="solo-hud-pulse"></span>
        <div class="solo-hud-texts">
          <span class="solo-hud-label">MODO INSPECCIÓN EN SOLITARIO:</span>
          <span class="solo-hud-title" id="solo-hud-organ-name">Órgano</span>
        </div>
        <button class="btn-exit-solo" id="btn-floating-exit-solo" title="Regresar al modelo corporal completo">
          ⬅️ Volver al Cuerpo Completo
        </button>
      </div>
    `;
    root.appendChild(this.floatingSoloHud);

    this.floatingSoloHud.querySelector('#btn-floating-exit-solo')?.addEventListener('click', () => {
      this.exitSoloMode();
    });
  }

  public enterSoloMode(structureId: string): void {
    const structure = ANATOMICAL_STRUCTURES[structureId];
    if (!structure) return;

    this.humanBody.isolateStructure(structureId);
    this.infoPanelUI.setIsolateState(true);

    if (this.floatingSoloHud) {
      const nameEl = this.floatingSoloHud.querySelector('#solo-hud-organ-name');
      if (nameEl) nameEl.textContent = structure.name;
      this.floatingSoloHud.classList.remove('hidden');
    }

    this.focusOnStructure(structureId);
    this.playSelectSound();
  }

  public exitSoloMode(): void {
    this.humanBody.resetIsolation();
    this.humanBody.restoreMuscularAndSkeletalOpacity();
    this.infoPanelUI.setIsolateState(false);
    if (this.floatingSoloHud) {
      this.floatingSoloHud.classList.add('hidden');
    }
    this.cameraMgr.reset();
    this.playUiClickSound();

    // Sincronizar dock de sistemas con visibilidad restaurada
    (Object.keys(ANATOMICAL_SYSTEMS) as AnatomicalSystemId[]).forEach((id) => {
      this.systemSelectorUI.updateSystemState(id, this.humanBody.isSystemVisible(id));
    });
  }

  public async loadAnatomicalModels(onProgress?: (name: string, p: number) => void): Promise<void> {
    await this.humanBody.loadAll(onProgress);
  }

  public selectStructure(structureId: string, openInspector: boolean = true): void {
    const structure = ANATOMICAL_STRUCTURES[structureId];
    if (!structure) return;

    this.playSelectSound();

    // 1. Update 3D Holographic Info Panel (SOLO EN VR para Meta Quest para evitar duplicar mensajes en PC)
    if (this.app.session.isPresenting) {
      this.holographicPanel3D.setStructure(structure);
    } else {
      this.holographicPanel3D.hide();
    }

    // 2. Update 2D Inspector Panel (Para Desktop / PC)
    if (openInspector) {
      this.infoPanelUI.showStructure(structure);
    }

    // 3. Auto-revelar el órgano interno si está cubierto por músculos o esqueleto
    this.humanBody.revealInternalOrgan(structureId);

    // 4. Camera Framing calibrado para no cortar la cabeza ni ser tapado por el panel
    if (structure.suggestedCameraOffset && structure.suggestedLookAt) {
      this.cameraMgr.focusOnPoint(structure.suggestedCameraOffset, structure.suggestedLookAt);
    }

    // 5. Highlight in Organ List
    this.systemSelectorUI.highlightOrgan(structureId);
  }

  public focusOnStructure(structureId: string): void {
    const structure = ANATOMICAL_STRUCTURES[structureId];
    if (structure && structure.suggestedCameraOffset && structure.suggestedLookAt) {
      this.cameraMgr.focusOnPoint(structure.suggestedCameraOffset, structure.suggestedLookAt);
    }
  }

  private update(delta: number, elapsed: number): void {
    // 1. Update master human model
    this.humanBody.update(delta, elapsed);

    // 2. Update physiological animations (solo cuando el sistema correspondiente está activo y visible)
    if (this.isPhysiologyActive) {
      if (this.humanBody.isSystemVisible('circulatory')) {
        this.cardiacAnim.update(delta);
        this.circulationAnim.update(delta);
      }
      if (this.humanBody.isSystemVisible('respiratory')) {
        this.respiratoryAnim.update(delta);
      }
      if (this.humanBody.isSystemVisible('digestive')) {
        this.digestiveAnim.update(delta);
      }
      if (this.humanBody.isSystemVisible('nervous')) {
        this.nervousAnim.update(delta);
      }
    }

    // 3. Update raycasting and controller laser reticles
    const selectableTargets = this.humanBody.getSelectableMeshes();
    this.raycaster.update(selectableTargets);

    // 4. Update 3D Floating Panel to orient toward camera in VR
    this.holographicPanel3D.update(this.app.camera);

    // 5. Update scene particles
    this.sceneMgr.update(delta);

    // 6. Update camera transition
    this.cameraMgr.update(delta);
  }

  // ==========================================
  // Procedural Web Audio Sound Effects
  // Zero external audio files required!
  // ==========================================
  private playHeartbeatSound(): void {
    try {
      const audioCtx = this.app.audio.context;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(65, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(32, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch {
      // AudioContext suspended or not supported
    }
  }

  private playUiClickSound(): void {
    try {
      const audioCtx = this.app.audio.context;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.07);
    } catch {
      // Ignored
    }
  }

  private playSelectSound(): void {
    try {
      const audioCtx = this.app.audio.context;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1040, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.11);
    } catch {
      // Ignored
    }
  }

  private playCorrectSound(): void {
    try {
      const audioCtx = this.app.audio.context;
      const now = audioCtx.currentTime;

      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc1.stop(now + 0.15);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.35);
    } catch {
      // Ignored
    }
  }

  private playIncorrectSound(): void {
    try {
      const audioCtx = this.app.audio.context;
      const now = audioCtx.currentTime;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(196, now); // G3
      osc.frequency.exponentialRampToValueAtTime(130.81, now + 0.2); // C3

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Ignored
    }
  }
}
