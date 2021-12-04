import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitossPage } from './monitoss.page';

const routes: Routes = [
  {
    path: '',
    component: MonitossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitossPageRoutingModule {}
