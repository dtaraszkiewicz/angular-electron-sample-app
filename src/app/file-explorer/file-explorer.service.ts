import {Injectable} from '@angular/core';
import Fs from 'fs';
import {Subject} from 'rxjs';
import {FileTreeNode} from './models/file-tree-node';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  constructor() {
    this.fs = window['require']('fs');
  }

  private currentPath: string = process.cwd();
  private readonly emptyDirectory = '';
  files$ = new Subject<FileTreeNode[]>();
  currentDirectory$ = new Subject<string>();

  fs: typeof Fs;

  static mapToTreeStructure(paths: string[]): FileTreeNode[] {
    return paths.map((path: string) => {
      return {
        name: path,
        path: path
      };
    });
  }

  getFileSystemInfo(directoryToLoad?: string): string {
    this.fs.readdir(`${this.currentPath}${directoryToLoad ? directoryToLoad : this.emptyDirectory}`, (err: Error, files: [string]) => {
      if (err) {
        console.error(err);
      }

      const nodesWithChildren = files.map((file: string) => {
        const isDirectory = this.fs.statSync(file).isDirectory();

        const newFile: FileTreeNode = {
          name: file,
          children: undefined
        };

        if (isDirectory) {
          newFile.children = FileExplorerService.mapToTreeStructure(this.fs.readdirSync(`${this.currentPath}/${file}`));
        }

        return newFile;
      });


      this.files$.next(nodesWithChildren);
    });

    return `${directoryToLoad}`;
  }
}
