import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveuserfriendsdataService {

  constructor(private http : HttpClient) { }
  private baseUrl = 'http://127.0.0.1:5000'; 

  saveUserFriendData(data: any): Observable<any> {
    const url = `${this.baseUrl}/saveuserfriends`; 
    return this.http.post(url, data);
  }
  getUserData(url:string):any{
    return this.http.get(url);
  }
}
