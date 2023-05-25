import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoAnexo2Service {
  url: string = 'http://68.183.134.207:8080/api/documentoAnexo2';
  urlPost: string ="http://68.183.134.207:8080/api/documentoAnexo2/upload";


    constructor(private http: HttpClient) { }

    public uploadFileDocumentoAnexo2(file: Blob): Observable<HttpEvent<any>> {
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
