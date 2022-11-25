import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumbsumCalculatorComponent } from './lumbsum-calculator.component';

describe('LumbsumCalculatorComponent', () => {
  let component: LumbsumCalculatorComponent;
  let fixture: ComponentFixture<LumbsumCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumbsumCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LumbsumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
