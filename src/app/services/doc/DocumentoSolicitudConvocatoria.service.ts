import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DocumentoSolicitudConvocatoria{
  url: string = 'http://68.183.134.207:8080/api/documentoSolicitudConvocatoria';
  urlPost: string = 'http://68.183.134.207:8080/api/documentoSolicitudConvocatoria/upload';

    constructor(private http: HttpClient) { }

    public uploadFileSolicitudConvocatoria(file: Blob): Observable<HttpEvent<any>> {
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

    descargarSolicitudConvocatoria(id: any) {
      const url = `${this.url}/download/${id}`;
      return this.http.get(url, { responseType: 'blob' });
    }



}
