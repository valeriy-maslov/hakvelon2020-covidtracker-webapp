import { Component } from '@angular/core';
import {Router} from '@angular/router';

export const LOCAL_STORAGE_EMAIL = 'covidtracker_email';

export const jsDateToIsoDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return year + '-' + month + '-' + day;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidtracker';

  loggedin = false;

  constructor(private router: Router) {
    if (localStorage.getItem(LOCAL_STORAGE_EMAIL) === null) {
      this.router.navigateByUrl('/settings');
    } else {
      this.loggedin = true;
    }
  }

  resetLoginStatus(): void {
    this.loggedin = localStorage.getItem(LOCAL_STORAGE_EMAIL) !== null;
    console.log('Resetting login status...');
    if (this.loggedin) {
      this.gotoTodayScreen();
    }
  }

  gotoTodayScreen(): void {
    this.router.navigateByUrl('/today');
  }
}
