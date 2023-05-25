import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
  url: string = 'http://68.183.134.207:8080/api/convenio';
  constructor(private http: HttpClient) { }

  crearConvenio(convenio: Convenio): Observable<Convenio>{
    return this.http.post<Convenio>(this.url+'/crear',convenio);
  }

  updateDocumentoConvenio(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.url}/updateDocument/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }


}
