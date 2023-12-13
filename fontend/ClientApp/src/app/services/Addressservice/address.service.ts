import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Countries} from './../../models/Addressdata';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

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

}

