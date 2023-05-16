import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';
import { Anexo5 } from '../models/anexo5';
import { Anexo6 } from '../models/anexo6';

@Injectable({
  providedIn: 'root'
})
export class Anexo6Service {
  url: string = 'http://localhost:8080/api/anexo6';
  constructor(private http: HttpClient) { }

  crearAnexo6(anexo6: Anexo6): Observable<Anexo6>{
    return this.http.post<Anexo6>(this.url+'/crear',anexo6);
  }

  getAnexo6(): Observable<Anexo6[]>{
    return this.http.get<Anexo6[]>(this.url+`/listar`);
  }
  


}