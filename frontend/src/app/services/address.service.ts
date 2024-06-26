import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly addressUrl = 'localhost:8080/address'; //todo: temporary

  constructor(private http: HttpClient) {}

  deleteById(id: Number): Observable<any> {
    return this.http.get(`${this.addressUrl}/${id}`);
  }
}
