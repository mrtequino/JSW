import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageInicioComponent } from './pages/page-inicio/page-inicio.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/page-login', pathMatch: 'full' },
  { path: 'page-inicio', component: PageInicioComponent },
  { path: 'page-login', component: PageLoginComponent },
  { path: 'page-usuario', component: PageLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
