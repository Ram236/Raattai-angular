import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../../shop/product/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'products/', {
      headers: headers,
    });
  }

  
}
