import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url: string = 'http://68.183.134.207:8080/api/empresa';
  constructor(private http: HttpClient) { }

  crearEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url+'/crear',empresa);
  }

  listarEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url+'/listar')
  }

  buscarId(id: any):Observable<Empresa>{
    return this.http.get<Empresa>(this.url + `/buscar/${id}`);
  }

  UpdateEmpresa(empresa: Empresa, idEmpresa:any){
    return this.http.put<Empresa>(this.url+`/actualizar/${idEmpresa}`, empresa);
  }


}
