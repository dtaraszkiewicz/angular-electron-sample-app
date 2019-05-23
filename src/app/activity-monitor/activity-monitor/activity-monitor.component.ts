import { Component, OnInit, Output } from '@angular/core';
import { ActivityMonitorService } from '../activity-monitor.service';


@Component({
  selector: 'app-activity-monitor',
  templateUrl: './activity-monitor.component.html',
  styleUrls: ['./activity-monitor.component.css']
})
export class ActivityMonitorComponent implements OnInit {
  @Output() cpuTimes: string;

  constructor(private activityMonitorService: ActivityMonitorService) { }

  ngOnInit() {
    this.getCPUTimes();
  }

  getCPUTimes() {
    this.activityMonitorService.cpuTimes$.subscribe(val =>
      this.updateCPUTimes(val))

      setTimeout(() =>{
        this.getCPUTimes()
      },
      1000)
  }

  updateCPUTimes(cpuTimes){
    this.cpuTimes = JSON.stringify(cpuTimes)
  }

}
