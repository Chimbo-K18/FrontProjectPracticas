import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoSolicitudPracticaService{
    url: string = 'http://localhost:8080/api/documentoSolicitudPracticas'; 
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

    descargarDocumentoSoliPractica(id: any) {
      const url = `${this.url}/download/${id}`;
      return this.http.get(url, { responseType: 'blob' });
    }
  

      
      

      
}