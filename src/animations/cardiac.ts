/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Simulación Fisiológica: Ciclo Cardíaco (Cardiac Cycle)
 * Vickora Labs
 */

import { CirculatorySystem } from '../anatomy/systems/circulatory.js';

export class CardiacAnimation {
  private circulatory: CirculatorySystem;
  public isEnabled: boolean = true;
  private bpm: number = 72;
  private timeAccumulator: number = 0;
  private audioCallback?: () => void;
  private hasTriggeredSystole: boolean = false;

  constructor(circulatory: CirculatorySystem, onBeatSound?: () => void) {
    this.circulatory = circulatory;
    this.audioCallback = onBeatSound;
  }

  public update(delta: number): void {
    if (!this.isEnabled) return;

    const cycleDuration = 60 / this.bpm; // ~0.833 seconds per beat
    this.timeAccumulator = (this.timeAccumulator + delta) % cycleDuration;
    const progress = this.timeAccumulator / cycleDuration;

    // Cardiac cycle physiology:
    // 0.0 - 0.15: Ventricular Isovolumetric contraction & Ejection (Systole)
    // 0.15 - 0.83: Ventricular Relaxation & Filling (Diastole)
    let scale = 1.0;

    if (progress < 0.15) {
      // Rapid systolic contraction
      const p = progress / 0.15;
      scale = 1.0 - Math.sin(p * Math.PI) * 0.12;

      if (!this.hasTriggeredSystole) {
        this.hasTriggeredSystole = true;
        if (this.audioCallback) this.audioCallback();
      }
    } else if (progress < 0.35) {
      // Secondary atrial rebound
      const p = (progress - 0.15) / 0.2;
      scale = 1.0 + Math.sin(p * Math.PI) * 0.04;
      this.hasTriggeredSystole = false;
    } else {
      // Diastolic rest
      scale = 1.0;
      this.hasTriggeredSystole = false;
    }

    this.circulatory.pulse(scale);
  }

  public setBPM(bpm: number): void {
    this.bpm = Math.max(40, Math.min(180, bpm));
  }

  public getBPM(): number {
    return this.bpm;
  }
}
