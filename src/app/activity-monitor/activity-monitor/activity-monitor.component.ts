import { Component, OnInit } from '@angular/core';
import { ActivityMonitorService } from '../activity-monitor.service';


@Component({
  selector: 'app-activity-monitor',
  templateUrl: './activity-monitor.component.html',
  styleUrls: ['./activity-monitor.component.css']
})
export class ActivityMonitorComponent implements OnInit {

  constructor(private activityMonitorService: ActivityMonitorService) { }

  ngOnInit() {
    this.activityMonitorService.testMethod();
  }

}
