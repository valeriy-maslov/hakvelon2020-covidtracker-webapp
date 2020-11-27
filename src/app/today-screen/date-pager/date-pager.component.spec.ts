import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePagerComponent } from './date-pager.component';

describe('DatePagerComponent', () => {
  let component: DatePagerComponent;
  let fixture: ComponentFixture<DatePagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
