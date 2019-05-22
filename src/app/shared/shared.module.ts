import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { ElectronMaterialModule } from '../electron-material/electron-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MatNavbarComponent],
  imports: [
    CommonModule,
    ElectronMaterialModule,
    RouterModule
  ],
  exports: [
    MatNavbarComponent
  ]
})
export class SharedModule { }
