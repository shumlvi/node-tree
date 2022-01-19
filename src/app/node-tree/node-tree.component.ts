import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from './node/node.model';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.scss']
})
export class NodeTreeComponent implements OnInit {
  @Input()
  nodes: NodeModel[] = [];

  @Output()
  delete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteNode(node: any): void {
    this.nodes!.splice(this.nodes!.indexOf(node), 1);
  }
}
