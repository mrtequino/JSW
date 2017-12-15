import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';

//punto de entrada a la aplicación
import { AppComponent } from './app.component';

//router
import { AppRoutingModule } from "./app-routing.module";

//interceptor http
import { httpFactory } from "./http/http.factory";

//servicios http
import { SeguridadService } from './service/seguridad-service';

//utilitarios
import { Mensaje } from "./util/mensaje";

//primefaces
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrowlModule, MessagesModule, InputTextModule, InputTextareaModule, CalendarModule, AutoCompleteModule, ButtonModule, SplitButtonModule, DropdownModule, PasswordModule, ListboxModule, RadioButtonModule, DialogModule } from "primeng/primeng";
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInicioComponent } from './pages/page-inicio/page-inicio.component';
import { PageUsuarioComponent } from './pages/page-usuario/page-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInicioComponent,
    PageUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    AutoCompleteModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    PasswordModule,
    ListboxModule,
    RadioButtonModule,
    DialogModule,
    MessagesModule,
    GrowlModule
  ],
  providers: [SeguridadService, Mensaje, { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
