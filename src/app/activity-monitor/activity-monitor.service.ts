import { Injectable } from '@angular/core';
import Os from 'os';

@Injectable({
  providedIn: 'root'
})
export class ActivityMonitorService {

  constructor() { }

  getCPUTimes(){
    let os: typeof Os = window['require']('os');
    const test = os.cpus();
    console.log(test);
  }
}
