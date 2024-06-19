import { Component } from '@angular/core';
import { HomeMaterial } from '../model/enum/home-material';
import { FloorMaterial } from '../model/enum/floor-material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NecessityDTO } from '../model/dto/necessity-dto';
import { AddressDTO } from '../model/dto/address-dto';
import { NecessityCategory } from '../model/enum/necessity-category';
import { HomeDTO } from '../model/dto/home-dto';

@Component({
  selector: 'app-necessity-form',
  templateUrl: './necessity-form.component.html',
  styleUrl: './necessity-form.component.css'
})
export class NecessityFormComponent {
  categories: { value: string; label: string }[] = [];

  necessityForm: FormGroup;
  home!: HomeDTO;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.necessityForm = this.fb.group({
      id: [null],
      description: ["", Validators.required],
      quantity: ["", Validators.required],
      category: ["", Validators.required],
    });

    this.categories = this.getNecessityCategories();
  }

  ngOnInit(): void {
    this.home = history.state.address;
  }

  private getNecessityCategories(): { value: string; label: string }[] {
    return Object.keys(NecessityCategory).map((key) => ({
      value: key.toUpperCase(),
      label: NecessityCategory[key as keyof typeof NecessityCategory],
    }));
  }

  save() {
    const necessity: NecessityDTO = this.necessityForm.value;
    this.home.necessities.push(necessity);
    this.router.navigate(['home-form'], { state: { home: this.home } });
  }
  
  cancel() {
    this.router.navigate(['home-form'], { state: { home: this.home } });
  }
}
