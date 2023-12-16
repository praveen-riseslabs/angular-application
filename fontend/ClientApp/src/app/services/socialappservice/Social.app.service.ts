// social.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocialappService {
  private apiUrl = 'http://localhost:5000'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFriends(): Observable<any> {
    return this.http.get(`${this.apiUrl}/friends`);
  }

  likeFriend(friendName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/like`, { friendName });
  }
}
