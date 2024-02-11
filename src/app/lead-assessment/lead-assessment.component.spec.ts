import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Decisions } from 'src/final-decisions';
import { AppropriateDecisionComponent } from '../appropriate-decision/appropriate-decision.component';
import { Policy } from '../policies';
import { LeadAssessmentComponent } from './lead-assessment.component';

describe('LeadAssessmentComponent', () => {
  let component: LeadAssessmentComponent;
  let fixture: ComponentFixture<LeadAssessmentComponent>;
  let dialog: jasmine.SpyObj<MatDialog>;
  let toastr: jasmine.SpyObj<ToastrService>;
  let formBuilder: FormBuilder;

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

  beforeEach(() => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['info']);
    TestBed.configureTestingModule({
      declarations: [LeadAssessmentComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: ToastrService, useValue: toastrSpy }
      ]
    });
    component = TestBed.inject(LeadAssessmentComponent);
    formBuilder = TestBed.inject(FormBuilder);
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    toastr = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  it('should open AppropriateDecisionComponent with INELIGIBLE_PERMANENT data if bankruptcy is true', () => {
    const formGroup: FormGroup = formBuilder.group({
      bankruptcy: new FormControl(false)
    });
    component.makeDecision(formGroup);
    expect(dialog.open).toHaveBeenCalledWith(AppropriateDecisionComponent, { data: Decisions.INELIGIBLE_PERMANENT });
    expect(toastr.info).toHaveBeenCalledWith(Policy.Bankrupt);
  });

  it('should open AppropriateDecisionComponent with INELIGIBLE_TEMPORARY data if income is greater than 150000', () => {
    const formGroup: FormGroup = formBuilder.group({
      income: new FormControl(160000)
    });
    component.makeDecision(formGroup);
    expect(dialog.open).toHaveBeenCalledWith(AppropriateDecisionComponent, { data: Decisions.INELIGIBLE_TEMPORARY });
    expect(toastr.info).toHaveBeenCalledWith(Policy.Monthly_Income);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
