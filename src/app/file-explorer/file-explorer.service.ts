import { Injectable } from '@angular/core';
import Fs from 'fs';
import { DynamicFlatNode } from './models/dynamic-flat-node';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  constructor() {
    this.fs = window['require']('fs');
  }

  private currentPath: string = process.cwd();
  fs: typeof Fs;

  getRoot(): DynamicFlatNode[] {
    return this.fs.readdirSync(`${this.currentPath}`)
      .map((file: string) => this.mapFileToNode(file, file));
  }

  getChildren(node: DynamicFlatNode): DynamicFlatNode[] {
    return this.fs.readdirSync(node.relativePath)
      .map((file: string) => {
        return this.mapDependOnLevel(file, node)
      });
  }

  isExpandable(path: string): boolean {
    return this.fs.statSync(path).isDirectory();
  }

  private mapFileToNode(fileName: string, filePath: string, level = 0) {
    return new DynamicFlatNode(fileName, level, this.fs.statSync(filePath).isDirectory(), false, filePath);
  }

  private mapDependOnLevel(file: string, node: DynamicFlatNode) {
    if (node.relativePath === node.item) {
      return this.mapFileToNode(file, `${node.item}/${file}`, node.level + 1);
    }
    return this.mapFileToNode(file, `${node.relativePath}/${file}`, node.level + 1);
  }
}
