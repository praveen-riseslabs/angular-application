import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
  private baseUrl = 'http://127.0.0.1:5000'; 

  constructor(private http: HttpClient) { }


  updatePassword(data: any): Observable<any> {
    const url = `${this.baseUrl}/updatepassword`; 
    return this.http.post(url, data);
  }
}
