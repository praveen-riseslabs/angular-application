import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http : HttpClient) { }
  private apiUrl = 'http://127.0.0.1:5000'; 

  // getVerifiedEmial(email: string) : Observable<any>{
  //   return this.http.get(`${this.apiUrl}/forgotpasswords?Email=${email}`);
  
  chaeckEmail(email:string) {
    const data = { Email: email };
    return this.http.post(`${this.apiUrl}/forgotpasswords`, data);
}
}