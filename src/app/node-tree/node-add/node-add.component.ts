import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../node/node.model';

@Component({
  selector: 'app-node-add',
  templateUrl: './node-add.component.html',
  styleUrls: ['./node-add.component.scss']
})
export class NodeAddComponent implements OnInit {
  @Input()
  parentNodeList!: NodeModel[];
  @Input()
  type!: 'folder' | 'file' | 'unset' | null;
  @Output()
  close = new EventEmitter();
  public name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addNode() {
    if (this.name) {
      const node: NodeModel = {
        id: Date.now().toString(),
        name: this.name,
        type: this.type
      };
      if (this.type === 'folder') {
        node.children = [];
      }
      this.parentNodeList.push(node);
    }
    this.cancel();
  }

  cancel() {
    this.close.emit();
  }

}
