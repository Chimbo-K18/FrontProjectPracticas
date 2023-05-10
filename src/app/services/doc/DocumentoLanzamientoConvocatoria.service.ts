import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoLanzamientoConvocatoria{
    url: string = 'http://localhost:8080/api/documentoConvocatoria';
    urlPost: string = 'http://localhost:8080/api/documentoConvocatoria/upload';


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

//////traer docuemnto
getPdf(id: any) {
  return this.http.get(this.url + `/download/${id}`, { responseType: 'blob' });
}


}
