import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Home } from "../../model/home";
import { HomeMaterial } from "../../model/enum/home-material";
import { FloorMaterial } from "../../model/enum/floor-material";
import { Address } from "../../model/address";
import { HomeZone } from "../../model/enum/home-zone";
import { ActivatedRoute, Router } from "@angular/router";
import { Necessity } from "../../model/necessity";
import { NecessityCategory } from "../../model/enum/necessity-category";
import { state } from "@angular/animations";
import { Person } from "../../model/person";

@Component({
  selector: "app-home-form",
  templateUrl: "./home-form.component.html",
  styleUrl: "./home-form.component.css",
})
export class HomeFormComponent implements OnInit {
  homeMaterials: { value: string; label: string }[] = [];
  floorMaterial: { value: string; label: string }[] = [];

  homeForm: FormGroup;
  home!: Home;

  address!: Address;

  necessities!: Necessity[];
  persons!: Person[];

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
      homeMaterial: ["", Validators.required],
      floorMaterial: ["", Validators.required],
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
    this.home = {
      id: this.homeForm.value.id,
      complement: this.homeForm.value.complement,
      isRented: this.homeForm.value.isRented,
      averageFamilyIncome: this.homeForm.value.averageFamilyIncome,
      necessities: [],
      persons: [],
      structure: {
        material: this.homeForm.value.homeMaterial,
        floorMaterial: this.homeForm.value.floorMaterial,
        hasWaterTank: this.homeForm.value.hasWaterTank,
        hasWaterPipe: this.homeForm.value.hasWaterPipe,
        hasSepticTank: this.homeForm.value.hasSepticTank,
        roomsNumber: this.homeForm.value.roomsNumber,
        bathroomsNumber: this.homeForm.value.bathroomsNumber,
      }
    }
  }

  openNecessityForm() {
    this.buildHome();
    this.router.navigate(["necessity-form"], {
      state: { home: this.home },
    });
  }

  save() {
    this.buildHome();
    this.address.homes.push(this.home);
    this.router.navigate(["address-form"], { state: { address: this.address } });
  }

  cancel() {
    this.router.navigate(["address-form"], {
      state: { address: this.address },
    });
  }
}
