import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentoSolicitudPracticas } from '../../models/documentoPracticas';

@Injectable({
    providedIn: 'root'
})

export class DocumentoSolicitudPracticaService{
    url: string = 'http://localhost:8080/api/documentoSolicitudPracticas';
    urlPost: string = 'http://localhost:8080/api/documentoSolicitudPracticas/upload';
  

    constructor(private http: HttpClient) { }
    
    public uploadFile(file: Blob): Observable<HttpEvent<any>> {
      const formData = new FormData();
      formData.append('file', file);
      console.log("Servicio subir");
      console.log(" this.apiUploadUrl");
      return this.http.request(new HttpRequest(
        'POST',
        this.urlPost ,
        formData,
        {
          reportProgress: true
        }));
    }
  

      
      

      
}