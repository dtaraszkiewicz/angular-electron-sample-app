import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileExplorerService} from '../file-explorer.service';
import {Subscription} from 'rxjs';
import {FileTreeNode} from '../models/file-tree-node';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  treeData: FileTreeNode[];

  constructor(private fileExplorerService: FileExplorerService) {
  }

  ngOnInit() {
    this.fileExplorerService.getFileSystemInfo();
    this.addFilesSubscription();
  }

  private addFilesSubscription() {
    this.subscription.add(
      this.fileExplorerService.files$
        .subscribe(response => {
          this.treeData = response;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
