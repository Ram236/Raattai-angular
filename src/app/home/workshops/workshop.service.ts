import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsApiService {
  private workshopUrl = environment.apiUrl+'workshop/workshop';

  constructor(private http: HttpClient) {}

  submitWorkshopForm(formData: any): Observable<any> {
    return this.http.post<any>(this.workshopUrl, formData)
  }
}
