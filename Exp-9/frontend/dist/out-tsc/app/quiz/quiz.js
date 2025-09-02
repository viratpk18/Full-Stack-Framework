import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let QuizComponent = class QuizComponent {
    route;
    router;
    http;
    topic = '';
    questions = [];
    currentQuestionIndex = 0;
    selectedAnswer = '';
    answers = [];
    score = 0;
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.topic = this.route.snapshot.params['topic'];
        this.loadQuestions();
    }
    loadQuestions() {
        this.http.get(`http://localhost:3000/questions/${this.topic}`)
            .subscribe({
            next: (data) => {
                this.questions = data;
            },
            error: (error) => {
                console.error('Error loading questions:', error);
                alert('Failed to load questions. Please make sure the backend server is running on port 3000.');
            }
        });
    }
    selectAnswer(answer) {
        this.selectedAnswer = answer;
    }
    nextQuestion() {
        if (!this.selectedAnswer)
            return;
        this.answers.push(this.selectedAnswer);
        if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
            this.score++;
        }
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.selectedAnswer = '';
        }
        else {
            this.finishQuiz();
        }
    }
    finishQuiz() {
        this.router.navigate(['/result'], {
            state: {
                score: this.score,
                total: this.questions.length,
                topic: this.topic
            }
        });
    }
    getOptionLetter(index) {
        return String.fromCharCode(65 + index); // A, B, C, D
    }
};
QuizComponent = __decorate([
    Component({
        selector: 'app-quiz',
        standalone: true,
        imports: [CommonModule],
        template: `
    <div class="quiz-container" *ngIf="questions.length > 0">
      <div class="quiz-header">
        <h2>{{ topic | titlecase }} Quiz</h2>
        <div class="progress-bar">
          <div class="progress" [style.width.%]="(currentQuestionIndex + 1) / questions.length * 100"></div>
        </div>
        <div class="question-counter">
          Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
        </div>
      </div>
      
      <div class="question-card">
        <h3>{{ questions[currentQuestionIndex]?.question }}</h3>
        <div class="options">
          <button 
            *ngFor="let option of questions[currentQuestionIndex]?.options; let i = index" 
            (click)="selectAnswer(option)"
            class="option-btn"
            [class.selected]="selectedAnswer === option">
            <span class="option-letter">{{ getOptionLetter(i) }}</span>
            {{ option }}
          </button>
        </div>
        
        <div class="quiz-actions">
          <button 
            (click)="nextQuestion()" 
            class="next-btn"
            [disabled]="!selectedAnswer">
            {{ currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz' }}
          </button>
        </div>
      </div>
    </div>
    
    <div *ngIf="questions.length === 0" class="loading">
      <div class="spinner"></div>
      <p>Loading {{ topic }} questions...</p>
    </div>
  `,
        styles: [`
    .quiz-container {
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
    }
    .quiz-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .quiz-header h2 {
      color: #333;
      margin-bottom: 20px;
    }
    .progress-bar {
      width: 100%;
      height: 12px;
      background: #e9ecef;
      border-radius: 6px;
      margin-bottom: 15px;
      overflow: hidden;
    }
    .progress {
      height: 100%;
      background: linear-gradient(90deg, #007bff, #0056b3);
      border-radius: 6px;
      transition: width 0.5s ease;
    }
    .question-counter {
      color: #666;
      font-weight: 500;
    }
    .question-card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }
    .question-card h3 {
      margin-bottom: 25px;
      color: #333;
      font-size: 20px;
      line-height: 1.5;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 30px;
    }
    .option-btn {
      padding: 15px 20px;
      border: 2px solid #e9ecef;
      background: white;
      border-radius: 10px;
      cursor: pointer;
      text-align: left;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    .option-btn:hover {
      border-color: #007bff;
      background: #f8f9fa;
    }
    .option-btn.selected {
      border-color: #007bff;
      background: #e3f2fd;
      color: #0056b3;
    }
    .option-letter {
      background: #007bff;
      color: white;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-weight: bold;
      font-size: 14px;
    }
    .option-btn.selected .option-letter {
      background: #0056b3;
    }
    .quiz-actions {
      text-align: right;
    }
    .next-btn {
      background: #28a745;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.3s ease;
    }
    .next-btn:hover:not(:disabled) {
      background: #218838;
    }
    .next-btn:disabled {
      background: #6c757d;
      cursor: not-allowed;
    }
    .loading {
      text-align: center;
      padding: 100px 20px;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #e9ecef;
      border-top: 5px solid #007bff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .loading p {
      color: #666;
      font-size: 18px;
    }
  `]
    })
], QuizComponent);
export { QuizComponent };
//# sourceMappingURL=quiz.js.map