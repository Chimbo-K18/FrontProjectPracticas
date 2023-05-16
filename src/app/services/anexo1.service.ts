import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';

@Injectable({
  providedIn: 'root'
})
export class Anexo1Service {
  url: string = 'http://localhost:8080/api/anexo1';
  constructor(private http: HttpClient) { }

  crearAnexo1(anexo1: Anexo1): Observable<Anexo1>{
    return this.http.post<Anexo1>(this.url+'/crear',anexo1);
  }

  getAnexo1(): Observable<Anexo1[]>{
    return this.http.get<Anexo1[]>(this.url+`/listar`);
  }
  


}