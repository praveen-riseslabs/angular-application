import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  private baseUrl = 'http://127.0.0.1:5000'; 

  // saveUserData(data: any): Observable<any> {
  //   const url = `${this.baseUrl}/createuser`; 
  //   return this.http.post(url, data);
  // }

  login(email: string, password: string) {
    const data = { Email: email, Password: password };
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
