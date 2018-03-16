import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {
  CalendarModule,
  MenubarModule,
  InputTextModule,
  InputTextareaModule,
  DropdownModule,
  CheckboxModule,
  SidebarModule,
  ButtonModule,
  PanelMenuModule
} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    SidebarModule,
    ButtonModule,
    PanelMenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
