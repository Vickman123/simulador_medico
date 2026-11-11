/**
 * HUMAN XR – Laboratorio de Anatomía Humana
 * Modal Interactivo de Evaluación Médica
 * Vickora Labs
 */

import { ANATOMICAL_QUIZ_QUESTIONS, QuizQuestion } from '../education/quizzes.js';

export interface QuizModalCallbacks {
  onFocusStructure?: (structureId: string) => void;
  onSoundCorrect?: () => void;
  onSoundIncorrect?: () => void;
  onClose?: () => void;
}

export class QuizModalUI {
  private overlay: HTMLElement;
  private card: HTMLElement;
  private callbacks: QuizModalCallbacks;
  private currentIndex: number = 0;
  private score: number = 0;
  private hasAnsweredCurrent: boolean = false;

  constructor(callbacks: QuizModalCallbacks = {}) {
    this.callbacks = callbacks;
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay hidden';

    this.card = document.createElement('div');
    this.card.className = 'modal-card';
    this.overlay.appendChild(this.card);

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });
  }

  public getElement(): HTMLElement {
    return this.overlay;
  }

  public open(): void {
    this.currentIndex = 0;
    this.score = 0;
    this.hasAnsweredCurrent = false;
    this.overlay.classList.remove('hidden');
    this.renderQuestion();
  }

  public close(): void {
    this.overlay.classList.add('hidden');
    if (this.callbacks.onClose) this.callbacks.onClose();
  }

  private renderQuestion(): void {
    const q: QuizQuestion = ANATOMICAL_QUIZ_QUESTIONS[this.currentIndex];
    this.hasAnsweredCurrent = false;

    // Focus 3D camera / highlight on the question's target organ!
    if (q.targetStructureId && this.callbacks.onFocusStructure) {
      this.callbacks.onFocusStructure(q.targetStructureId);
    }

    const progressPercent = ((this.currentIndex + 1) / ANATOMICAL_QUIZ_QUESTIONS.length) * 100;

    this.card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="modal-badge">EVALUACIÓN MÉDICA | PREGUNTA ${this.currentIndex + 1} DE ${ANATOMICAL_QUIZ_QUESTIONS.length}</span>
        <button id="btn-close-quiz" style="background:none; border:none; color:#94a3b8; font-size:18px; cursor:pointer;">✕</button>
      </div>

      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="modal-title" style="font-size: 20px; line-height: 1.4;">
        ${q.question}
      </div>

      <div class="quiz-options-list" id="quiz-options-container"></div>

      <div id="quiz-feedback-container" style="display: none;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <span style="font-size: 13px; color: #94a3b8;">Aciertos: <strong style="color: #00f0ff;">${this.score}</strong> / ${ANATOMICAL_QUIZ_QUESTIONS.length}</span>
        <button class="btn-primary-action" id="btn-next-question" style="display: none; width: auto; padding: 10px 20px; font-size: 14px;">
          ${this.currentIndex < ANATOMICAL_QUIZ_QUESTIONS.length - 1 ? 'Siguiente Pregunta ➔' : 'Ver Calificación Final ➔'}
        </button>
      </div>
    `;

    this.card.querySelector('#btn-close-quiz')?.addEventListener('click', () => this.close());

    const optionsContainer = this.card.querySelector('#quiz-options-container')!;
    const feedbackBox = this.card.querySelector('#quiz-feedback-container') as HTMLElement;
    const nextBtn = this.card.querySelector('#btn-next-question') as HTMLElement;

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = `${String.fromCharCode(65 + idx)}) ${optText}`;

      btn.addEventListener('click', () => {
        if (this.hasAnsweredCurrent) return;
        this.hasAnsweredCurrent = true;

        const isCorrect = idx === q.correctIndex;
        if (isCorrect) {
          this.score++;
          btn.classList.add('correct');
          if (this.callbacks.onSoundCorrect) this.callbacks.onSoundCorrect();
        } else {
          btn.classList.add('incorrect');
          // Highlight the actual correct option
          const correctBtn = optionsContainer.children[q.correctIndex] as HTMLElement;
          if (correctBtn) correctBtn.classList.add('correct');
          if (this.callbacks.onSoundIncorrect) this.callbacks.onSoundIncorrect();
        }

        // Show detailed feedback
        feedbackBox.style.display = 'block';
        feedbackBox.className = 'quiz-feedback-box';
        feedbackBox.innerHTML = `
          <div style="font-weight: 700; color: ${isCorrect ? '#10b981' : '#ef4444'}; margin-bottom: 6px;">
            ${isCorrect ? '✓ ¡Respuesta Correcta!' : '✗ Respuesta Incorrecta'}
          </div>
          <div>${q.explanation}</div>
          <div style="margin-top: 6px; font-size: 12px; color: #fbbf24;">🩺 <strong>Nota Clínica:</strong> ${q.clinicalNote}</div>
        `;

        nextBtn.style.display = 'inline-block';
      });

      optionsContainer.appendChild(btn);
    });

    nextBtn.addEventListener('click', () => {
      if (this.currentIndex < ANATOMICAL_QUIZ_QUESTIONS.length - 1) {
        this.currentIndex++;
        this.renderQuestion();
      } else {
        this.renderResults();
      }
    });
  }

  private renderResults(): void {
    const total = ANATOMICAL_QUIZ_QUESTIONS.length;
    const percentage = Math.round((this.score / total) * 100);
    const passed = percentage >= 70;

    this.card.innerHTML = `
      <div style="text-align: center; display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <span class="modal-badge">REPORTE FINAL DE EVALUACIÓN</span>
        
        <div style="font-size: 64px;">${passed ? '🏆' : '📚'}</div>
        
        <div class="modal-title">
          ${passed ? '¡Excelente Desempeño Anatómico!' : 'Evaluación Completada'}
        </div>

        <div style="font-size: 36px; font-weight: 900; color: ${passed ? '#10b981' : '#f59e0b'};">
          ${percentage}%
        </div>

        <div style="color: #cbd5e1; font-size: 15px; max-width: 440px; line-height: 1.5;">
          Has obtenido <strong>${this.score} de ${total}</strong> aciertos en los módulos de ciencias morfológicas de Vickora Labs.
        </div>

        <div style="width: 100%; display: flex; gap: 12px; margin-top: 10px;">
          <button class="btn-primary-action" id="btn-restart-quiz" style="flex: 1;">
            🔄 Reintentar Evaluación
          </button>
          <button class="btn-primary-action" id="btn-finish-quiz" style="flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
            Regresar al Laboratorio
          </button>
        </div>
      </div>
    `;

    this.card.querySelector('#btn-restart-quiz')?.addEventListener('click', () => {
      this.currentIndex = 0;
      this.score = 0;
      this.renderQuestion();
    });

    this.card.querySelector('#btn-finish-quiz')?.addEventListener('click', () => {
      this.close();
    });
  }
}
