import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Actividades } from '../models/actividades';
import { Anexo1 } from '../models/anexo1';
import { Anexo2 } from '../models/anexo2';
import { Anexo3 } from '../models/anexo3';

@Injectable({
  providedIn: 'root'
})
export class Anexo3Service {
  url: string = 'http://localhost:8080/api/anexo3';
  constructor(private http: HttpClient) { }

  crearAnexo3(anexo3: Anexo3): Observable<Anexo3>{
    return this.http.post<Anexo3>(this.url+'/crear',anexo3);
  }

  getAnexo3(): Observable<Anexo3[]>{
    return this.http.get<Anexo3[]>(this.url+`/listar`);
  }


}