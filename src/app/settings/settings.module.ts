import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsScreenComponent } from './settings-screen.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountService} from './account.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [SettingsScreenComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService
  ]
})
export class SettingsModule { }
