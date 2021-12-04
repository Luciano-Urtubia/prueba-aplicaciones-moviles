import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapersonajesPageRoutingModule } from './listapersonajes-routing.module';

import { ListapersonajesPage } from './listapersonajes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapersonajesPageRoutingModule,
    ComponentsModule,

    
  ],
  declarations: [ListapersonajesPage]
})
export class ListapersonajesPageModule {}
