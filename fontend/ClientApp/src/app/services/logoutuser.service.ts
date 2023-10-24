import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutuserService {

  constructor(private http : HttpClient) { }

logoutUser(token : string){
  const data = {Token : token}
  return this.http.put('http://127.0.0.1:5000/logout', data)
}

}
