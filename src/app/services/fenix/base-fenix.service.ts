import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Verdocentef } from '../../models/verdocentef';
import { Verestudiantef } from '../../models/verestudiantef';

@Injectable({
  providedIn: 'root'
})
export class BaseFenixService {

  constructor(private http: HttpClient) { }

  private urlFenix: string = 'http://68.183.134.207:8080/api/auth';

  public consultarUserEstudiante(cedula: string): Observable<Verestudiantef> {
    return this.http.get<Verestudiantef>(this.urlFenix + `/estudiantefenix/${cedula}`);
  }

  public consultarUserDocente(cedula: string): Observable<Verdocentef> {
    return this.http.get<Verdocentef>(this.urlFenix + `/docentefenix/${cedula}`);
  }

  getPersonasFenix() {
    return this.http.get<Verdocentef[]>(this.urlFenix + '/listardocentes');
  }

  public consultarUserCorreo(correo: string): Observable<Verestudiantef> {
    return this.http.get<Verestudiantef>(this.urlFenix + `/estudiantefenix/${correo}`);
  }

}
