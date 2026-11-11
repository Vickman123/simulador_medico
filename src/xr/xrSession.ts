/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Gestión de Sesión WebXR y Optimizaciones Meta Quest 3 / 3S
 * PC PUMA – UNAM
 */

import { XRApp } from '../core/vxr/XRApp.js';
import { detectQuestCapabilities, negotiateFrameRate, QuestRuntimeCapabilities } from '../core/vxr/runtime/questDetection.js';

export class XRSessionManager {
  private app: XRApp;
  public capabilities: QuestRuntimeCapabilities | null = null;
  private onSessionChangeCallbacks: Array<(isInVR: boolean) => void> = [];

  constructor(app: XRApp) {
    this.app = app;
    this.initCapabilities();
    this.setupSessionListeners();
  }

  private async initCapabilities(): Promise<void> {
    try {
      this.capabilities = await detectQuestCapabilities();
      console.log('[XRSessionManager] Meta Quest / WebXR capabilities:', this.capabilities);
    } catch (e) {
      console.warn('[XRSessionManager] Capability detection warning:', e);
    }
  }

  private setupSessionListeners(): void {
    this.app.session.onStateChange(async (isVR, activeSession) => {
      console.log(`[XRSessionManager] Session state changed: ${isVR ? 'ENTER VR' : 'EXIT VR'}`);

      if (isVR) {
        const session = activeSession || this.app.session.currentSession;
        if (session) {
          // 1. Optimize target frame rate for Meta Quest (72Hz / 90Hz)
          try {
            await negotiateFrameRate(session, 72);
          } catch (err) {
            console.log('[XRSessionManager] Target frame rate negotiation skipped:', err);
          }

          // 2. Enable fixed foveation on Quest WebGL layer if available
          try {
            const glLayer = (session.renderState as any).baseLayer;
            if (glLayer && 'fixedFoveation' in glLayer) {
              glLayer.fixedFoveation = 1.0; // Maximum peripheral pixel optimization for stable FPS
            }
          } catch (e) {
            // Not supported in desktop emulator
          }
        }
      }

      this.onSessionChangeCallbacks.forEach((cb) => cb(isVR));
    });
  }

  public onSessionChange(callback: (isInVR: boolean) => void): () => void {
    this.onSessionChangeCallbacks.push(callback);
    return () => {
      this.onSessionChangeCallbacks = this.onSessionChangeCallbacks.filter((cb) => cb !== callback);
    };
  }

  public get isInVR(): boolean {
    return this.app.session.isPresenting;
  }
}
