import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityMonitorComponent } from './activity-monitor/activity-monitor.component';

@NgModule({
  declarations: [ActivityMonitorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ActivityMonitorComponent
  ]
})
export class ActivityMonitorModule { }
