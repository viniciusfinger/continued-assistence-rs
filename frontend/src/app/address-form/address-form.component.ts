import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddressDTO } from "../model/dto/address-dto";
import { HomeZone } from "../model/enum/home-zone";
import { HomeDTO } from "../model/dto/home-dto";
import { HomeMaterial } from "../model/enum/home-material";
import { FloorMaterial } from "../model/enum/floor-material";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent {
  homeZones: { value: string; label: string }[] = [];
  addressForm: FormGroup;
  homes: HomeDTO[];

  constructor(private fb: FormBuilder) {
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
    this.homes = [
      new HomeDTO(
        null,
        "Complemento da casa 1",
        true,
        [],
        [],
        50000,
        HomeMaterial.MASONRY,
        FloorMaterial.CEMENT,
        true,
        true,
        true,
        3,
        3
      ),
      new HomeDTO(
        null,
        "Complemento da casa 2",
        true,
        [],
        [],
        50000,
        HomeMaterial.MASONRY,
        FloorMaterial.CEMENT,
        true,
        true,
        true,
        3,
        3
      ),
    ];
  }

  submit() {
    if (this.addressForm.valid) {
      const formValues = this.addressForm.value;
      let address = this.createAddressDTO(formValues);
      console.log(address);
    } else {
      console.log("Form is invalid");
    }
  }

  removeHome(index: number) {
    this.homes.splice(index, 1);
  }

  private createAddressDTO(formValues: any): AddressDTO {
    return new AddressDTO(
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
}
