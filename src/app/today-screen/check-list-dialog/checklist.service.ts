import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChecklistDialogData} from './check-list-dialog.component';
import {environment} from '../../../environments/environment';
import {jsDateToIsoDateString, LOCAL_STORAGE_EMAIL} from '../../app.component';

export interface ChecklistModel {
  temperatureMorning: number;
  temperatureEvening: number;
  soreThroat: boolean;
  cough: boolean;
  snuffle: boolean;
  isolation: boolean;
  submitted: boolean;
}

@Injectable()
export class ChecklistService {

  constructor(private http: HttpClient) { }

  getChecklistForDate(date: Date): Promise<ChecklistModel> {
    return new Promise<ChecklistModel>((resolve, reject) => {
      const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
      const dateParam = jsDateToIsoDateString(date);
      this.http.get(environment.base_url + '/accounts/' + email + '/checklists', {
        params: {
          date: dateParam
        }
      }).subscribe((value: ChecklistModel) => resolve(value), error => reject(error));
    });
  }

  saveChecklistForDate(date: Date, dialogData: ChecklistDialogData): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
      const dateParam = jsDateToIsoDateString(date);
      const checklistModel: ChecklistModel = {
        temperatureMorning: dialogData.temperatureMorning,
        temperatureEvening: dialogData.temperatureEvening,
        soreThroat: dialogData.soreThroat,
        cough: dialogData.cough,
        snuffle: dialogData.snuffle,
        isolation: dialogData.isolation,
        submitted: false
      };
      this.http.post(environment.base_url + '/accounts/' + email + '/checklists', checklistModel, {
        params: {
          date: dateParam
        }
      }).subscribe(() => resolve(), error => reject(error));
    });
  }

  submitChecklistForDate(date: Date): Promise<ChecklistModel> {
    return new Promise<ChecklistModel>((resolve, reject) => {
      const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
      const dateParam = jsDateToIsoDateString(date);
      this.http.post(environment.base_url + '/accounts/' + email + '/checklists/submit', {}, {
        params: {
          date: dateParam
        }
      }).subscribe((value: ChecklistModel) => resolve(value), error => reject(error));
    });
  }
}
