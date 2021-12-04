import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudPersonajesPage } from './crud-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: CrudPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPersonajesPageRoutingModule {}
