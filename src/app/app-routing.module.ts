import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadAssessmentComponent } from './lead-assessment/lead-assessment.component';
import { JobResponsibilitesComponent } from './job-responsibilites/job-responsibilites.component';

const routes: Routes = [
  {path: '' , component:JobResponsibilitesComponent},
  {path:'lead-assessment' , component:LeadAssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
