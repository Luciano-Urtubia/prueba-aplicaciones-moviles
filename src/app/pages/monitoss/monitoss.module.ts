import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitossPageRoutingModule } from './monitoss-routing.module';

import { MonitossPage } from './monitoss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitossPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MonitossPage]
})
export class MonitossPageModule {}
