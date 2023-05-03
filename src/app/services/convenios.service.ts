import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenios } from '../models/convenios';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  URL: string = 'http://localhost:8080/api/convenio/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getConvenios() : Observable<Convenios[]>{
    return this.http.get<Convenios[]>(`${this.URL}listar`);

  }

}
