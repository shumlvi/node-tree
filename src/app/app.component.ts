import { Component } from '@angular/core';
import { NodeModel } from './node-tree/node/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'folder-tree';

  public readonly tree: NodeModel[] = [
    {
      id: '1',
      type: 'folder',
      name: 'Folder 1',
      children: [
        {
          id: '11',
          type: 'folder',
          name: 'Folder 1-1',
          children: [{
            id: '111',
            type: 'folder',
            name: 'Folder 1-1-1',
            children: []
          }]
        },
        {
          id: '12',
          type: 'folder',
          name: 'Folder 1-2',
          children: []
        },
        {
          id: '13',
          type: 'file',
          name: 'File 1-1',
        }
      ]
    },
    {
      id: '2',
      type: 'folder',
      name: 'Folder 2',
      children: []
    },
    {
      id: '3',
      type: 'file',
      name: 'File 1-1',
    }
  ];

  public isAddNodeInputVisible = false;
  constructor() {
  }
}
