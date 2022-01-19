import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeComponent } from './node-tree/node/node.component';
import { NodeTreeComponent } from './node-tree/node-tree.component';
import { NodeAddComponent } from './node-tree/node-add/node-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    NodeTreeComponent,
    NodeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
