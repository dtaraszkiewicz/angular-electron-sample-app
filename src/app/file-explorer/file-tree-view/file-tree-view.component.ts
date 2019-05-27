import {Component, Input, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {FlatTreeControl} from '@angular/cdk/tree';
import {FileTreeFlatNode} from '../models/file-tree-flat-node';
import {FileTreeNode} from '../models/file-tree-node';

@Component({
  selector: 'app-file-tree-view',
  templateUrl: './file-tree-view.component.html',
  styleUrls: ['./file-tree-view.component.css']
})
export class FileTreeViewComponent implements OnInit {
  @Input() treeData: FileTreeNode[];

  transformer = (node: FileTreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  constructor() {
  }

  treeControl = new FlatTreeControl<FileTreeFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  ngOnInit() {
    this.dataSource.data = this.treeData;
  }

  hasChild = (_: number, node: FileTreeFlatNode) => node.expandable;

}
