import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let HomeComponent = class HomeComponent {
    router;
    topics = ['javascript', 'python'];
    constructor(router) {
        this.router = router;
    }
    startQuiz(topic) {
        this.router.navigate(['/quiz', topic]);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        standalone: true,
        imports: [CommonModule],
        template: `
    <div class="home-container">
      <h2>Select a Quiz Topic</h2>
      <div class="topics">
        <div *ngFor="let topic of topics" class="topic-card">
          <h3>{{ topic | titlecase }}</h3>
          <p>Test your knowledge in {{ topic | titlecase }}</p>
          <button (click)="startQuiz(topic)" class="start-btn">
            Start {{ topic | titlecase }} Quiz
          </button>
        </div>
      </div>
    </div>
  `,
        styles: [`
    .home-container {
      text-align: center;
      padding: 20px;
    }
    h2 {
      color: #333;
      margin-bottom: 30px;
    }
    .topics {
      display: flex;
      gap: 30px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 30px;
    }
    .topic-card {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      min-width: 250px;
      transition: transform 0.3s ease;
    }
    .topic-card:hover {
      transform: translateY(-5px);
    }
    .topic-card h3 {
      color: #007bff;
      margin-bottom: 15px;
    }
    .topic-card p {
      color: #666;
      margin-bottom: 20px;
    }
    .start-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.3s ease;
    }
    .start-btn:hover {
      background: #0056b3;
    }
  `]
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.js.map