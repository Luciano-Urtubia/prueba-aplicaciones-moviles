import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapersonajesPage } from './listapersonajes.page';

const routes: Routes = [
  {
    path: '',
    component: ListapersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapersonajesPageRoutingModule {}
