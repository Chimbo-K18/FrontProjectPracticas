import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoAnexo6Service {
    url: string = 'http://localhost:8080/api/documentoAnexo6';
    urlPost:string="http://localhost:8080/api/documentoAnexo6/upload";


    constructor(private http: HttpClient) { }

    public uploadFileDocumentoAnexo6(file: Blob): Observable<HttpEvent<any>> {
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