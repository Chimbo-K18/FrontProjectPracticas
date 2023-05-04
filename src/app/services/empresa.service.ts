import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url: string = 'http://localhost:8080/api/empresa';
  constructor(private http: HttpClient) { }

  crearEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url+'/crear',empresa);
  }

  listarEmpresas(){
    return this.http.get<Empresa[]>(this.url+'/listar');
  }

   buscarempresa(idEmpresa: any):Observable<Empresa>{
    return this.http.get<Empresa>(this.url + `/buscar/ ${idEmpresa}`)
  }

}
