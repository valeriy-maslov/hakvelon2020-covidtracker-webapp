import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {SettingsScreenComponent} from './settings/settings-screen.component';
import {TodayScreenComponent} from './today-screen/today-screen.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {TodayScreenModule} from './today-screen/today-screen.module';
import {SettingsModule} from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    TodayScreenModule,
    SettingsModule,
    RouterModule.forRoot([
      {path: 'settings', component: SettingsScreenComponent},
      {path: 'today', component: TodayScreenComponent},
      {path: '', redirectTo: '/today', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
