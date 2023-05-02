import { usuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  url: string = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) { }

  crearusuario(usuario: usuario): Observable<usuario>{
    return this.http.post<usuario>(this.url+'/crear',usuario);
  }
  buscarus(idUsuario: any){
    return this.http.get<usuario>(this.url+'buscar/'+idUsuario);
  }

}
