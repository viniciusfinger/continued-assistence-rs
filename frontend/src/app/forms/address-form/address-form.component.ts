import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { state } from "@angular/animations";
import { Address } from "../../model/address";
import { Home } from "../../model/home";
import { HomeZone } from "../../model/enum/home-zone";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent {
  homeZones: { value: string; label: string }[] = [];
  addressForm: FormGroup;
  address!: Address;

  homes: Home[];

  constructor(private fb: FormBuilder, private router: Router) {
    this.addressForm = this.fb.group({
      street: ["", Validators.required],
      number: ["", Validators.required],
      cep: ["", Validators.required],
      neighbourhood: ["", Validators.required],
      city: ["", Validators.required],
      zone: ["", Validators.required],
      observation: [""],
    });

    this.homeZones = this.getHomeZoneOptions();

    //todo: remove this, temporary
    this.homes = []
  }

  removeHome(index: number) {
    this.homes.splice(index, 1);
  }

  private buildAddress() {
    let formValues = this.addressForm.value;
    this.address = new Address(
      null,
      formValues.street,
      formValues.number,
      formValues.cep,
      formValues.neighbourhood,
      formValues.city,
      formValues.zone as HomeZone,
      formValues.observation,
      []
    );
  }

  private getHomeZoneOptions(): { value: string; label: string }[] {
    return Object.keys(HomeZone).map((key) => ({
      value: key.toUpperCase(),
      label: HomeZone[key as keyof typeof HomeZone],
    }));
  }

  navigateToHomeForm() {
    this.buildAddress()
    this.router.navigate(["home-form"], {state: {address: this.address}});
  }

  save() {
    if (this.addressForm.valid) {
      console.log("Form is valid");
      console.log(this.addressForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}