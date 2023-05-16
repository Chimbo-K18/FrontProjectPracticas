import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';
import { Anexo2 } from '../models/anexo2';

@Injectable({
  providedIn: 'root'
})
export class Anexo2Service {
  url: string = 'http://localhost:8080/api/anexo2';
  constructor(private http: HttpClient) { }

  crearAnexo2(anexo2: Anexo2): Observable<Anexo2>{
    return this.http.post<Anexo1>(this.url+'/crear',anexo2);
  }

  getAnexo2(): Observable<Anexo2[]>{
    return this.http.get<Anexo2[]>(this.url+`/listar`);
  }


}