import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent {
  studentData: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.studentData = data;

  }



}