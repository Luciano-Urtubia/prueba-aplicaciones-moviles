import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('./pages/conversor/conversor.module').then( m => m.ConversorPageModule)
  },

  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'listapersonajes',
    loadChildren: () => import('./pages/listapersonajes/listapersonajes.module').then( m => m.ListapersonajesPageModule)
  },
  {
    path: 'personajes/:id',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'crud-personajes',
    loadChildren: () => import('./pages/crud-personajes/crud-personajes.module').then( m => m.CrudPersonajesPageModule)
  },
  {
    path: 'monitoss',
    redirectTo: 'monitoss', 
  },
  {
    path: 'monitoss/:id',
    loadChildren: () => import('./pages/monitoss/monitoss.module').then( m => m.MonitossPageModule)
  },
 
  {
    path: '**',
    redirectTo: 'home'
  },
 
 
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
