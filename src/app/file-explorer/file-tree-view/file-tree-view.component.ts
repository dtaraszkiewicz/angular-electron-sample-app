import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DynamicFlatNode } from '../models/dynamic-flat-node';
import { DynamicDataSourceService } from '../services/dynamic-data-source.service';
import { DynamicTreeService } from '../services/dynamic-tree.service';


@Component({
  selector: 'app-file-tree-view',
  templateUrl: './file-tree-view.component.html',
  styleUrls: ['./file-tree-view.component.css']
})
export class FileTreeViewComponent implements OnInit {
  constructor(
    private treeService: DynamicTreeService) {

  }

  ngOnInit(): void{
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSourceService(this.treeControl, this.treeService);
    this.dataSource.data = this.treeService.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSourceService;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

}
