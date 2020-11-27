import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-pager',
  templateUrl: './date-pager.component.html',
  styleUrls: ['./date-pager.component.css']
})
export class DatePagerComponent implements OnInit {

  private _currentDate: Date;

  @Output() dateSwitch = new EventEmitter<Date>();

  get currentDate(): Date {
    return this._currentDate;
  }

  set currentDate(value: Date) {
    this._currentDate = value;
  }

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

  formattedDate(): string {
    const fullYear = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const day = this.currentDate.getDate();

    return day + '.' + month + '.' + fullYear;
  }

  decreaseDate(): void {
    const currentDate = this.currentDate.getDate();
    this.currentDate.setDate(currentDate - 1);
    this.dateSwitch.emit(this.currentDate);
  }

  increaseDate(): void {
    const currentDate = this.currentDate.getDate();
    this.currentDate.setDate(currentDate + 1);
    this.dateSwitch.emit(this.currentDate);
  }

}
