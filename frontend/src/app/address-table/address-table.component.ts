import { Component } from '@angular/core';
import { Address } from '../model/address';
import { HomeZone } from '../model/enum/home-zone';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrl: './address-table.component.css'
})
export class AddressTableComponent {

  addresses = [
    new Address(1, "Alberto abc", "000", "9210000", "Guajuviras", "Canoas", HomeZone.RURAL, "6", []),
    new Address(2, "teste 2", "1", "2", "3", "4", HomeZone.RURAL, "6", [])
  ]
}
