
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas_empresa } from '../models/personaemp';

@Injectable({
  providedIn: 'root'
})
export class personaempService {
  url: string = 'http://localhost:8080/api/personaemp';
  constructor(private http: HttpClient) { }

  crearpersonaemp(personaemp: Personas_empresa): Observable<Personas_empresa>{
    return this.http.post<Personas_empresa>(this.url+'/crear',personaemp);
  }
  
  
  buscarpersona(idpersona: any):Observable<Personas_empresa>{
    return this.http.get<Personas_empresa>(this.url +`/buscar/${idpersona}`);
  }
  
  buscarcedulapersona(cedula: any):Observable<Personas_empresa>{
    return this.http.get<Personas_empresa>(this.url +`/buscarcedula/${cedula}`);
  }
 actualizarpersona(idpersona: any):Observable<Personas_empresa>{
  return this.http.put<Personas_empresa>(this.url +`/actualizar/${idpersona}`,Personas_empresa);
 }
 buscarcorreopersona(correo: any):Observable<Personas_empresa>{
  return this.http.get<Personas_empresa>(this.url +`/buscarcorreo/${correo}`);
 }
}
