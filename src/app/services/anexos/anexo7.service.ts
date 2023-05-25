import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anexo7 } from '../../models/anexos/anexo7';

@Injectable({
  providedIn: 'root'
})
export class Anexo7Service {
  url: string = 'http://68.183.134.207:8080/api/anexo7';
  constructor(private http: HttpClient) { }

  crearAnexo7(anexo7: Anexo7): Observable<Anexo7>{
    return this.http.post<Anexo7>(this.url+'/crear',anexo7);
  }

  getAnexo7(): Observable<Anexo7[]>{
    return this.http.get<Anexo7[]>(this.url+`/listar`);
  }

  updateDocumentoAnexo7(idAnexo7: any, documentoAnexo2: any) {
    return this.http.put(`${this.url}/updateDocument/${idAnexo7}?idDocumento=${documentoAnexo2}`, null);
  }


  UpdateAnexo7(anexo7: any, anexoid:any){
    return this.http.put<Anexo7>(this.url+`/actualizar/${anexoid}`, anexo7);
  }

  buscarId(id: any):Observable<Anexo7>{
    return this.http.get<Anexo7>(this.url + `/buscar/${id}`);
  }
}
