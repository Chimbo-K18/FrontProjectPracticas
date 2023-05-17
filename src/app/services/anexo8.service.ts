import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';
import { Anexo5 } from '../models/anexo5';
import { Anexo6 } from '../models/anexo6';
import { Anexo7 } from '../models/anexo7';
import { Anexo8 } from '../models/anexo8';

@Injectable({
  providedIn: 'root'
})
export class Anexo8Service {
  url: string = 'http://localhost:8080/api/anexo8';
  constructor(private http: HttpClient) { }

  crearAnexo8(anexo8: Anexo8): Observable<Anexo8>{
    return this.http.post<Anexo8>(this.url+'/crear',anexo8);
  }

  getAnexo8(): Observable<Anexo8[]>{
    return this.http.get<Anexo8[]>(this.url+`/listar`);
  }
  


}