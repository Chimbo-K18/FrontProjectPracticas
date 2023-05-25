import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url: string = 'http://68.183.134.207:8080/api/actividades';
  constructor(private http: HttpClient) { }

  crearActividad(actividad: Actividades): Observable<Actividades>{
    return this.http.post<Actividades>(this.url+'/crear',actividad);
  }

  getActividades(): Observable<Actividades[]>{
    return this.http.get<Actividades[]>(this.url+`/listar`);
  }

  obtenerActividadesPorConvocatoria(convocatoriaId: number): Observable<Actividades[]> {
    const url = `${this.url}/convocatoriasid/${convocatoriaId}`;
    return this.http.get<Actividades[]>(url);
  }

}
