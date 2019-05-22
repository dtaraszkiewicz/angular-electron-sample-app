import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityMonitorComponent } from './activity-monitor/activity-monitor.component';

import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [ActivityMonitorComponent],
  imports: [
    CommonModule,
    NgxElectronModule
  ],
  exports: [
    ActivityMonitorComponent
  ]
})
export class ActivityMonitorModule { }
