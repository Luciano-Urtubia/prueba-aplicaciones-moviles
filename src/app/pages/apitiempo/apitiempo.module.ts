import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApitiempoPageRoutingModule } from './apitiempo-routing.module';

import { ApitiempoPage } from './apitiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApitiempoPageRoutingModule
  ],
  declarations: [ApitiempoPage]
})
export class ApitiempoPageModule {}
