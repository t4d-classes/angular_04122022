import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarHomeComponent } from './components/car-home/car-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarHomeComponent }, // home route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarToolLibRoutingModule { }
