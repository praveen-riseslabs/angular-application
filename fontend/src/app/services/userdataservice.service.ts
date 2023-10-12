import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://127.0.0.1:5000'; 


  // GET method
  // getUserData(): Observable<any> {
  //   const url = `${this.baseUrl}/getuser`; 
  //   return this.http.get(url);
  // }
  getUserData(url:string):any{
    return this.http.get(url);
  }
  saveUserData(data: any): Observable<any> {
    const url = `${this.baseUrl}/createuser`; 
    return this.http.post(url, data);
  }
}
