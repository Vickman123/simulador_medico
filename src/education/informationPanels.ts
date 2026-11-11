/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Panel Holográfico Tridimensional Flotante (3D Information Panel)
 * PC PUMA – UNAM
 */

import * as THREE from 'three';
import { AnatomicalStructure, ANATOMICAL_SYSTEMS } from '../anatomy/catalog.js';

export class HolographicInfoPanel {
  public readonly group: THREE.Group;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private texture: THREE.CanvasTexture;
  private panelMesh: THREE.Mesh;
  private frameMesh: THREE.Mesh;
  private currentStructure: AnatomicalStructure | null = null;
  private width: number = 1.0;
  private height: number = 0.65;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'Holographic_Info_Panel';

    // 1. Setup high-resolution 2D Canvas for crisp text in VR
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1024;
    this.canvas.height = 660;
    this.ctx = this.canvas.getContext('2d')!;

    // 2. Three.js texture with anisotropic filtering
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;

    // 3. Screen Mesh
    const screenGeo = new THREE.PlaneGeometry(this.width, this.height);
    const screenMat = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });
    this.panelMesh = new THREE.Mesh(screenGeo, screenMat);
    this.group.add(this.panelMesh);

    // 4. Futuristic glass neon frame
    const frameGeo = new THREE.RingGeometry(0.35, 0.36, 4);
    frameGeo.scale(1.4, 0.92, 1.0);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    this.frameMesh = new THREE.Mesh(frameGeo, frameMat);
    this.frameMesh.position.z = -0.002;
    this.group.add(this.frameMesh);

    // Initial position floating to the right of the anatomical model
    this.group.position.set(0.65, 1.35, 0.35);
    this.group.rotation.y = -Math.PI / 8;
    this.group.visible = false;

    this.renderWelcomeScreen();
  }

  public setStructure(structure: AnatomicalStructure): void {
    this.currentStructure = structure;
    this.renderStructureScreen(structure);
    this.group.visible = true;

    // Position panel adjacent to organ
    if (structure.suggestedLookAt) {
      const y = Math.max(1.1, structure.suggestedLookAt[1]);
      this.group.position.set(0.65, y, 0.35);
    }
  }

  public hide(): void {
    this.group.visible = false;
  }

  public show(): void {
    this.group.visible = true;
  }

  private renderStructureScreen(structure: AnatomicalStructure): void {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const sys = ANATOMICAL_SYSTEMS[structure.systemId];

    // Background: Futuristic translucent dark slate with cyan gradient border
    ctx.clearRect(0, 0, w, h);

    // Dark glass background
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, 'rgba(4, 9, 24, 0.92)');
    bgGrad.addColorStop(1, 'rgba(2, 6, 16, 0.96)');
    ctx.fillStyle = bgGrad;
    ctx.roundRect(10, 10, w - 20, h - 20, 24);
    ctx.fill();

    // Glowing border
    ctx.lineWidth = 4;
    ctx.strokeStyle = sys ? sys.accentColor : '#00f0ff';
    ctx.roundRect(10, 10, w - 20, h - 20, 24);
    ctx.stroke();

    // Header bar
    ctx.fillStyle = 'rgba(0, 240, 255, 0.08)';
    ctx.fillRect(10, 10, w - 20, 90);

    // Institution tag
    ctx.font = '600 20px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('PC PUMA – UNAM | HUMAN XR', 36, 44);

    // System badge
    const badgeText = sys ? `${sys.icon} ${sys.name.toUpperCase()}` : 'ANATOMÍA HUMANA';
    ctx.font = '700 18px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = sys ? sys.accentColor : '#38bdf8';
    ctx.textAlign = 'right';
    ctx.fillText(badgeText, w - 36, 44);
    ctx.textAlign = 'left';

    // Structure Title
    ctx.font = '700 42px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(structure.name, 36, 88);

    // Latin Name
    ctx.font = 'italic 400 24px "Georgia", serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(structure.latinName, 36 + ctx.measureText(structure.name).width + 20, 88);

    // Divider line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(36, 115);
    ctx.lineTo(w - 36, 115);
    ctx.stroke();

    // Description
    ctx.font = '400 22px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#e2e8f0';
    this.wrapText(ctx, structure.description, 36, 150, w - 72, 30);

    // Section: Función Fisiológica
    let currentY = 225;
    ctx.font = '700 22px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('⚡ FUNCIÓN FISIOLÓGICA', 36, currentY);

    ctx.font = '400 20px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    currentY += 28;
    currentY = this.wrapText(ctx, structure.function, 36, currentY, w - 72, 28);

    // Section: Ubicación Anatómica
    currentY += 15;
    ctx.font = '700 22px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#10b981';
    ctx.fillText('📍 LOCALIZACIÓN TOPOGRÁFICA', 36, currentY);

    ctx.font = '400 20px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    currentY += 28;
    currentY = this.wrapText(ctx, structure.location, 36, currentY, w - 72, 28);

    // Section: Perlas Clínicas UNAM
    if (structure.clinicalPearls && structure.clinicalPearls.length > 0) {
      currentY += 15;
      ctx.font = '700 22px "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('🩺 CORRELACIÓN CLÍNICA ACADÉMICA', 36, currentY);

      ctx.font = '400 19px "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#e2e8f0';
      currentY += 26;
      structure.clinicalPearls.slice(0, 2).forEach((pearl) => {
        currentY = this.wrapText(ctx, `• ${pearl}`, 42, currentY, w - 84, 26);
        currentY += 6;
      });
    }

    this.texture.needsUpdate = true;
  }

  private renderWelcomeScreen(): void {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(4, 9, 24, 0.94)';
    ctx.roundRect(10, 10, w - 20, h - 20, 24);
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#00f0ff';
    ctx.roundRect(10, 10, w - 20, h - 20, 24);
    ctx.stroke();

    ctx.font = '700 38px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('HUMAN XR', w / 2, 80);

    ctx.font = '600 22px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('Laboratorio de Anatomía Humana Inmersiva', w / 2, 120);

    ctx.font = '400 20px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#d97706';
    ctx.fillText('PC PUMA – Universidad Nacional Autónoma de México', w / 2, 155);

    ctx.font = '400 20px "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Apunta con el controlador de Meta Quest o haz clic', w / 2, 220);
    ctx.fillText('sobre cualquier órgano para abrir su ficha médica.', w / 2, 255);

    ctx.textAlign = 'left';
    this.texture.needsUpdate = true;
  }

  private wrapText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ): number {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
    return currentY + lineHeight;
  }

  public update(camera: THREE.Camera): void {
    // Subtle face camera orientation in VR
    if (this.group.visible) {
      this.group.lookAt(camera.position.x, this.group.position.y, camera.position.z);
    }
  }
}
