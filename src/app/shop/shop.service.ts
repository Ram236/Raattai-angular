import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'products/', {
      headers: headers,
    });
  }

  add2cart(id:string):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'user/cart/add-to-cart/:'+id, {
      headers: headers,
    });
  }
}
