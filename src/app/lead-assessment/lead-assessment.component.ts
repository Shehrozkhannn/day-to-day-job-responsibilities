import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Decisions } from 'src/final-decisions';
import { AppropriateDecisionComponent } from '../appropriate-decision/appropriate-decision.component';
import { Policy } from '../policies';

@Component({
  selector: 'app-lead-assessment',
  templateUrl: './lead-assessment.component.html',
  styleUrls: ['./lead-assessment.component.scss']
})
export class LeadAssessmentComponent implements OnInit {
  odeForm:any;
  constructor(private toastr: ToastrService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.odeForm = new FormGroup({
      city: new FormControl('',[Validators.required]),
      income: new FormControl('',[Validators.required]),
      down_payment: new FormControl('',[Validators.required]),
      loan_amount: new FormControl('',[Validators.required]),
      bankruptcy: new FormControl(''),
      documents: new FormControl(''),
    });
  }

  makeDecision(form: FormGroup){
    const yearlyIncome = form.value.income * 12;
    const maxLoanAmount = yearlyIncome *  4.5;
    const twentyPercent = form.value.loan_amount * 0.2;
    const eightyPercent = form.value.loan_amount * 0.8;
    localStorage.setItem('formData', JSON.stringify(form.value));
    if(form.value.bankruptcy){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.INELIGIBLE_PERMANENT
      });
      this.toastr.info(Policy.Bankrupt);
    }
    else if(form.value.income > 30000 || form.value.income < 150000){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.INELIGIBLE_TEMPORARY
      });
      this.toastr.info(Policy.Monthly_Income);
    }
    else if(form.value.loan_amount > maxLoanAmount){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.INELIGIBLE_TEMPORARY
      });
      this.toastr.info(Policy.High_LoanAmount);
    }
    else if( form.value.loan_amount && (form.value.loan_amount < 100000 || form.value.loan_amount > 3000000)){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.INELIGIBLE_TEMPORARY
      });
      this.toastr.info(Policy.Low_LoanAmount);
    }
    else if(form.value.down_payment < twentyPercent || form.value.down_payment > eightyPercent){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.INELIGIBLE_TEMPORARY
      });
      this.toastr.info(Policy.Down_Payment);
    }
    else if(form.value.documents){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.WAIT_LIST_MORE_PROPERTY_DOCS
      });
      this.toastr.info(Policy.NecessaryProperty);
    }
    else if(form.value.city === 'Karachi'){
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.INELIGIBLE_TEMPORARY
      });
      this.toastr.info(Policy.Based_In_Karachi);
    }
    else{
      this.dialog.open(AppropriateDecisionComponent,{
        data: Decisions.MEET_ALL_REQUIREMENT
      });
      this.toastr.info(Policy.Meet_All_Criteria);
    }
  }


}
