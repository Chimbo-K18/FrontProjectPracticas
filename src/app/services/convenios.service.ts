import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenios';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  URL: string = 'http://68.183.134.207:8080/api/convenio/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getConvenios() : Observable<Convenio[]>{
    return this.http.get<Convenio[]>(`${this.URL}listar`);

  }
  buscarId(id: any):Observable<Convenio>{
    return this.http.get<Convenio>(this.URL + `buscar/${id}`);
  }

  UpdateConvenio(convenios: Convenio, idConvenio:any){
    return this.http.put<Convenio>(this.URL+`actualizar/${idConvenio}`, convenios);
  }


}
