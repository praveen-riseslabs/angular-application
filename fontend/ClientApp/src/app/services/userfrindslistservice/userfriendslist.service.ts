import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfriendslistService {

  constructor(private http : HttpClient) { }
  private baseUrl = 'http://127.0.0.1:5000'; 

  getAllFriendsList(userid: any): Observable<any> {
    const url = `${this.baseUrl}/userfriendslist`; 
    return this.http.post(url, { UserID: userid });
}
}