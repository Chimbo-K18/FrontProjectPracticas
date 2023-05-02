import { Injectable } from '@angular/core';
import {Usuarios} from '../models/usuarios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const urlEndPoint = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CreateAccountService {


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  public createUserestudiante(nuevoUsuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(urlEndPoint + '/signupestudiante', nuevoUsuario);
  }

  registerUserestudiante(cedula: string, nombres: string, apellidos: string, correo: string, carrera: string, contrasenia: string): Observable<any> {
    return this.http.post(
      urlEndPoint + '/signsignupestudianteup',
      {
        cedula,
        nombres,
        apellidos,
        correo,
        carrera,
        contrasenia,
      },
      httpOptions
    );
  }


  public createUserdocente(nuevoUsuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(urlEndPoint + '/signupdocente', nuevoUsuario);
  }

  registerUserdocente(cedula: string, nombres: string, apellidos: string, correo: string, carrera: string, contrasenia: string): Observable<any> {
    return this.http.post(
      urlEndPoint + '/signupdocente',
      {
        cedula,
        nombres,
        apellidos,
        correo,
        carrera,
        contrasenia,
      },
      httpOptions
    );
  }

  login(correo: string, contrasenia: string): Observable<any> {
    return this.http.post(
      urlEndPoint + '/signin',
      {
        correo,
        contrasenia,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(urlEndPoint + '/signout', { }, httpOptions);
  }
  
}

