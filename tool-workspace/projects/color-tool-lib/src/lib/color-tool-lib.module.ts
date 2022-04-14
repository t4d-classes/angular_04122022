import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedLibModule } from 'shared-lib';
import { ColorToolLibRoutingModule } from './color-tool-lib-routing.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { NgxsModule } from '@ngxs/store';
import { ColorToolState } from './color-tool-lib.state';

@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorListComponent,
    ColorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedLibModule,    
    ColorToolLibRoutingModule,
    NgxsModule.forFeature([ColorToolState]),    
  ],
  exports: [
  ]
})
export class ColorToolLibModule { }
