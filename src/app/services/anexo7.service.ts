import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';
import { Anexo5 } from '../models/anexo5';
import { Anexo6 } from '../models/anexo6';
import { Anexo7 } from '../models/anexo7';

@Injectable({
  providedIn: 'root'
})
export class Anexo7Service {
  url: string = 'http://localhost:8080/api/anexo7';
  constructor(private http: HttpClient) { }

  crearAnexo7(anexo7: Anexo7): Observable<Anexo7>{
    return this.http.post<Anexo7>(this.url+'/crear',anexo7);
  }

  getAnexo7(): Observable<Anexo7[]>{
    return this.http.get<Anexo7[]>(this.url+`/listar`);
  }
  


}