import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'prueba',
    pathMatch: 'full'
  },
  { path: "prueba", component: PruebaComponent },
  { path: "prueba", component: PruebaComponent, outlet:'sidebar'},
  { path: "prueba", component: PruebaComponent, outlet:'sidebar1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
