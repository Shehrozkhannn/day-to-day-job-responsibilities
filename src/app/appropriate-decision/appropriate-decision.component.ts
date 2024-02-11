import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appropriate-decision',
  templateUrl: './appropriate-decision.component.html',
  styleUrls: ['./appropriate-decision.component.scss'],
  
})
export class AppropriateDecisionComponent implements OnInit {
  
  showData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.showData = this.data
  }

}
