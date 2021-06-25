import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [MatIconModule],
  bootstrap: [AppComponent]
})
export class AppModule { }