import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppHomeComponent },
  { path: 'color-tool', loadChildren: () =>
    import('color-tool-lib').then(mod => mod.ColorToolLibModule) },
  { path: 'calc-tool', loadChildren: () =>
    import('calc-tool-lib').then(mod => mod.CalcToolLibModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
