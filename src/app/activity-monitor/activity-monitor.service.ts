import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

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
}
