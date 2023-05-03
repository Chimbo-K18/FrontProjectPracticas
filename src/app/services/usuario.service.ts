import { Usuarios } from 'src/app/models/usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  url: string = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) { }

  crearusuario(usuario: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.url+'/crear',usuario);
  }
  buscarus(idUsuario: any){
    return this.http.get<Usuarios>(this.url+'buscar/'+idUsuario);
  }

}
