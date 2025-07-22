import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL:String = environment.baseUrl;
  constructor(protected  http: HttpClient) {}

  initiateLogin(params:any): Observable<any> {
    return this.http.post<any>(this.URL+'/AIGenerator/ManageUsers',params);
  }

  validateLogin(params:any): Observable<any> {
    console.log('service',params)
    return this.http.get<any>(this.URL + '/AIGenerator/AuthoriseUser',{params:params})
  }
}
