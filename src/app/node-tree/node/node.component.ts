import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from './node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input()
  node!: NodeModel;

  @Output()
  delete = new EventEmitter();

  public isTypeButtonsVisible = false;
  public isAddNodeInputVisible = false;
  public newNodeType!: 'file' | 'folder';

  constructor() { }

  ngOnInit(): void {
  }

  showAddNodeInput(type: 'file' | 'folder'): void {
    this.isAddNodeInputVisible = true;
    this.isTypeButtonsVisible = false;
    this.newNodeType = type;
  }

  deleteAction(node: NodeModel): void {
    this.delete.emit(node);
  }
}
