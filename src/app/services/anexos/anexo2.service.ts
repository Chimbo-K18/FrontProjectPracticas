import { HttpClient ,HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anexo1 } from '../../models/anexos/anexo1';
import { Anexo2 } from '../../models/anexos/anexo2';


@Injectable({
  providedIn: 'root'
})

export class Anexo2Service {
  url: string = 'http://68.183.134.207:8080/api/anexo2';

  constructor(private http: HttpClient) { }

  crearAnexo2(anexo2: Anexo2): Observable<Anexo2> {
    return this.http.post<Anexo1>(this.url + '/crear', anexo2);
  }

  getAnexo2(): Observable<Anexo2[]> {
    return this.http.get<Anexo2[]>(this.url + `/listar`);
  }

  updateDocumentoAnexo2(idAnexo2: any, documentoAnexo2: any) {
    return this.http.put(`${this.url}/updateDocument/${idAnexo2}?idDocumento=${documentoAnexo2}`, null);
  }

}
