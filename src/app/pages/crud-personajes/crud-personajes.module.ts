import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrudPersonajesPageRoutingModule } from './crud-personajes-routing.module';
import { CrudPersonajesPage } from './crud-personajes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPersonajesPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [CrudPersonajesPage]
})
export class CrudPersonajesPageModule {}
