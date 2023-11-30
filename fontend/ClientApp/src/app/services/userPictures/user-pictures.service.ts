import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserPicturesService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://127.0.0.1:5000'; 

  saveUserFriendData(data: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');

    const url = `${this.baseUrl}/savemypictures`; 
    return this.http.post(url, data, { headers: headers });
  }
  getPhotos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getuserpictures`);
  }

  deletePhoto(index: number): Observable<any> {
    const url = `${this.baseUrl}/deleteuserpicture/${index}`;
    return this.http.delete<any>(url);
  }
  updatePhoto(index: number, photo: string): Observable<any> {
    const url = `${this.baseUrl}/edituserpicture/${index}`;
    return this.http.put<any>(url, { photo });
  }
}
