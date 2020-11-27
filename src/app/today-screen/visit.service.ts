import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {jsDateToIsoDateString, LOCAL_STORAGE_EMAIL} from '../app.component';

@Injectable()
export class VisitService {

  constructor(private http: HttpClient) { }

  getVisitForDate(visitDate: Date): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
      const dateParam = jsDateToIsoDateString(visitDate);
      this.http.get(environment.base_url + '/accounts/' + email + '/visits', {
        params: {
          date: dateParam
        }
      })
        .subscribe((value: boolean) => resolve(value), error => reject(error));
    });
  }

  setVisitForDate(visitDate: Date): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
      const dateParam = jsDateToIsoDateString(visitDate);
      this.http.post(environment.base_url + '/accounts/' + email + '/visits', null
      , {
        params: {
          date: dateParam
        }
        })
        .subscribe(() => resolve(), error => reject(error));
    });
  }

  deleteVisitForDate(visitDate: Date): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
      const dateParam = jsDateToIsoDateString(visitDate);
      this.http.delete(environment.base_url + '/accounts/' + email + '/visits', {
        params: {
          date: dateParam
        }
      })
        .subscribe(() => resolve(), error => reject(error));
    });
  }
}
