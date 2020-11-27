import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayScreenComponent } from './today-screen.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DatePagerComponent } from './date-pager/date-pager.component';
import {FormsModule} from '@angular/forms';
import { CheckListDialogComponent } from './check-list-dialog/check-list-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {VisitService} from './visit.service';
import {HttpClientModule} from '@angular/common/http';
import {ChecklistService} from './check-list-dialog/checklist.service';


@NgModule({
  declarations: [TodayScreenComponent, DatePagerComponent, CheckListDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    VisitService,
    ChecklistService
  ]
})
export class TodayScreenModule { }
