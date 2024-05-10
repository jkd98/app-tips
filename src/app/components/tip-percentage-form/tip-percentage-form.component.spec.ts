import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipPercentageFormComponent } from './tip-percentage-form.component';

describe('TipPercentageFormComponent', () => {
  let component: TipPercentageFormComponent;
  let fixture: ComponentFixture<TipPercentageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipPercentageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipPercentageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
