import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatorias } from '../models/convocatorias';
import { Observable,map } from 'rxjs';
import { SolicitudConvocatoria } from '../models/solicitudconvocatoria';
import { SolicitudPracticas } from '../models/solicitudpracticas';

@Injectable({
  providedIn: 'root'
})
export class SolicitudConvocatoriasService {

  API_URL: string = 'http://68.183.134.207:8080/api/solicitudConvocatoria'

  constructor(private http: HttpClient) { }

  crearSolicitudConvocatoria(convocatoriasolicitud: SolicitudConvocatoria): Observable<SolicitudConvocatoria>{
    return this.http.post<SolicitudConvocatoria>(this.API_URL+'/crear', convocatoriasolicitud);
  }

  getRequestSolicitudconvo(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscar/${idConvocatoriasSolicitud}`)
  }

  getRequestSolicitudconvoDirector(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscarcovocatoriadirector/${idConvocatoriasSolicitud}`)
  }

  getRequestSolicitudconvoDirectorTrue(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscarcovocatoriadirectorfalse/${idConvocatoriasSolicitud}`)
  }
  getRequestSolicitudconvoTutor(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscarcovocatoriatutor/${idConvocatoriasSolicitud}`)
  }

  getRequestSolicitudconvoTutorTrue(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscarcovocatoriatutorfalse/${idConvocatoriasSolicitud}`)
  }


  listarSolicitudConvocatorias(){
    return this.http.get<SolicitudConvocatoria[]>(this.API_URL+'/listar');
  }


  listarCheckResponsable(idSolicitudPractica: any): Observable<SolicitudPracticas> {
    return this.http.get<SolicitudPracticas>(`${this.API_URL}/aprobados/${idSolicitudPractica}`)
  }


  Solicitudestudiantes(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/porconvocatoria/${idConvocatoriasSolicitud}`)
  }

  Solicitudestudiantestrue(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/porconvocatoriatrue/${idConvocatoriasSolicitud}`)
  }

  Solicitudestudiantestruepractica(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/porconvocatoriatruepractica/${idConvocatoriasSolicitud}`)
  }

  SolicitudesPorAnexo1(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscaranexo1/${idConvocatoriasSolicitud}`)
  }

  SolicitudesPorAnexo5(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscaranexo5/${idConvocatoriasSolicitud}`)
  }

  SolicitudesPorAnexo7(idConvocatoriasSolicitud: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscaranexo7/${idConvocatoriasSolicitud}`)
  }


  updateSolicitudCnv(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.API_URL}/updateDocument/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }

  updateSolicitudConvocatoria(solicitud: SolicitudConvocatoria, idSolicitudConvocatoria: any) {
    console.log("servicio");
    console.log(solicitud);
    return this.http.put<SolicitudConvocatoria>(this.API_URL + `/actualizar/${idSolicitudConvocatoria}`, solicitud);
  }
  updateSolicitudConvocatoriaS(idSolicitud: any, idDocumento: any) {
    return this.http.put(`${this.API_URL}/updateDocument/${idSolicitud}?idDocumento=${idDocumento}`, null);
  }

  buscarDocumentoSolicitudConv(iddoc: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/buscardocument/${iddoc}`)
  }

  comprobarconvocatoria(idconvocatoria: any , idestudiante:any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/count/${idconvocatoria}/${idestudiante}`)
  }

  //Estudiantes aprobados por responsable
  getEstudiantesAprobados(idTutorEmpresarial:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/listadoAprobados/${idTutorEmpresarial}`).pipe(
      map((data: any[]) => {
        return data.map((item: any) => {
          return {
            nombreConvocatoria: item[0],
            cedula: item[1],
            nombres: item[2],
            carrera: item[3],
            fechaAprobacion: item[4]
          }
        })
      })
    );
  }

  SolicitudesPorEstudianteNoCancelado(cedula: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/SolicitudEstudianteNoCancelado/${cedula}`)
  }

  SolicitudesPorEstudianteCancelado(cedula: any): Observable<SolicitudConvocatoria> {
    return this.http.get<SolicitudConvocatoria>(`${this.API_URL}/SolicitudEstudianteCancelado/${cedula}`)
  }

}
