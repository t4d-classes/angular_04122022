import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { CalcToolLibRoutingModule } from './calc-tool-lib-routing.module';

import { CalcToolState } from './calc-tool-lib.state';
import { CalcHomeComponent } from './components/calc-home/calc-home.component';



@NgModule({
  declarations: [
    CalcHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalcToolLibRoutingModule,
    NgxsModule.forFeature([CalcToolState]),
  ],
  exports: [
  ]
})
export class CalcToolLibModule { }
