import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppInicioComponent } from '../component/app-inicio/app-inicio.component';
import { AppLoginComponent } from '../component/app-login/app-login.component';
import { AppUsuarioComponent } from '../component/app-usuario/app-usuario.component';
import { AppRolComponent } from '../component/app-rol/app-rol.component';

const routes: Routes = [
    { path: '', redirectTo: '/app-login', pathMatch: 'full' },
    { path: 'app-inicio', component: AppInicioComponent },
    { path: 'app-login', component: AppLoginComponent },
    { path: 'app-usuario', component: AppUsuarioComponent },
    { path: 'app-rol', component: AppRolComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }