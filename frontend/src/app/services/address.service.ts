import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly addressUrl = 'localhost:8080/addresses'; //todo: temporary, move to env var

  constructor(private http: HttpClient) {}

  deleteById(id: Number): Observable<any> {
    return this.http.delete(`${this.addressUrl}/${id}`);
  }

  findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressUrl);
  }

  create(address: Address): Observable<Address> {
    return this.http.post<Address>(this.addressUrl, address);
  }
}
