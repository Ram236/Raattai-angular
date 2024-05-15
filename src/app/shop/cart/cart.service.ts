import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'user/cart/my-cart/', {
      headers: headers,
    });
  }


  initiatePayment():Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'text/html');
    return this.http.post(environment.localUrl + 'ccavRequestHandler', `"payment_string":"merchant_id=3168733&order_id=0001&currency=INR&amount=1.00&redirect_url=http://localhost:3000/ccavResponse&cancel_url=http://localhost:3000/ccavResponse&language=EN"`);
  }

}
