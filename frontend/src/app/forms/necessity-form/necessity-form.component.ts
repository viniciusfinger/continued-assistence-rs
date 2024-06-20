import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../../model/home';
import { NecessityCategory } from '../../model/enum/necessity-category';
import { Necessity } from '../../model/necessity';


@Component({
  selector: 'app-necessity-form',
  templateUrl: './necessity-form.component.html',
  styleUrl: './necessity-form.component.css'
})
export class NecessityFormComponent {
  categories: { value: string; label: string }[] = [];

  necessityForm: FormGroup;
  home!: Home;

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
    const necessity: Necessity = this.necessityForm.value;
    this.home.necessities.push(necessity);
    this.router.navigate(['home-form'], { state: { home: this.home } });
  }
  
  cancel() {
    this.router.navigate(['home-form'], { state: { home: this.home } });
  }
}
