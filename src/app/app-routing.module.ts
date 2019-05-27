import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivityMonitorComponent } from './activity-monitor/activity-monitor/activity-monitor.component';
import { FileExplorerComponent } from './file-explorer/file-explorer/file-explorer.component';


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'activity-monitor', component: ActivityMonitorComponent},
    {path: 'file-explorer', component: FileExplorerComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }