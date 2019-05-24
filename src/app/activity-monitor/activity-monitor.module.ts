import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityMonitorComponent } from './activity-monitor/activity-monitor.component';

import { NgxElectronModule } from 'ngx-electron';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ElectronMaterialModule } from '../electron-material/electron-material.module';

@NgModule({
  declarations: [ActivityMonitorComponent],
  imports: [
    CommonModule,
    NgxElectronModule,
    NgxChartsModule,
    ElectronMaterialModule
  ],
  exports: [
    ActivityMonitorComponent
  ]
})
export class ActivityMonitorModule { }
