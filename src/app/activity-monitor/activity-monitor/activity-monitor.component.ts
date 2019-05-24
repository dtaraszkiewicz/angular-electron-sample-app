import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivityMonitorService } from '../activity-monitor.service';
import { Subscription } from 'rxjs';
import { SystemMemoryModel } from './models/system-memory.model';
import { ChartValueModel } from './models/chart-value.model';
import { CpuTimesModel } from './models/cpu-times.model';


@Component({
  selector: 'app-activity-monitor',
  templateUrl: './activity-monitor.component.html',
  styleUrls: ['./activity-monitor.component.css']
})
export class ActivityMonitorComponent implements OnInit, OnDestroy {
  @Output() cpuTimesRawData: string;
  @Output() systemMemoryRawData: string;
  @Output() systemMemory: any[];
  @Output() cpuTimes: any[];

  view: any[] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showLabels = true;
  doughnut = true;
  showXAxisLabel = true;
  xAxisLabel = 'Usage';
  showYAxisLabel = true;
  yAxisLabel = 'CPUs';
  enableAnimations = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  subscription = new Subscription();

  constructor(private activityMonitorService: ActivityMonitorService) { }

  ngOnInit() {
    this.getCPUTimes();
    this.getSystemMemory();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getSystemMemory() {
    this.subscription.add(
      this.activityMonitorService.getSystemMemory()
        .subscribe(val =>
        this.updateSystemMemory(val))
    );
  }

  private getCPUTimes() {
    this.subscription.add(
      this.activityMonitorService.getCpuTimes()
        .subscribe(val =>
          this.updateCPUTimes(val))
    );
  }

  private updateSystemMemory(systemMemory: SystemMemoryModel) {
    this.systemMemoryRawData = JSON.stringify(systemMemory);
    this.systemMemory = this.getSystemMemoryChart(systemMemory);
  }

  private updateCPUTimes(cpuTimes: CpuTimesModel) {
    this.cpuTimesRawData = cpuTimes.rawData;
    this.cpuTimes = cpuTimes.data;
  }

  private getSystemMemoryChart(systemMemory: SystemMemoryModel): ChartValueModel[] {
    return [
      { name: "Free", value: systemMemory.free },
      { name: "Total", value: systemMemory.total }
    ]
  }
}
