import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversorPageRoutingModule } from './conversor-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { ConversorPage } from './conversor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConversorPage]
})
export class ConversorPageModule {}
