import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Verdocentef } from '../models/verdocentef';
import { Verestudiantef } from '../models/verestudiantef';
import { verCarreras } from '../models/verCarreras';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  private urlFenix: string = 'http://68.183.134.207:8080/api/verCarreras';

  getCarreras(){
    return this.http.get<verCarreras[]>(this.urlFenix + '/nombrescarrera');
  }

  getDocentes(){
    return this.http.get<Verdocentef[]>(this.urlFenix + '/nombresdocentes');
  }
}
