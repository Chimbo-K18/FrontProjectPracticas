import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatorias } from '../models/convocatorias';
import { Observable } from 'rxjs';

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
}
