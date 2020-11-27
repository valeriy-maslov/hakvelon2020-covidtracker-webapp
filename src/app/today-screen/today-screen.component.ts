import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CheckListDialogComponent} from './check-list-dialog/check-list-dialog.component';

@Component({
  selector: 'app-today-screen',
  templateUrl: './today-screen.component.html',
  styleUrls: ['./today-screen.component.css']
})
export class TodayScreenComponent implements OnInit {

  appearedInOffice = false;
  checkListExists = false;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCheckListDialog(): void {
    const dialogRef = this.matDialog.open(CheckListDialogComponent, {
      data: {
        morningTemperature: null,
        eveningTemperature: null,
        cough: false,
        snuffle: false,
        soreThroat: false,
        isolation: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Checklist dialog closed');
      console.info(result);
    });
  }

  onSwitchDate(newDate: Date): void {
    console.log('Date switched: ' + newDate);
  }

  onToggleOfficeSwitch(event: any): void {
    console.log('Office switch status: ' + event.checked);
  }

}
