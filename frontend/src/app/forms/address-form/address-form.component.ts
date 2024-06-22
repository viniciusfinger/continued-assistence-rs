import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Address } from "../../model/address";
import { Home } from "../../model/home";
import { HomeZone } from "../../model/enum/home-zone";
import { CepService } from "../../services/cep.service";
import { ToastrService } from 'ngx-toastr';

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
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private cepService: CepService, private toastr: ToastrService) {
    this.addressForm = this.fb.group({
      street: ["", Validators.required],
      number: ["", Validators.required],
      cep: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
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

  consultarCep(): void {
    const cep = this.addressForm.get('cep')?.value;
    if (cep) {
      this.loading = true;
      this.addressForm.disable();
      this.cepService.consultarCep(cep).subscribe({
        next: data => {
          if (data.logradouro) {
            this.addressForm.patchValue({
              street: data.logradouro,
              neighbourhood: data.bairro,
              city: data.localidade
            });
            this.toastr.success('CEP encontrado com sucesso!', 'Sucesso', {
              progressBar: true,
              timeOut: 3000
            });
          } else {
            this.toastr.warning('CEP não encontrado.', 'Aviso', {
              progressBar: true,
              timeOut: 3000
            });
          }
        },
        error: () => {
          this.toastr.error('Erro ao consultar o CEP.', 'Erro', {
            progressBar: true,
            timeOut: 3000
          });
          this.loading = false;
          this.addressForm.enable();
        },
        complete: () => {
          this.loading = false;
          this.addressForm.enable();
        }
      });
    }
  }
}
