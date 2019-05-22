import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavegacionComponent } from "./navegacion/navegacion.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDialogModule
} from "@angular/material";

import { ButtonModule } from "primeng/primeng";
import { CalendarModule } from "primeng/calendar";
import { ConfirmDialogComponent } from './utilitarios/confirm-dialog/confirm-dialog.component';
import { TqColorDirective } from './directivas/tq-color.directive';

@NgModule({
  declarations: [AppComponent, NavegacionComponent, ConfirmDialogComponent, TqColorDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ButtonModule,
    CalendarModule,
    MatDialogModule
  ],
  entryComponents:[ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
