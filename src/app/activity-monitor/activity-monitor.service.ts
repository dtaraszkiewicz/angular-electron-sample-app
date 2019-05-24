import { Injectable } from '@angular/core';
import Os, { CpuInfo } from 'os';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SystemMemoryModel } from './activity-monitor/models/system-memory.model';
import { ChartValueModel } from './activity-monitor/models/chart-value.model';
import { CpuTimesModel } from './activity-monitor/models/cpu-times.model';

@Injectable({
  providedIn: 'root'
})

export class ActivityMonitorService {
  os: typeof Os;

  constructor() {
    this.os = window['require']('os');
  }

  getCpuTimes(): Observable<CpuTimesModel> {
    return interval(1000).pipe(
      startWith(0),
      map(() => {
        return { rawData: JSON.stringify(this.os.cpus()), data: this.getCpuTimesChart(this.os.cpus()) };
      })
    )
  }

  getSystemMemory(): Observable<SystemMemoryModel>{
    return interval(1000).pipe(
      startWith(0),
      map(() => {
        return new SystemMemoryModel(this.os.freemem(), this.os.totalmem());
      })
    )
  }

  private getCpuTimesChart(cpuTimes: CpuInfo[]) {
    return cpuTimes.map((cpuTime, index) => {
      return {
        name: `${cpuTime.model} ${index}`,
        series: this.getSeries(cpuTime.times)
      };
    });
  }

  private getSeries(times: CpuInfo['times']): ChartValueModel[] {
    return [
      { name: "System", value: times.sys },
      { name: "User", value: times.user },
      { name: "Idle", value: times.idle }
    ];
  }
}
