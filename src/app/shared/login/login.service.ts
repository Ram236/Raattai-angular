import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  login(credentials: login): Observable<any> {
    return this.http.post<any>('http://3.6.184.48:3000/user/login', credentials);
  }
}
