import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
export const routes = [
    { path: '', component: HomeComponent },
    { path: 'quiz/:topic', component: QuizComponent },
    { path: 'result', component: ResultComponent },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map