import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { NecessityFormComponent } from './necessity-form/necessity-form.component';

const routes: Routes = [
  { path: 'address-form', component: AddressFormComponent },
  { path: 'home-form', component: HomeFormComponent },
  { path: 'necessity-form', component:  NecessityFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
