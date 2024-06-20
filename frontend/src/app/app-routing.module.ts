import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeFormComponent } from './forms/home-form/home-form.component';
import { AddressFormComponent } from './forms/address-form/address-form.component';
import { NecessityFormComponent } from './forms/necessity-form/necessity-form.component';
import { AddressTableComponent } from './address-table/address-table.component';


const routes: Routes = [
  { path: 'address-form', component: AddressFormComponent },
  { path: 'home-form', component: HomeFormComponent },
  { path: 'necessity-form', component:  NecessityFormComponent },
  { path: 'address', component: AddressTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
