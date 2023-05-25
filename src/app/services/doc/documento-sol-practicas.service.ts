import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudPracticas } from '../../models/solicitudpracticas';

@Injectable({
  providedIn: 'root'
})
export class DocumentoSolPracticasService {

  API_Jasper: string = 'http://68.183.134.207:4200/api/jasperReport';

  constructor(private http: HttpClient) { }

  generarDocumento(idSolicitud: number){
    return this.http.get<SolicitudPracticas>(this.API_Jasper + '/descargar/' + idSolicitud);
  }
}
