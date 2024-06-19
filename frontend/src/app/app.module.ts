import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFormComponent } from './home-form/home-form.component';
import { NecessityFormComponent } from './necessity-form/necessity-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    HomeFormComponent,
    NecessityFormComponent
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
