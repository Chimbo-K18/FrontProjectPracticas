import { HttpClient, HttpEvent, HttpRequest,HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DocumentoSolicitudPracticas } from '../../models/docsGlobales/documentoPracticas';


@Injectable({
    providedIn: 'root'
})

export class DocumentoSolicitudPracticaService{
  url: string = 'http://68.183.134.207:8080/api/documentoSolicitudPracticas';
  urlPost: string = 'http://68.183.134.207:8080/api/documentoSolicitudPracticas/upload';


    constructor(private http: HttpClient) { }

    public uploadFileDocumentoSolicitudPractica(file: Blob): Observable<HttpEvent<any>> {
      const formData = new FormData();
      formData.append('file', file);
      return this.http.request(new HttpRequest(
        'POST',
        this.urlPost ,
        formData,
        {
          reportProgress: true
        }));
    }

    descargarDocumentoSoliPractica(id: any) {
      const url = `${this.url}/download/${id}`;
      return this.http.get(url, { responseType: 'blob' });
    }





}
