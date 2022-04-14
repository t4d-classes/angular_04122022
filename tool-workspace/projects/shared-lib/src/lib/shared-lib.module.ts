import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ItemListComponent } from './components/item-list/item-list.component';


@NgModule({
  declarations: [
    ToolHeaderComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToolHeaderComponent,
    ItemListComponent
  ],
})
export class SharedLibModule { }
