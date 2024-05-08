import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterApiService {

    constructor(private http: HttpClient) { }

    Register(credentials: { username: string, email: string, mobileNumber: number, password: string, confirmPassword: string }): Observable<any> {
        return this.http.post<any>('http://3.6.184.48:3000/user/register', credentials);
    }
}
