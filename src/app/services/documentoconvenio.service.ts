import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentoConvenio } from '../models/documentoConvenio';

@Injectable({
  providedIn: 'root'
})
export class DocumentoconvenioService {
  url: string = 'http://localhost:8080/api/documentoConvenio';
  constructor(private http: HttpClient) { }

  subirdocumentoConvenio(documentoconvenio: DocumentoConvenio): Observable<DocumentoConvenio>{
    return this.http.post<DocumentoConvenio>(this.url+'/subir',documentoconvenio);
  }
}
