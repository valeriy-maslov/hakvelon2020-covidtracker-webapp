import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidAlarmComponent } from './covid-alarm.component';

describe('CovidAlarmComponent', () => {
  let component: CovidAlarmComponent;
  let fixture: ComponentFixture<CovidAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
