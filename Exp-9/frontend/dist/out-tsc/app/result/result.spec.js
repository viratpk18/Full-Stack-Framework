import { TestBed } from '@angular/core/testing';
import { Result } from './result';
describe('Result', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Result]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Result);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=result.spec.js.map