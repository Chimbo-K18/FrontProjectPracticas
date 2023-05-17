import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anexo6 } from '../../models/anexos/anexo6';

@Injectable({
  providedIn: 'root'
})
export class Anexo6Service {
  url: string = 'http://localhost:8080/api/anexo6';
  constructor(private http: HttpClient) { }

  crearAnexo6(anexo6: Anexo6): Observable<Anexo6>{
    return this.http.post<Anexo6>(this.url+'/crear',anexo6);
  }

  getAnexo6(): Observable<Anexo6[]>{
    return this.http.get<Anexo6[]>(this.url+`/listar`);
  }
  
  updateDocumentoAnexo6(idAnexo6: any, idDocumento: any) {
    return this.http.put(`${this.url}/updateDocument/${idAnexo6}?idDocumento=${idDocumento}`, null);
  }



}