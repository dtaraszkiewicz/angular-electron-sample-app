import { Injectable } from '@angular/core';
import Os, { CpuInfo } from 'os';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActivityMonitorService {

  cpuTimes$: Observable<CpuInfo[]>;

  constructor() { 
    let os: typeof Os = window['require']('os');
    this.cpuTimes$ = Observable.create(observer => {
      observer.next(os.cpus())
    })
  }
}
