import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFormComponent } from './forms/home-form/home-form.component';
import { NecessityFormComponent } from './forms/necessity-form/necessity-form.component';
import { AddressTableComponent } from './address-table/address-table.component';
import { PersonFormComponent } from './forms/person-form/person-form.component';
import { AddressFormComponent } from './forms/address-form/address-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    HomeFormComponent,
    NecessityFormComponent,
    AddressTableComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    ToastrModule.forRoot(),
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
