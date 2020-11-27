import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayScreenComponent } from './today-screen.component';

describe('TodayScreenComponent', () => {
  let component: TodayScreenComponent;
  let fixture: ComponentFixture<TodayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
