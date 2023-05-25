import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRol } from '../models/UsuarioRol';
import { Usuarios } from '../models/usuarios';

const API_URL = 'http://68.183.134.207:8080/api/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private resetPasswordUrl = 'http://68.183.134.207:8080/api/user/reset-password';

  //getAdminBoard(): Observable<any> {
 //   return this.http.get(API_URL + "test/admin", { responseType: 'text' });
  //}

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + '/all');
  }
  listarUsuarios() {
    return this.http.get<Usuarios[]>(API_URL+'/all');
  }



  getUsuarioListar(idUsuario: any):Observable<UsuarioRol>{
    return this.http.get<UsuarioRol>(API_URL + `/search/ ${idUsuario}`)
  }
  getUsuarioporId(idUsuario: any):Observable<Usuarios>{
    return this.http.get<Usuarios>(API_URL + `/buscar/ ${idUsuario}`)
  }
  getUsuariocedula(cedula: any):Observable<Usuarios>{
    return this.http.get<Usuarios>(API_URL + `/${cedula}`)
  }

  getcedula(cedula: any):Observable<UsuarioRol>{
    return this.http.get<UsuarioRol>(API_URL + `/buscarcedula/${cedula}`)
  }


  getuscedula(cedula: any):Observable<Usuarios>{
    return this.http.get<Usuarios>(API_URL + `/buscarcedula/${cedula}`)
  }

  getcorreo(correo: any):Observable<Usuarios>{
    return this.http.get<Usuarios>(API_URL + `/correo/${correo}`)
  }

  getRolNombre(correo: any):Observable<string>{
    return this.http.get(API_URL + `/rolnombre/${correo}`, { responseType: 'text' });}
/// listar usuario por rol
 buscarUsuarioRol(idrol: any):Observable<Usuarios>{
  return this.http.get<Usuarios>(API_URL + `/rol/ ${idrol}`)
}

buscarUsuarioPorRol(){
  return this.http.get<Usuarios>(API_URL +`/rolacademico`)
}


  resetPassword(cedula: string, newPassword: string) {
    const resetPasswordRequest = {
      cedula: cedula,
      newPassword: newPassword
    };

    return this.http.post<string>(this.resetPasswordUrl, resetPasswordRequest);
  }


}
