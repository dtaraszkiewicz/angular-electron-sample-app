import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import Os from 'os';

@Injectable({
  providedIn: 'root'
})
export class ActivityMonitorService {

  constructor(private electronService: ElectronService) { }

  testMethod(){
    var test = this.electronService.ipcRenderer
    test.on('testReply', (event,arg) => {
       console.log(event,arg);
    })

    this.electronService.ipcRenderer.send('test', 'message');
  }

  getCPUTimes(){
    // this.electronService.ipcRenderer.on('cpuTimes', (event, arg) => {
    //   console.log(arg);
    // });

    // this.electronService.ipcRenderer.send('getCPUTimes');
    let os: typeof Os = window['require']('os');
    const test = os.cpus();
    console.log(test);
  }
}
