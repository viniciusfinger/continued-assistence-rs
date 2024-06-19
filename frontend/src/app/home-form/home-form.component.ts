import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HomeDTO } from "../model/dto/home-dto";
import { HomeMaterial } from "../model/enum/home-material";
import { FloorMaterial } from "../model/enum/floor-material";
import { AddressDTO } from "../model/dto/address-dto";
import { HomeZone } from "../model/enum/home-zone";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home-form",
  templateUrl: "./home-form.component.html",
  styleUrl: "./home-form.component.css",
})
export class HomeFormComponent implements OnInit {
  homeMaterials: { value: string; label: string }[] = [];
  floorMaterial: { value: string; label: string }[] = [];

  homeForm: FormGroup;
  address!: AddressDTO;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    //todo: está carregando depois do html, verificar
    this.homeMaterials = this.getHomeMaterialOptions();
    this.floorMaterial = this.getFloorMaterialOptions();

    this.homeForm = this.fb.group({
      complement: ["", Validators.required],
      isRented: ["", Validators.required],
      averageFamilyIncome: ["", Validators.required],
      hasWaterTank: ["", Validators.required],
      hasWaterPipe: ["", Validators.required],
      hasSepticTank: ["", Validators.required],
      roomsNumber: [""],
      bathroomsNumber: ["", Validators.required],
    });

    //todo: implement necessitiesDTO[] and personsDTO[]
  }
  ngOnInit(): void {
    this.address = history.state.address;
  }

  submit() {
    if (this.homeForm.valid) {
      //todo: implement
    } else {
      console.log("Form is invalid");
    }
  }

  private getHomeMaterialOptions(): { value: string; label: string }[] {
    return Object.keys(HomeMaterial).map((key) => ({
      value: key.toUpperCase(),
      label: HomeMaterial[key as keyof typeof HomeMaterial],
    }));
  }

  private getFloorMaterialOptions(): { value: string; label: string }[] {
    return Object.keys(FloorMaterial).map((key) => ({
      value: key.toUpperCase(),
      label: FloorMaterial[key as keyof typeof FloorMaterial],
    }));
  }
}
