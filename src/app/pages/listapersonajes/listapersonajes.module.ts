import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapersonajesPageRoutingModule } from './listapersonajes-routing.module';

import { ListapersonajesPage } from './listapersonajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapersonajesPageRoutingModule
  ],
  declarations: [ListapersonajesPage]
})
export class ListapersonajesPageModule {}
