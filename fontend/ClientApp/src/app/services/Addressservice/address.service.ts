import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Countries} from './../../models/Addressdata';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://127.0.0.1:5000'; 

  getCountries(url:string): Observable<Countries[]> {
    return this.http.get<Countries[]>(url);
  }
  getStateById(url:string){
    return this.http.get(url);
  }
  getDistrictById(url:string){
    return this.http.get(url);
  }
  getMandalsbyId(url:string){
    return this.http.get(url);
  }
  saveAddress(data: any): Observable<any> {
    const url = `${this.baseUrl}/saveaddress`; 
    return this.http.post(url, data);
  }
}

