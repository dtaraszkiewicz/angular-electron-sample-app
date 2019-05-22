import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { ElectronMaterialModule } from '../electron-material/electron-material.module';

@NgModule({
  declarations: [MatNavbarComponent],
  imports: [
    CommonModule,
    ElectronMaterialModule
  ],
  exports: [
    MatNavbarComponent
  ]
})
export class SharedModule { }
