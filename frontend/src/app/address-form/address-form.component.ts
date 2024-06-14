import { Component } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  //todo: convert to angular form
  street: string;
  number: string;
  cep: string;
  neighbourhood: string;
  city: string;
  zone: string;
  observation: string;

  constructor() {
    this.street = '';
    this.number = '';
    this.cep = '';
    this.neighbourhood = '';
    this.city = '';
    this.zone = '';
    this.observation = '';
  }

  submit() {
    console.log('Form submitted');
    console.log('Street:', this.street);
    console.log('Number:', this.number);
    console.log('CEP:', this.cep);
    console.log('Neighbourhood:', this.neighbourhood);
    console.log('City:', this.city);
    console.log('Zone:', this.zone);
    console.log('Observation:', this.observation);
  }
}
