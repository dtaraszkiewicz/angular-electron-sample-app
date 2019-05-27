import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { FileTreeViewComponent } from './file-tree-view/file-tree-view.component';
import {ElectronMaterialModule} from '../electron-material/electron-material.module';

@NgModule({
  declarations: [FileExplorerComponent, FileTreeViewComponent],
  imports: [
    CommonModule,
    ElectronMaterialModule
  ]
})
export class FileExplorerModule { }
