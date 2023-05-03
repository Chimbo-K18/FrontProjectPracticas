import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleConvenio } from '../models/detalleconvenio';

@Injectable({
  providedIn: 'root'
})
export class DetalleconvenioService {

  URL: string = 'http://localhost:8080/api/detalleConvenio/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getDetalleConvenio() : Observable<DetalleConvenio[]>{
    return this.http.get<DetalleConvenio[]>(`${this.URL}listar`);

  }
}
