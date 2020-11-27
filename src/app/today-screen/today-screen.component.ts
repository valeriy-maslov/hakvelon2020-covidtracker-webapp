import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CheckListDialogComponent} from './check-list-dialog/check-list-dialog.component';
import {VisitService} from './visit.service';
import {ChecklistService} from './check-list-dialog/checklist.service';

@Component({
  selector: 'app-today-screen',
  templateUrl: './today-screen.component.html',
  styleUrls: ['./today-screen.component.css']
})
export class TodayScreenComponent implements OnInit {

  appearedInOffice = false;
  checkListExists = false;

  currentDate: Date;

  constructor(public matDialog: MatDialog, private visitService: VisitService, private checklistService: ChecklistService) { }

  ngOnInit(): void {
  }

  openCheckListDialog(): void {
    let dialogRef;
    this.checklistService.getChecklistForDate(this.currentDate)
      .then(value => {
        if (value === null) {
          dialogRef = this.matDialog.open(CheckListDialogComponent, {
            data: {
              morningTemperature: null,
              eveningTemperature: null,
              cough: false,
              snuffle: false,
              soreThroat: false,
              isolation: false
            }
          });
        } else {
          dialogRef = this.matDialog.open(CheckListDialogComponent, {
            data: {
              temperatureMorning: value.temperatureMorning,
              temperatureEvening: value.temperatureEvening,
              cough: value.cough,
              snuffle: value.snuffle,
              soreThroat: value.soreThroat,
              isolation: value.isolation
            }
          });
        }
        this.setAfterClosed(dialogRef);
      }, reason => {
        dialogRef = this.matDialog.open(CheckListDialogComponent, {
          data: {
            morningTemperature: null,
            eveningTemperature: null,
            cough: false,
            snuffle: false,
            soreThroat: false,
            isolation: false
          }
        });
        this.setAfterClosed(dialogRef);
      });

  }

  setAfterClosed(dialogRef: MatDialogRef<any>): void {
    dialogRef.afterClosed().subscribe(result => {
      console.log('Checklist dialog closed');
      console.info(result);
      if (result !== undefined) {
        this.checklistService.saveChecklistForDate(this.currentDate, result)
          .then(() => {
            console.log('Saved checklist');
            this.checkListExists = true;
          }, reason => {
            console.log('Cant save checklist');
            console.info(reason);
          });
      }
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
