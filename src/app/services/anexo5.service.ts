import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';
import { Anexo5 } from '../models/anexo5';

@Injectable({
  providedIn: 'root'
})
export class Anexo5Service {
  url: string = 'http://localhost:8080/api/anexo5';
  constructor(private http: HttpClient) { }

  crearAnexo5(anexo5: Anexo5): Observable<Anexo5>{
    return this.http.post<Anexo5>(this.url+'/crear',anexo5);
  }

  getAnexo5(): Observable<Anexo5[]>{
    return this.http.get<Anexo5[]>(this.url+`/listar`);
  }
  


}