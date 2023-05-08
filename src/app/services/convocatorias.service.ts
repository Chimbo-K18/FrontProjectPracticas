import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { convocatorias } from '../models/convocatorias';

@Injectable({
  providedIn: 'root'
})
export class convocatoriasService {
  url: string = 'http://localhost:8080/api/convocatorias';


  constructor(private http: HttpClient) { }

  listarConvocatorias(){
    return this.http.get<convocatorias[]>(this.url+'/listar');
  }

}
