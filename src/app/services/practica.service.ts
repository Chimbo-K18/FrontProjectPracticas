import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';
import { Practica } from '../models/practica';
import { Anexo1 } from '../models/anexos/anexo1';
import { Anexo5 } from '../models/anexos/anexo5';
import { Anexo6 } from '../models/anexos/anexo6';
import { Convocatorias } from '../models/convocatorias';
import { Anexo7 } from '../models/anexos/anexo7';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {
  url: string = 'http://68.183.134.207:8080/api/practica';
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

  buscarPorconvocatoriaParaAnexo1(id: any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/convocatoriasparaanexo1/${id}`);
  }

  buscarPorconvocatoriaParaanexo(id: any, usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaparaanexo/${id}/${usuarioid}`);
  }

  buscarPorconvocatoriaParaanexo5(id: any, usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaparaanexo5/${id}/${usuarioid}`);
  }

  buscarPorconvocatoriaPorestudiante(usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaporestudiante/${usuarioid}`);
  }

  buscarPorconvocatoriaPorestudianteAnexo3(usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaporestudianteanexo3/${usuarioid}`);
  }

  buscarPorconvocatoriaPorestudianteAnexo6(usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaporestudianteanexo6/${usuarioid}`);
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

  listarPorResponsable(cedula: any): Observable<Convocatorias[]>{
    return this.http.get<Convocatorias[]>(this.url+`/convocatoriasporresponsable/${cedula}`)
  }

  listarPorEmpresaAnexo7(idempresa: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/practicaporempresaanexo7/${idempresa}`)
  }

  listarPorListarAnexo7(tutor: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/practicalistaranexo7/${tutor}`)
  }

  buscarPorconvocatoriaPorestudianteAnexo8(usuarioid:any):Observable<Practica>{
    return this.http.get<Practica>(this.url + `/practicaporestudianteanexo8/${usuarioid}`);
  }

  buscarPorUsuarioSolicitud(id: any):Observable<Practica>{
    return this.http.get<Practica>(this.url +`/usuariosxpractica/${id}`);
  }

  listarPorAnexo1Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo/${carrera}`)
  }

  listarPorAnexo2Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo2/${carrera}`)
  }

  listarPorAnexo3Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo3/${carrera}`)
  }

  listarPorAnexo4Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo4/${carrera}`)
  }

  listarPorAnexo5Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo5/${carrera}`)
  }

  listarPorAnexo6Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo6/${carrera}`)
  }

  listarPorAnexo7Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo7/${carrera}`)
  }

  listarPorAnexo8Recibe(carrera: any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/carreraparaanexo8/${carrera}`)
  }

  DocumentoAnexo1Recibe(idpractica:any): Observable<Anexo1[]>{
    return this.http.get<Anexo1[]>(this.url+`/documentoanexo1/${idpractica}`);
  }

  PracticaDocumentoAnexo(cedula:any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/documentoanexoPractica/${cedula}`);
  }

  DocumentoAnexoAcademicoRecibe(cedula:any): Observable<Practica[]>{
    return this.http.get<Practica[]>(this.url+`/documentoanexoParaAcademico/${cedula}`);
  }

  DocumentoAnexo5Recibe(cedula:any): Observable<Anexo5[]>{
    return this.http.get<Anexo5[]>(this.url+`/documentoanexo5/${cedula}`);
  }

  DocumentoAnexo6Recibe(cedula:any): Observable<Anexo6[]>{
    return this.http.get<Anexo6[]>(this.url+`/documentoanexo6/${cedula}`);
  }

  DocumentoAnexo6RecibeAcademico(cedula:any): Observable<Anexo6[]>{
    return this.http.get<Anexo6[]>(this.url+`/documentoAcademicoanexo6/${cedula}`);
  }

  DocumentoAnexo7RecibeAcademico(cedula:any): Observable<Anexo7[]>{
    return this.http.get<Anexo7[]>(this.url+`/documentoEmpresarialanexo7/${cedula}`);
  }

  DocumentoAnexo8RecibeAcademico(cedula:any): Observable<Anexo7[]>{
    return this.http.get<Anexo7[]>(this.url+`/documentoAcademicoanexo8/${cedula}`);
  }

  DocumentoAnexo8RecibeEmpresarial(cedula:any): Observable<Anexo7[]>{
    return this.http.get<Anexo7[]>(this.url+`/documentoEmpresarialanexo8/${cedula}`);
  }
}
