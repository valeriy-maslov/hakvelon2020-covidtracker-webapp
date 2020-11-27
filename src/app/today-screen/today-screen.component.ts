import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CheckListDialogComponent} from './check-list-dialog/check-list-dialog.component';
import {VisitService} from './visit.service';

@Component({
  selector: 'app-today-screen',
  templateUrl: './today-screen.component.html',
  styleUrls: ['./today-screen.component.css']
})
export class TodayScreenComponent implements OnInit {

  appearedInOffice = false;
  checkListExists = false;

  currentDate: Date;

  constructor(public matDialog: MatDialog, private visitService: VisitService) { }

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
    this.currentDate = newDate;
    this.visitService.getVisitForDate(newDate)
      .then(value => {
        this.appearedInOffice = value;
      }, reason => {
        console.log('Cant load visit');
      });
  }

  onToggleOfficeSwitch(event: any): void {
    console.log('Office switch status: ' + event.checked);
    if (event.checked) {
      this.visitService.setVisitForDate(this.currentDate)
        .then(() => {
          console.log('Set visit');
        }, reason => {
          console.log('Visit is not set');
          console.info(reason);
        });
    } else {
      this.visitService.deleteVisitForDate(this.currentDate)
        .then(() => {
          console.log('Removed visit');
        }, reason => {
          console.log('Visit is not removed');
          console.info(reason);
        });
    }
  }

}
