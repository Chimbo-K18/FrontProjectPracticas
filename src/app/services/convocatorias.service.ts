import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatorias } from '../models/convocatorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  API_URL: string = 'http://68.183.134.207:8080/api/convocatorias'

  constructor(private http: HttpClient) { }

  crearConvocatoria(convocatoria: Convocatorias): Observable<Convocatorias>{
    return this.http.post<Convocatorias>(this.API_URL+'/crear', convocatoria);
  }

  getRequest(idConvocatorias: any): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/buscar/${idConvocatorias}`)
  }

  getConvocatorias(): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/listar`)
  }

  listarConvocatorias(){
    return this.http.get<Convocatorias[]>(this.API_URL+'/listar');
  }

  listarConvocatoriasPorCarrera(carrera:any){
    return this.http.get<Convocatorias[]>(`${this.API_URL}/convocatoriaporcarrera/${carrera}`);
  }

  listarPorestadoConvocatoria(){
    return this.http.get<Convocatorias[]>(this.API_URL+'/practicas');
  }

  listarPorestadoConvocatoriaPorcarrera(carrera:any){
    return this.http.get<Convocatorias[]>(`${this.API_URL}/convocatoriaporcarreraconpractica/${carrera}`);
  }

  buscardoc(iddoc: any): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/convocatoria/documento/${iddoc}`)
  }

  updateDocumentoConvocatoria(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.API_URL}/updateDocument/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }

  SolicitudporConvocatoria(idConvocatorias: any): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/convocatoriaporsolicitud/${idConvocatorias}`)
  }

  ConvocatoriaporEmpresa(idempresa: any): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/convocatoriaporempresa/${idempresa}`)
  }

  ConvocatoriaporEmpresaTrue(idempresa: any): Observable<Convocatorias> {
    return this.http.get<Convocatorias>(`${this.API_URL}/convocatoriaporempresaestadosoli/${idempresa}`)
  }
  listarConvocatoriasSoliPorCarrera(carrera:any){
    return this.http.get<Convocatorias[]>(`${this.API_URL}/convocatoriasoli/${carrera}`);
  }

}
