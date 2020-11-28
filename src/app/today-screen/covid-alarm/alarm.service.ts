import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AlarmService {

  constructor(public http: HttpClient) { }

  covidAlarm(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get(environment.base_url + '/accounts/alarmMail', {})
        .subscribe(value => resolve(), error => reject(error));
    });
  }
}
