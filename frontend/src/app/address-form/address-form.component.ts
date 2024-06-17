import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      cep: ['', Validators.required],
      neighbourhood: ['', Validators.required],
      city: ['', Validators.required],
      zone: ['', Validators.required],
      observation: ['']
    });
  }

  submit() {
    if (this.addressForm.valid) {
      console.log('Form submitted');
      console.log('Form Values:', this.addressForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}