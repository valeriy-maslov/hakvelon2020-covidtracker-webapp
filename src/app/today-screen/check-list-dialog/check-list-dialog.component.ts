import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface ChecklistDialogData {
  morningTemperature: number;
  eveningTemperature: number;
  cough: boolean;
  snuffle: boolean;
  soreThroat: boolean;
  isolation: boolean;
}

@Component({
  selector: 'app-check-list-dialog',
  templateUrl: './check-list-dialog.component.html',
  styleUrls: ['./check-list-dialog.component.css']
})
export class CheckListDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheckListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ChecklistDialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
