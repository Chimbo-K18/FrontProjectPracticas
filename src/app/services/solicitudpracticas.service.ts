import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudPracticas } from '../models/solicitudpracticas';

@Injectable({
  providedIn: 'root'
})
export class SolicitudpracticasService {



  URL: string = "http://68.183.134.207:8080/api/solicitudPractica/";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});


  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listar`);
  }

  getSolicitudesActividades(): Observable<SolicitudPracticas[]> {
    return this.http.get<SolicitudPracticas[]>(`${this.URL}activas`);
  }

  getSolicitudesActividadesPorResposanble(idresponsableppp:any): Observable<SolicitudPracticas[]> {
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listaporidresponsableppp/${idresponsableppp}`);
  }
  getSolicitudesEstado(): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listarestado`);
  }

  getSolicitudesPorEmpresa(idempresa:any): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listasolicitudcheck/${idempresa}`);
  }

  getSolicitudesEstadotrue(nombrecarrera:any): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listarestadoentrue/${nombrecarrera}`);
  }

  getSolicitudesPor(): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listarestado`);
  }

  getSolicitudesEstadofalse(nombrecarrera:any): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listarestadocarrera/${nombrecarrera}`);
  }

  saveSolicitud(solicitud : SolicitudPracticas) : Observable<SolicitudPracticas> {
    return this.http.post<SolicitudPracticas>(`${this.URL}crear`, solicitud, {headers:this.httpHeaders});
  }

  getRequest(idSolicitudPracticas:any) : Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.URL}buscar/${idSolicitudPracticas}`)
  }


  getBuscarPorEmpresa(idEmpresa:any) : Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.URL}buscarporempresa/${idEmpresa}`)
  }

  getBuscarTodasXEmpresa(idEmpresa:any) : Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.URL}buscarTodas/${idEmpresa}`)
  }

  updateSolicitud(solicitud: SolicitudPracticas, idSolicitudPracticas: any) {
    console.log("servicio");
    console.log(solicitud);
    return this.http.put<SolicitudPracticas>(this.URL + `actualizar/${idSolicitudPracticas}`, solicitud);
  }

  updateSolicitudPractica(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.URL}updateDocument/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }


  buscarDocumentSolicitud(idDocument: any): Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.URL}buscardocument/${idDocument}`)
  }


  listarDocentes(id: any):Observable<SolicitudPracticas>{
    return this.http.get<SolicitudPracticas>(this.URL +`nombrestutores/${id}`);
  }
}
