import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-responsibilites',
  templateUrl: './job-responsibilites.component.html',
  styleUrls: ['./job-responsibilites.component.scss']
})
export class JobResponsibilitesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToQuickDataEntryForm(){
    this.router.navigate(['/lead-assessment'])
  }

}
