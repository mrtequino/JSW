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

//componentes Prime NG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    DialogModule
  ],
  providers: [SeguridadService, { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
