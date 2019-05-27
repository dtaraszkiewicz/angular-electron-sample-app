import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ElectronMaterialModule } from './electron-material/electron-material.module';
import { ActivityMonitorModule } from './activity-monitor/activity-monitor.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';
import { FileExplorerModule } from './file-explorer/file-explorer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElectronMaterialModule,
    SharedModule,
    AppRoutingModule,
    ActivityMonitorModule,
    NgxElectronModule,
    FileExplorerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
