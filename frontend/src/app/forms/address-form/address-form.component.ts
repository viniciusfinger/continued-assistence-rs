import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Address } from "../../model/address";
import { HomeZone } from "../../model/enum/home-zone";
import { CepService } from "../../services/cep.service";
import { ToastrService } from 'ngx-toastr';
import { AddressService } from "../../services/address.service";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent implements OnInit {
  homeZones: { value: string; label: string }[] = [];
  addressForm: FormGroup;
  address!: Address;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private cepService: CepService, private toastr: ToastrService, private addressService: AddressService, private route: ActivatedRoute) {
    this.addressForm = this.fb.group({
      street: [""],
      number: [""],
      cep: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      neighbourhood: [""],
      city: [""],
      zone: [""],
      observation: [""],
    });

    this.homeZones = this.getHomeZoneOptions();

  }
  
  ngOnInit(): void {
    if (history.state.address){
      this.address = history.state.address;
    } else {
      this.address = new Address(null, "", "", "", "", "", HomeZone.URBAN, "", []);
    }
  }

  removeHome(index: number) {
    this.address.homes.splice(index, 1);
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
      this.buildAddress();
      this.addressService.create(this.address).subscribe({
        next: () => {
          this.toastr.success('Endereço cadastrado com sucesso!', 'Sucesso', {
            progressBar: true,
            timeOut: 3000
          });
          this.router.navigate([""]);
        },
        error: (e) => {
          this.toastr.error('Erro ao cadastrar o endereço.', 'Erro', {
            progressBar: true,
            timeOut: 3000
          });

          console.log(e);
        }
      });
    } else {
      console.log("Formulário inválido");
    }
  }

  consultCep(): void {
    const cep = this.addressForm.get('cep')?.value;
    if (cep) {
      this.loading = true;
      this.addressForm.disable();
      this.cepService.consultCep(cep).subscribe({
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
