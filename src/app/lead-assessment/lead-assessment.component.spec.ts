import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadAssessmentComponent } from './lead-assessment.component';

describe('LeadAssessmentComponent', () => {
  let component: LeadAssessmentComponent;
  let fixture: ComponentFixture<LeadAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
