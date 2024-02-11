import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppropriateDecisionComponent } from './appropriate-decision.component';

describe('AppropriateDecisionComponent', () => {
  let component: AppropriateDecisionComponent;
  let fixture: ComponentFixture<AppropriateDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppropriateDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppropriateDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
