import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';
import { Responsable_PPP } from '../models/responsable_ppp';

@Injectable({
  providedIn: 'root'
})
export class Responsable_PPPService {
  url: string = 'http://68.183.134.207:8080/api/representantePPP';
  constructor(private http: HttpClient) { }

  crearResponsable(responsable_ppp: Responsable_PPP): Observable<Responsable_PPP>{
    return this.http.post<Responsable_PPP>(this.url+'/crear',responsable_ppp);
  }

  getResponsables() {
    return this.http.get<Responsable_PPP[]>(this.url + '/listar');
  }

  getBuscarcedula(cedula: any): Observable<Responsable_PPP> {
    return this.http.get<Responsable_PPP>(`${this.url}/cedularesponsable/${cedula}`)
  }

  getporid(idresponsable: any): Observable<Responsable_PPP> {
    return this.http.get<Responsable_PPP>(`${this.url}/buscar/${idresponsable}`)
  }

}
