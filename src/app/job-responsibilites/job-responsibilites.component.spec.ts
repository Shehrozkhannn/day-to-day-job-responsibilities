import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobResponsibilitesComponent } from './job-responsibilites.component';

describe('JobResponsibilitesComponent', () => {
  let component: JobResponsibilitesComponent;
  let fixture: ComponentFixture<JobResponsibilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobResponsibilitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobResponsibilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
