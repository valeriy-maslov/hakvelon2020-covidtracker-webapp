import { Component, OnInit } from '@angular/core';
import {AppComponent, LOCAL_STORAGE_EMAIL} from '../app.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings-screen',
  templateUrl: './settings-screen.component.html',
  styleUrls: ['./settings-screen.component.css']
})
export class SettingsScreenComponent implements OnInit {

  loggedin = false;
  registrationInProgress = false;

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    firstName: new FormControl(''),
    title: new FormControl('')
  });

  constructor(private appReference: AppComponent) {
    this.loggedin = localStorage.getItem(LOCAL_STORAGE_EMAIL) !== null;

  }

  ngOnInit(): void {
  }

  checkAccountExistsAndLogIn(): void {
    this.registrationInProgress = true;
  }

  registerAccount(): void {
    this.loggedin = true;
    this.registrationInProgress = false;
    this.appReference.resetLoginStatus();
  }

}
