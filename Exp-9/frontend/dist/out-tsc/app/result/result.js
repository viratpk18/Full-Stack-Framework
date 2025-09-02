import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let ResultComponent = class ResultComponent {
    router;
    score = 0;
    total = 0;
    topic = '';
    constructor(router) {
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation?.extras.state;
        if (state) {
            this.score = state['score'] || 0;
            this.total = state['total'] || 0;
            this.topic = state['topic'] || '';
        }
    }
    ngOnInit() {
        if (this.total === 0) {
            this.router.navigate(['/']);
        }
    }
    getPercentage() {
        return Math.round((this.score / this.total) * 100);
    }
    getScoreClass() {
        const percentage = this.getPercentage();
        if (percentage >= 80)
            return 'excellent';
        if (percentage >= 60)
            return 'good';
        return 'poor';
    }
    getScoreMessage() {
        const percentage = this.getPercentage();
        if (percentage >= 80)
            return 'Excellent! 🎉';
        if (percentage >= 60)
            return 'Good Job! 👍';
        return 'Keep Practicing! 💪';
    }
    getDetailedMessage() {
        const percentage = this.getPercentage();
        if (percentage >= 80)
            return 'Outstanding performance! You have mastered this topic.';
        if (percentage >= 60)
            return 'Good work! You have a solid understanding of the basics.';
        return 'Don\'t give up! Practice makes perfect. Try again to improve your score.';
    }
    goHome() {
        this.router.navigate(['/']);
    }
    retakeQuiz() {
        this.router.navigate(['/quiz', this.topic]);
    }
};
ResultComponent = __decorate([
    Component({
        selector: 'app-result',
        standalone: true,
        imports: [CommonModule],
        template: `
    <div class="result-container">
      <div class="result-card">
        <div class="result-header">
          <h2>Quiz Complete!</h2>
          <div class="topic-badge">{{ topic | titlecase }} Quiz</div>
        </div>
        
        <div class="score-section">
          <div class="score-circle" [class]="getScoreClass()">
            <div class="score-number">{{ score }}</div>
            <div class="score-divider">/</div>
            <div class="score-total">{{ total }}</div>
          </div>
          
          <div class="percentage" [class]="getScoreClass()">
            {{ getPercentage() }}%
          </div>
          
          <div class="message">
            <h3>{{ getScoreMessage() }}</h3>
            <p>{{ getDetailedMessage() }}</p>
          </div>
        </div>
        
        <div class="actions">
          <button (click)="goHome()" class="home-btn">
            <span>🏠</span> Take Another Quiz
          </button>
          <button (click)="retakeQuiz()" class="retake-btn">
            <span>🔄</span> Retake This Quiz
          </button>
        </div>
      </div>
    </div>
  `,
        styles: [`
    .result-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 70vh;
      padding: 20px;
    }
    .result-card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 500px;
      width: 100%;
    }
    .result-header h2 {
      color: #333;
      margin-bottom: 15px;
      font-size: 28px;
    }
    .topic-badge {
      background: #007bff;
      color: white;
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 30px;
    }
    .score-section {
      margin: 30px 0;
    }
    .score-circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      border: 8px solid;
      position: relative;
    }
    .score-circle.excellent {
      border-color: #28a745;
      background: linear-gradient(135deg, #d4edda, #c3e6cb);
    }
    .score-circle.good {
      border-color: #ffc107;
      background: linear-gradient(135deg, #fff3cd, #ffeaa7);
    }
    .score-circle.poor {
      border-color: #dc3545;
      background: linear-gradient(135deg, #f8d7da, #f5c6cb);
    }
    .score-number {
      font-size: 36px;
      font-weight: bold;
      color: #333;
    }
    .score-divider {
      font-size: 24px;
      color: #666;
      margin: 0 5px;
    }
    .score-total {
      font-size: 24px;
      color: #666;
    }
    .percentage {
      font-size: 32px;
      font-weight: bold;
      margin: 20px 0;
    }
    .percentage.excellent {
      color: #28a745;
    }
    .percentage.good {
      color: #ffc107;
    }
    .percentage.poor {
      color: #dc3545;
    }
    .message {
      margin: 30px 0;
    }
    .message h3 {
      margin-bottom: 10px;
      font-size: 24px;
    }
    .message p {
      color: #666;
      font-size: 16px;
      line-height: 1.5;
    }
    .actions {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 30px;
    }
    .home-btn, .retake-btn {
      padding: 15px 25px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .home-btn {
      background: #007bff;
      color: white;
    }
    .home-btn:hover {
      background: #0056b3;
      transform: translateY(-2px);
    }
    .retake-btn {
      background: #6c757d;
      color: white;
    }
    .retake-btn:hover {
      background: #545b62;
      transform: translateY(-2px);
    }
  `]
    })
], ResultComponent);
export { ResultComponent };
//# sourceMappingURL=result.js.map