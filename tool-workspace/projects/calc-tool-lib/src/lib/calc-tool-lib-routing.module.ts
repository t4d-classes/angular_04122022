import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcHomeComponent } from './components/calc-home/calc-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CalcHomeComponent }, // home route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcToolLibRoutingModule { }
