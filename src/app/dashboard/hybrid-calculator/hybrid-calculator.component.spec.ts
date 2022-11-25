import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridCalculatorComponent } from './hybrid-calculator.component';

describe('HybridCalculatorComponent', () => {
  let component: HybridCalculatorComponent;
  let fixture: ComponentFixture<HybridCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
