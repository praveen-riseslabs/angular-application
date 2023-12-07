import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  private apiUrl = 'http://127.0.0.1:5000'; 

  constructor(private http : HttpClient) { }

  updateUserProfile(userId: number, userData: any): Observable<any> {
    const url = `${this.apiUrl}/updateuser/${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<any>(url, userData, httpOptions);
  }
}
