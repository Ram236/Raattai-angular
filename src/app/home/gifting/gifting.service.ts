import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GiftingApiService {
  constructor(private http: HttpClient) {}

  
  submitGiftingData(formData: {
    NoOfGifts: number;
    NoOfLooms: number;
    loomName: string;
    PersonToConnect: string;
    Email: string;
    ContactNumber: string;
    Address: string;
  }): Observable<any> {    
  
    return this.http.post<any>(environment.apiUrl+'gifting/gifting', formData);
  }
}
