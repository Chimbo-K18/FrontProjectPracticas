import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatorias } from '../models/convocatorias';
import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { convocatorias } from '../models/convocatorias';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  API_URL: string = 'http://localhost:8080/api/convocatorias'

  constructor(private http: HttpClient) { }

  crearConvocatoria(convocatoria: Convocatorias): Observable<Convocatorias>{
    return this.http.post<Convocatorias>(this.API_URL+'/crear', convocatoria);
  }

  getRequest(idConvocatorias: any): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/buscar/${idConvocatorias}`)
  }
export class convocatoriasService {
  url: string = 'http://localhost:8080/api/convocatorias';


  constructor(private http: HttpClient) { }

  listarConvocatorias(){
    return this.http.get<convocatorias[]>(this.url+'/listar');
  }

}
