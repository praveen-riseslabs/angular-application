import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  getCountries(url:string):Observable<any>{
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

