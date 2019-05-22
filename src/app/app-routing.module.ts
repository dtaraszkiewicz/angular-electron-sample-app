import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivityMonitorComponent } from './activity-monitor/activity-monitor/activity-monitor.component';


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'activity-monitor', component: ActivityMonitorComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }