import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Requerimientos } from '../models/requerimientos';

@Injectable({
  providedIn: 'root'
})
export class RequermientoService {
  url: string = 'http://68.183.134.207:8080/api/requerimientos';
  constructor(private http: HttpClient) { }

  crearRequerimiento(requerimientos: Requerimientos): Observable<Requerimientos>{
    return this.http.post<Requerimientos>(this.url+'/crear',requerimientos);
  }

  getRequerimiento(): Observable<Requerimientos[]>{
    return this.http.get<Requerimientos[]>(this.url+`/listar`);
  }

  getRequerimientoPorSolicitud(idsolicitud: any): Observable<Requerimientos[]>{
    return this.http.get<Requerimientos[]>(this.url+`/porsolicitud/${idsolicitud}`);
  }

}
