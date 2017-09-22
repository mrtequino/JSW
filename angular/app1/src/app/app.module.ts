import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppRoutingModule } from "./router/app-routing.module";

import { httpFactory } from "./util/http.factory";

import { SeguridadService } from "./service/seguridad.service";
import { AppComponent } from './app.component';
import { AppInicioComponent } from './component/app-inicio/app-inicio.component';
import { AppLoginComponent } from './component/app-login/app-login.component';
import { AppUsuarioComponent } from './component/app-usuario/app-usuario.component';
import { AppRolComponent } from './component/app-rol/app-rol.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInicioComponent,
    AppLoginComponent,
    AppUsuarioComponent,
    AppRolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SeguridadService, { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
