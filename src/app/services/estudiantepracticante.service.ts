import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatorias } from '../models/convocatorias';
import { Observable } from 'rxjs';
import { SolicitudConvocatoria } from '../models/solicitudconvocatoria';
import { EstudiantePracticante } from '../models/estudiantepracticante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantePracticanteService {

  API_URL: string = 'http://68.183.134.207:8080/api/estudiantepracticante'

  constructor(private http: HttpClient) { }

  crearEstudiantePracticante(estudiantepracticante: EstudiantePracticante): Observable<EstudiantePracticante>{
    return this.http.post<EstudiantePracticante>(this.API_URL+'/crear', estudiantepracticante);
  }

  getRequestEstudiante(idestudiantepracticante: any): Observable<EstudiantePracticante> {
    return this.http.get<EstudiantePracticante>(`${this.API_URL}/buscar/${idestudiantepracticante}`)
  }


  listarEstudiantePracticante(){
    return this.http.get<EstudiantePracticante[]>(this.API_URL+'/listar');
  }

  getRequestEstudianteCedula(idUsuario: any): Observable<EstudiantePracticante> {
    return this.http.get<EstudiantePracticante>(`${this.API_URL}/buscarPorCedula/${idUsuario}`)
  }

  getEstucedulavale(cedula: any): Observable<EstudiantePracticante> {
    return this.http.get<EstudiantePracticante>(`${this.API_URL}/estudiantePracticante/${cedula}`)
  }

}
