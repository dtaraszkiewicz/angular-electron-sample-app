import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMonitorComponent } from './activity-monitor.component';

describe('ActivityMonitorComponent', () => {
  let component: ActivityMonitorComponent;
  let fixture: ComponentFixture<ActivityMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
