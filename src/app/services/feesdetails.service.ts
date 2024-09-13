import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeesdetailsService {
  private apiUrl="http://localhost:3000/StudentFeesDetails";
  constructor(private http:HttpClient) { }
  postData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
