import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedLibModule } from 'shared-lib';
import { CarToolLibRoutingModule } from './car-tool-lib-routing.module';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { NgxsModule } from '@ngxs/store';
import { CarToolState } from './car-tool-lib.state';

@NgModule({
  declarations: [
    CarTableComponent,
    CarHomeComponent,
    CarFormComponent,
    CarViewRowComponent,
    CarEditRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedLibModule,
    CarToolLibRoutingModule,
    NgxsModule.forFeature([CarToolState]),
  ],
  exports: [
  ]
})
export class CarToolLibModule { }
