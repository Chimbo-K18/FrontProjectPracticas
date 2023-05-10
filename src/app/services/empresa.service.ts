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

  listarEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url+'/listar')
  }

  buscarId(id: any):Observable<Empresa>{
    return this.http.get<Empresa>(this.url + `/buscar/${id}`);
  }


  UpdateEmpresa(empresa: Empresa, idEmpresa:any){
    return this.http.put<Empresa>(this.url+`/actualizar/${idEmpresa}`, empresa);
  }

  // actualizarEmpresa( id:any, empresa: Empresa):Observable<Empresa>{
  //   return this.http.put<Empresa>(this.url + `/actualizar/${id}`, empresa);
  // }

  // actualizarEmpresa(empresa: Empresa): Observable<Empresa> {
  //   return this.http.put<Empresa>(this.url + `/actualizar/${empresa.idEmpresa}`, empresa);
  // }

  // actualizarEmpresa(empresa: Empresa): Observable<Empresa> {
  //   return this.http.put<Empresa>(this.url+'/actualizar/'+empresa.idEmpresa, empresa);
  // }


  existeEmpresa(rucEmpresa: any){
    return this.http.get<Empresa>(this.url + '/byRuc/'+rucEmpresa);
  }


}
