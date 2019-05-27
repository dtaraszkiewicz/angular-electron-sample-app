import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatExpansionModule, MatTreeModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressBarModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressBarModule
  ]
})
export class ElectronMaterialModule { }
