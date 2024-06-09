import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsApiService {  

  constructor(private http: HttpClient) { }

  sendContactForm(data: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'contact/contact', data);
  }
}
