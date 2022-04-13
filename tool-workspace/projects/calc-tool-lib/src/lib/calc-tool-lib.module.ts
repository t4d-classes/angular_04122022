import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { CalcToolLibRoutingModule } from './calc-tool-lib-routing.module';

import { CalcToolLibComponent } from './calc-tool-lib.component';
import { CalcHomeComponent } from './components/calc-home/calc-home.component';



@NgModule({
  declarations: [
    CalcToolLibComponent,
    CalcHomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    CalcToolLibRoutingModule,
    NgxsModule.forFeature([]),
  ],
  exports: [
    CalcToolLibComponent
  ]
})
export class CalcToolLibModule { }
