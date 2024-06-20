import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFormComponent } from './forms/home-form/home-form.component';
import { AddressFormComponent } from './forms/address-form/address-form.component';
import { NecessityFormComponent } from './forms/necessity-form/necessity-form.component';
import { AddressTableComponent } from './address-table/address-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    HomeFormComponent,
    NecessityFormComponent,
    AddressTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
