import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatepasswordService {
  private apiUrl = 'http://127.0.0.1:5000/';
  constructor(private http:HttpClient) { }

  updatePassword(token: string, newPassword: string): Observable<any> {
    const resetUrl = `${this.apiUrl}/otpresetpassword`;
    return this.http.post<any>(resetUrl, { token, newPassword });
  }

}
