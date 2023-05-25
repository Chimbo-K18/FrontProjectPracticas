import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoAsigTutorEmpresarialService {
  url: string = 'http://68.183.134.207:8080/api/documentoAsigTutorEmpresarial';
  urlPost: string = 'http://68.183.134.207:8080/api/documentoAsigTutorEmpresarial/upload';


    constructor(private http: HttpClient) { }

    public uploadFileDocumentoAsigTutorEmp(file: Blob): Observable<HttpEvent<any>> {
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
