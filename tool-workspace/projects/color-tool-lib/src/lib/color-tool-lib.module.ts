import { NgModule } from '@angular/core';

import { ColorToolLibRoutingModule } from './color-tool-lib-routing.module';

import { ColorToolLibComponent } from './color-tool-lib.component';
import { ColorHomeComponent } from './components/color-home/color-home.component';



@NgModule({
  declarations: [
    ColorToolLibComponent,
    ColorHomeComponent
  ],
  imports: [
    ColorToolLibRoutingModule
  ],
  exports: [
    ColorToolLibComponent
  ]
})
export class ColorToolLibModule { }
