import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
private apiUrl="http://localhost:3000/StudentData";
 
  constructor(private http:HttpClient) { }
  postData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 

}
