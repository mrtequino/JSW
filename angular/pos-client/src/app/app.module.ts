import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";

import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatSidenavModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule, MatToolbarModule, MatListModule
} from "@angular/material";

import { MatFormFieldModule } from "@angular/material/form-field";

import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AuthInterceptor } from "./security/auth-interceptor";

import { AppComponent } from "./app.component";
import { DialogOverviewExampleDialogComponent } from "./dialog-overview-example-dialog/dialog-overview-example-dialog.component";

import { ButtonModule, InputTextModule, CardModule } from "primeng/primeng";
import { PrimengExampleComponent } from "./view/primeng-example/primeng-example.component";
import { AngularMaterialExampleComponent } from "./view/angular-material-example/angular-material-example.component";
import { W3cssExampleComponent } from "./view/w3css-example/w3css-example.component";
import { MaterializeExampleComponent } from "./view/materialize-example/materialize-example.component";
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainFooterComponent } from './main-footer/main-footer.component';

const appRoutes: Routes = [
  { path: "primeng", component: PrimengExampleComponent },
  { path: "angular-material", component: AngularMaterialExampleComponent },
  { path: "w3css", component: W3cssExampleComponent },
  { path: "materialize", component: MaterializeExampleComponent },
  {
    path: "",
    redirectTo: "/primeng",
    pathMatch: "full"
  }
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialogComponent,
    PrimengExampleComponent,
    AngularMaterialExampleComponent,
    W3cssExampleComponent,
    MaterializeExampleComponent,
    MainNavBarComponent,
    MainFooterComponent
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule
  ],
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
