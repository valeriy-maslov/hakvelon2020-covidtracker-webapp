import { Component, OnInit } from '@angular/core';
import {AppComponent, LOCAL_STORAGE_EMAIL} from '../app.component';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from './account.service';

@Component({
  selector: 'app-settings-screen',
  templateUrl: './settings-screen.component.html',
  styleUrls: ['./settings-screen.component.css']
})
export class SettingsScreenComponent implements OnInit {

  loggedin = false;
  registrationInProgress = false;
  authorizationInProgress = false;

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    authorizationPassword: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    firstName: new FormControl(''),
    title: new FormControl('')
  });

  updateForm = new FormGroup({
    email: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    firstName: new FormControl(''),
    title: new FormControl('')
  });

  constructor(private appReference: AppComponent,
              private accountService: AccountService) {
    this.loggedin = localStorage.getItem(LOCAL_STORAGE_EMAIL) !== null;

  }

  ngOnInit(): void {
    if (this.loggedin) {
      this.accountService.getAccountData(localStorage.getItem(LOCAL_STORAGE_EMAIL))
        .then(value => {
          this.updateForm.setValue({
            email: value.email,
            lastName: value.lastName,
            middleName: value.middleName,
            firstName: value.firstName,
            title: value.title
          });
        });
    }
  }

  checkAccountExistsAndLogIn(): void {
    if (!this.authorizationInProgress) {
      this.accountService.checkIfAccountExists(this.registerForm.get('email').value).then(value => {
        this.registrationInProgress = !value;
        this.authorizationInProgress = value;
      });
    } else {
      this.accountService.login(this.registerForm.get('email').value, this.registerForm.get('authorizationPassword').value)
        .then(() => {
          localStorage.setItem(LOCAL_STORAGE_EMAIL, this.registerForm.get('email').value);
          this.authorizationInProgress = false;
          this.appReference.resetLoginStatus();
        }, reason => {
          console.log('Failed to authorize');
          console.info(reason);
        });
    }
  }

  registerAccount(): void {
    this.accountService.registerNewAccount({
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      lastName: this.registerForm.get('lastName').value,
      middleName: this.registerForm.get('middleName').value,
      firstName: this.registerForm.get('firstName').value,
      title: this.registerForm.get('title').value
    }).then(() => {
      this.registrationInProgress = false;
      this.appReference.resetLoginStatus();
    }, reason => {
      console.info(reason);
    });
  }

}
