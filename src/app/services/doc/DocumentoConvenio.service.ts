import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoConvenioService {
    url: string = 'http://localhost:8080/api/documentoConvenio';
    urlPost: string = 'http://localhost:8080/api/documentoConvenio/upload';


    constructor(private http: HttpClient) { }

    public uploadFile(file: Blob): Observable<HttpEvent<any>> {
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