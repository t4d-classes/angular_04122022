import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { SharedLibModule } from 'shared-lib';
import { ColorToolLibRoutingModule } from './color-tool-lib-routing.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { NgxsModule } from '@ngxs/store';
import { ColorToolState } from './color-tool-lib.state';
// import { ColorsDataService } from './services/colors-data.service';

@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorListComponent,
    ColorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // HttpClientModule,
    SharedLibModule,    
    ColorToolLibRoutingModule,
    NgxsModule.forFeature([ColorToolState]),    
  ],
  // providers: [ ColorsDataService ],
  exports: [
  ]
})
export class ColorToolLibModule { }
