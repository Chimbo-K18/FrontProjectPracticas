import { HttpClient, HttpEvent, HttpRequest,HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DocumentoSolicitudPracticas } from '../../models/documentoPracticas';


@Injectable({
    providedIn: 'root'
})

export class DocumentoSolicitudPracticaService{
    urlPost: string = 'http://localhost:8080/api/documentoSolicitudPracticas/upload';


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




}
