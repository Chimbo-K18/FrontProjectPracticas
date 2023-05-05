import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentoSolicitudPracticas } from '../../models/documentoPracticas';

@Injectable({
    providedIn: 'root'
})

export class DocumentoSolicitudPracticaService{
    url: string = 'http://localhost:8080/api/documentoSolicitudPracticas';
    constructor(private http: HttpClient) { }
  
    saveDocumentoSP(documentoSP: DocumentoSolicitudPracticas): Observable<DocumentoSolicitudPracticas>{
      return this.http.post<DocumentoSolicitudPracticas>(this.url+'/subir',documentoSP);
    }

    saveDocumento(file: File): Observable<any>{
        const formData = new FormData();
        formData.append('file', file);
      
        return this.http.post<any>(this.url+'/subir', formData);
      }

      
      

      
}