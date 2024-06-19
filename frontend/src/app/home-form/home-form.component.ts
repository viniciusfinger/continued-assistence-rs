import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HomeDTO } from "../model/dto/home-dto";
import { HomeMaterial } from "../model/enum/home-material";
import { FloorMaterial } from "../model/enum/floor-material";
import { AddressDTO } from "../model/dto/address-dto";
import { HomeZone } from "../model/enum/home-zone";
import { ActivatedRoute, Router } from "@angular/router";
import { NecessityDTO } from "../model/dto/necessity-dto";
import { NecessityCategory } from "../model/enum/necessity-category";
import { state } from "@angular/animations";

@Component({
  selector: "app-home-form",
  templateUrl: "./home-form.component.html",
  styleUrl: "./home-form.component.css",
})
export class HomeFormComponent implements OnInit {
  homeMaterials: { value: string; label: string }[] = [];
  floorMaterial: { value: string; label: string }[] = [];

  homeForm: FormGroup;
  home!: HomeDTO;

  address!: AddressDTO;

  necessities!: NecessityDTO[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.homeForm = this.fb.group({
      id: [null],
      complement: ["", Validators.required],
      isRented: ["", Validators.required],
      averageFamilyIncome: ["", Validators.required],
      hasWaterTank: ["", Validators.required],
      hasWaterPipe: ["", Validators.required],
      hasSepticTank: ["", Validators.required],
      roomsNumber: [""],
      bathroomsNumber: ["", Validators.required],
    });

    this.homeMaterials = this.getHomeMaterialOptions();
    this.floorMaterial = this.getFloorMaterialOptions();
  }

  ngOnInit(): void {
    this.address = history.state.address;
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

  private buildHome() {
    this.home = this.homeForm.value;
  }

  openNecessityForm() {
    this.buildHome();
    this.router.navigate(["necessity-form"], {
      state: { home: this.home },
    });
  }

  save() {
    let home: HomeDTO = this.homeForm.value;
    home.necessities = this.necessities;
    this.address.homes.push(home);
    this.router.navigate(["home-form"], { state: { address: this.address } });
  }

  cancel() {
    this.router.navigate(["address-form"], {
      state: { address: this.address },
    });
  }
}
