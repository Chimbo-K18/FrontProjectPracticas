import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';
import { Practica } from '../models/practica';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {
  url: string = 'http://localhost:8080/api/practica';
  constructor(private http: HttpClient) { }

  crearPractica(practica: Practica): Observable<Practica>{
    return this.http.post<Practica>(this.url+'/crear',practica);
  }

  listarPractica(): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+'/listar')
  }

  buscarId(id: any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/buscar/${id}`);
  }

  buscarPorconvocatoria(id: any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/convocatoriaspractica/${id}`);
  }

  buscarPorconvocatoriaParaanexo(id: any, usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaparaanexo/${id}/${usuarioid}`);
  }

  buscarPorconvocatoriaPorestudiante(usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaporestudiante/${usuarioid}`);
  }

  UpdatePractica(practica: Practica, idPractica:any){
    return this.http.put<Practica>(this.url+`/actualizar/${idPractica}`, practica);
  }

  listarPracticaEstudiante(idempresa: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/aprobadas/${idempresa}`)
  }

  updateDocumentoAsigTutorAcademico(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.url}/updateDocumentA/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }

  updateDocumentoAsigTutorEmpresarial(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.url}/updateDocumentE/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }

  listarPorAcademico(cedula: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/practicaporacademico/${cedula}`)
  }

  


  // actualizarEmpresa( id:any, empresa: Empresa):Observable<Empresa>{
  //   return this.http.put<Empresa>(this.url + `/actualizar/${id}`, empresa);
  // }

  // actualizarEmpresa(empresa: Empresa): Observable<Empresa> {
  //   return this.http.put<Empresa>(this.url + `/actualizar/${empresa.idEmpresa}`, empresa);
  // }

  // actualizarEmpresa(empresa: Empresa): Observable<Empresa> {
  //   return this.http.put<Empresa>(this.url+'/actualizar/'+empresa.idEmpresa, empresa);
  // }
  buscarPorUsuarioSolicitud(id: any):Observable<Practica>{
    return this.http.get<Practica>(this.url +`/usuariosxpractica/${id}`);
  }



}
