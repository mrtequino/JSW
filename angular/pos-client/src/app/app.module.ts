import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { AuthInterceptor } from "./security/auth-interceptor";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    /*{
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient]
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
