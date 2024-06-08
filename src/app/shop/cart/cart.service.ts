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


  initiatePayment1():Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'text/html');
    return this.http.post(environment.apiUrl + 'ccavRequestHandler', `merchant_id=3168733&order_id=0001&currency=INR&amount=1.00&redirect_url=http://localhost:3000/ccavResponse&cancel_url=http://localhost:3000/ccavResponse&language=EN`);
  }

  initiatePayment(payload:any):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'text/html');
    return this.http.post(environment.apiUrl + 'ccavRequestHandler', {currency:payload.currency,amount:payload.amount});
  }


  retrieveTransactionDetails(tid:string):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'orders/order/'+tid, {
      headers: headers,
    });
  }

  clearCart():Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(environment.apiUrl + 'user/cart/my-cart/clear/', {
      headers: headers,
    });
  }

}
