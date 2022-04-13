import { NgModule } from '@angular/core';

import { CalcToolLibRoutingModule } from './calc-tool-lib-routing.module';

import { CalcToolLibComponent } from './calc-tool-lib.component';
import { CalcHomeComponent } from './components/calc-home/calc-home.component';



@NgModule({
  declarations: [
    CalcToolLibComponent,
    CalcHomeComponent
  ],
  imports: [
    CalcToolLibRoutingModule,
  ],
  exports: [
    CalcToolLibComponent
  ]
})
export class CalcToolLibModule { }
