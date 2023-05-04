import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleConvenio } from '../models/detalleConvenio';

@Injectable({
  providedIn: 'root'
})
export class DetalleconvenioService {

  url: string = 'http://localhost:8080/api/detalleConvenio';
  constructor(private http: HttpClient) { }

  creardetalleConvenio(detalleconvenio: DetalleConvenio): Observable<DetalleConvenio>{
    return this.http.post<DetalleConvenio>(this.url+'/crear',detalleconvenio);
  }
}
