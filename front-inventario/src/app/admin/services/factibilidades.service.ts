import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FactibilidadesService {

  uri: string = 'http://localhost:3000/factibilidades';
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-origin': '*'
    })
  }

  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getFactibilidades(): Observable<any> {
    return this.http.get<any>(this.uri, this.httpOptions);
  } 
}
