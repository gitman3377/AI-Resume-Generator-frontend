import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  private URL:String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  addResumeData(params:any): Observable<any> {
    return this.http.post<any>(this.URL+'/AIGenerator/ResumeData',params)
  }
}
