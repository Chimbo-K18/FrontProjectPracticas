import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleConvenio } from '../models/detalleconvenio';


@Injectable({
  providedIn: 'root'
})
export class DetalleconvenioService {

  url: string = 'http://68.183.134.207:8080/api/detalleConvenio';

  constructor(private http: HttpClient) {}

  creardetalleConvenio(detalleconvenio: DetalleConvenio): Observable<DetalleConvenio> {
    return this.http.post<DetalleConvenio>(this.url + '/crear',detalleconvenio);
  }

  getDetalleConvenio(): Observable<DetalleConvenio[]> {
    return this.http.get<DetalleConvenio[]>(`${this.url}/listar`);
  }

  getDetalleConvenioxEmpresa(idEmpresa: any): Observable<DetalleConvenio[]> {
    return this.http.get<DetalleConvenio[]>(`${this.url}/listarXempresa/${idEmpresa}`);
  }


}
