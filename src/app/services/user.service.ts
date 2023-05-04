import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRol } from '../models/UsuarioRol'; 
import { Usuarios } from '../models/usuarios';

const API_URL = 'http://localhost:8080/api/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //getAdminBoard(): Observable<any> {
 //   return this.http.get(API_URL + "test/admin", { responseType: 'text' });
  //}

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + '/all');
  }

  getUsuarioListar(idUsuario: any):Observable<UsuarioRol>{
    return this.http.get<UsuarioRol>(API_URL + `/search/ ${idUsuario}`)
  }
  getUsuarioporId(idUsuario: any):Observable<Usuarios>{
    return this.http.get<Usuarios>(API_URL + `/search/ ${idUsuario}`)
  }
  getUsuariocedula(cedula: any):Observable<Usuarios>{
    return this.http.get<Usuarios>(API_URL + `/${cedula}`)
  }

  getcedula(cedula: any):Observable<UsuarioRol>{
    return this.http.get<UsuarioRol>(API_URL + `/buscarcedula/${cedula}`)
  }


}
