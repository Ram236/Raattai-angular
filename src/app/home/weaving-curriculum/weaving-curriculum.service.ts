import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeavingCurriculumApiService {

  private apiUrl = environment.apiUrl+"curriculum/add";

  constructor(private http: HttpClient) { }

  submitWeavingCurriculumData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData)
  }
}
