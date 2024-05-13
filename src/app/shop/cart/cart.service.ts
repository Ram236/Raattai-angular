import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(userid:string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'user/cart/my-cart/'+userid, {
      headers: headers,
    });
  }

}
