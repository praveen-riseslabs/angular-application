import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  getCountries(url:string){
    return this.http.get(url);
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

