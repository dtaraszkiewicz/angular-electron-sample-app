import { Injectable } from '@angular/core';
import Os, { CpuInfo } from 'os';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SystemMemoryModel } from './activity-monitor/models/system-memory.model';

@Injectable({
  providedIn: 'root'
})

export class ActivityMonitorService {
  os: typeof Os;

  constructor() {
    this.os = window['require']('os');
  }

  getCpuTimes(): Observable<CpuInfo[]> {
    return interval(1000).pipe(
      startWith(0),
      map(() => {
        return this.os.cpus();
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

}
