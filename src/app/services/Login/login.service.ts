
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/LoginApi';
  constructor(private http: HttpClient) {}
  private isSuccessSubject = new BehaviorSubject<boolean>(false);
  isSuccess$ = this.isSuccessSubject.asObservable();

  setLoginSuccess(isSuccess: boolean): void {
    localStorage.setItem('isSuccess', isSuccess.toString());
  
    
    this.isSuccessSubject.next(isSuccess);
  }

  getIsSuccessValue(): boolean {
    return this.isSuccessSubject.getValue();
  }

  signUp(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updatePassword(id: number, data: any): Observable<any> {
    const updateUrl = `${this.apiUrl}/${id}`;
    return this.http.put<any>(updateUrl, data);
  }
}
