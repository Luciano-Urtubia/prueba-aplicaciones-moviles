import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApitiempoPage } from './apitiempo.page';

const routes: Routes = [
  {
    path: '',
    component: ApitiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApitiempoPageRoutingModule {}
