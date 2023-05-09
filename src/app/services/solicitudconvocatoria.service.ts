import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatorias } from '../models/convocatorias';
import { Observable } from 'rxjs';
import { SolicitudConvocatoria } from '../models/solicitudconvocatoria';
import { SolicitudPracticas } from '../models/solicitudpracticas';

@Injectable({
  providedIn: 'root'
})
export class SolicitudConvocatoriasService {

  API_URL: string = 'http://localhost:8080/api/solicitudConvocatoria'

  constructor(private http: HttpClient) { }

  crearSolicitudConvocatoria(convocatoriasolicitud: SolicitudConvocatoria): Observable<SolicitudConvocatoria>{
    return this.http.post<SolicitudConvocatoria>(this.API_URL+'/crear', convocatoriasolicitud);
  }

  getRequestSolicitudconvo(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscar/${idConvocatoriasSolicitud}`)
  }


  listarSolicitudConvocatorias(){
    return this.http.get<SolicitudConvocatoria[]>(this.API_URL+'/listar');
  }


  listarCheckResponsable(idSolicitudPractica: any): Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.API_URL}/aprobados/${idSolicitudPractica}`)
  }

}