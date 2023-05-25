import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anexo5 } from '../../models/anexos/anexo5';

@Injectable({
  providedIn: 'root'
})
export class Anexo5Service {
  url: string = 'http://68.183.134.207:8080/api/anexo5';
  constructor(private http: HttpClient) { }

  crearAnexo5(anexo5: Anexo5): Observable<Anexo5>{
    return this.http.post<Anexo5>(this.url+'/crear',anexo5);
  }

  getAnexo5(): Observable<Anexo5[]>{
    return this.http.get<Anexo5[]>(this.url+`/listar`);
  }

  updateDocumentoAnexo5(idAnexo5: any, idDocumento: any) {
    return this.http.put(`${this.url}/updateDocument/${idAnexo5}?idDocumento=${idDocumento}`, null);
  }

  UpdateAnexo5(anexo5: any, anexoid:any){
    return this.http.put<Anexo5>(this.url+`/actualizar/${anexoid}`, anexo5);
  }

  buscarId(id: any):Observable<Anexo5>{
    return this.http.get<Anexo5>(this.url + `/buscar/${id}`);
  }


}
