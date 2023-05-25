import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoAsigTutorAcademico {
  url: string = 'http://68.183.134.207:8080/api/documentoAsigTutorAcademico';
  urlPost: string = 'http://68.183.134.207:8080/api/documentoAsigTutorAcademico/upload';


    constructor(private http: HttpClient) { }

    public uploadFileDocumentoAsigTutor(file: Blob): Observable<HttpEvent<any>> {
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
