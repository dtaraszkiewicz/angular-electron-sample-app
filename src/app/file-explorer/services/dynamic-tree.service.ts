import { Injectable } from '@angular/core';
import { DynamicFlatNode } from '../models/dynamic-flat-node';
import { FileExplorerService } from '../file-explorer.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicTreeService {

  constructor(private fileExplorerService: FileExplorerService) {

  }

  initialData(): DynamicFlatNode[] {
    return this.fileExplorerService.getRoot();
  }

  getChildren(node: DynamicFlatNode): DynamicFlatNode[] {
    return this.fileExplorerService.getChildren(node);
  }

  isExpandable(node: string): boolean {
    return this.fileExplorerService.isExpandable(node);
  }
}
