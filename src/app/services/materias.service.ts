import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Verdocentef } from '../models/verdocentef';
import { Verestudiantef } from '../models/verestudiantef';
import { verCarreras } from '../models/verCarreras';
import { vermateriasf } from '../models/vermateriasf';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  private urlFenix: string = 'http://68.183.134.207:8080/api/verMaterias';

  getlistarmateriascarrera(nombrecarrera: any):Observable<vermateriasf>{
    return this.http.get<vermateriasf>(this.urlFenix + `/nombre/`+ encodeURIComponent(nombrecarrera))
  }

}
