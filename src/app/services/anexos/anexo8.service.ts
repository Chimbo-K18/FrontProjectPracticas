import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anexo8 } from '../../models/anexos/anexo8';

@Injectable({
  providedIn: 'root'
})
export class Anexo8Service {
  url: string = 'http://68.183.134.207:8080/api/anexo8';
  constructor(private http: HttpClient) { }

  crearAnexo8(anexo8: Anexo8): Observable<Anexo8>{
    return this.http.post<Anexo8>(this.url+'/crear',anexo8);
  }

  getAnexo8(): Observable<Anexo8[]>{
    return this.http.get<Anexo8[]>(this.url+`/listar`);
  }

  updateDocumentoAnexo8(idAnexo8: any, documentoAnexo2: any) {
    return this.http.put(`${this.url}/updateDocument/${idAnexo8}?idDocumento=${documentoAnexo2}`, null);
  }


  UpdateAnexo8(anexo8: any, anexoid:any){
    return this.http.put<Anexo8>(this.url+`/actualizar/${anexoid}`, anexo8);
  }

  buscarId(id: any):Observable<Anexo8>{
    return this.http.get<Anexo8>(this.url + `/buscar/${id}`);
  }

}
