import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface CovidAlarmDialogData {
  lastVisitDate: Date;
}

@Component({
  selector: 'app-covid-alarm',
  templateUrl: './covid-alarm.component.html',
  styleUrls: ['./covid-alarm.component.css']
})
export class CovidAlarmComponent implements OnInit {

  // picker: Date;
  lastVisitDate: Date;

  constructor(public dialogRef: MatDialogRef<CovidAlarmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CovidAlarmDialogData) { }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
