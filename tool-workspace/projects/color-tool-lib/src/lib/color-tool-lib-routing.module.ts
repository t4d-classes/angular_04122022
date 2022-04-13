import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorHomeComponent } from './components/color-home/color-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ColorHomeComponent }, // home route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorToolLibRoutingModule { }
