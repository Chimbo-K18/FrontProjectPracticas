import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudPracticas } from '../models/solicitudpracticas';

@Injectable({
  providedIn: 'root'
})
export class SolicitudpracticasService {


  
  URL: string = "http://localhost:8080/api/solicitudPractica/";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});


  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listar`);
  }

  getSolicitudesEstado(): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listarestado`);
  }

  getSolicitudesEstadofalse(): Observable<SolicitudPracticas[]>{
    return this.http.get<SolicitudPracticas[]>(`${this.URL}listarestadofalse`);
  }

  saveSolicitud(solicitud : SolicitudPracticas) : Observable<SolicitudPracticas> {
    return this.http.post<SolicitudPracticas>(`${this.URL}crear`, solicitud, {headers:this.httpHeaders});
  }

  getRequest(idSolicitudPracticas:any) : Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.URL}buscar/${idSolicitudPracticas}`)
  }

  
  updateSolicitud(solicitud: SolicitudPracticas, idSolicitudPracticas: any) {
    console.log("servicio");
    console.log(solicitud);
    return this.http.put<SolicitudPracticas>(this.URL + `actualizar/${idSolicitudPracticas}`, solicitud);
  }


}
