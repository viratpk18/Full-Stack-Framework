import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
let AppComponent = class AppComponent {
    title = 'Quiz App';
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet, CommonModule],
        template: `
    <div class="container">
      <h1>Quiz Application</h1>
      <router-outlet></router-outlet>
    </div>
  `,
        styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }
  `]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.js.map