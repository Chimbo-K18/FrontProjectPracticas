import { tutorempresarial } from '../models/tutorempresarial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class tutorempresarialService {
  url: string = 'http://localhost:8080/api/tutorEmp';
  urlGet:string="http://localhost:8080/api/tutorEmp/datos"

  constructor(private http: HttpClient) { }

  creartutoremp(tutorempresarial1: tutorempresarial): Observable<tutorempresarial>{
    return this.http.post<tutorempresarial>(this.url+'/crear',tutorempresarial1);
  }

  extraerEmpresarialIdUsuario(idUsuario: any): Observable<tutorempresarial> {
    return this.http.get<tutorempresarial>(
      this.url + `/extraer/ ${idUsuario}`
    );
  }

  getTutorEmp(): Observable<any[]>{
    return this.http.get<any[]>(this.urlGet).pipe(
      map((data: any[]) => {
        return data.map((item: any) => {
          return {
            empresa: item[0],
            usuario: item[1],
            email: item[2],
            telefono: item[3]
          }
        })
      })
    );
  }

  updateEstado(idTutor: any) {
    return this.http.put(`${this.url}/updateStatus/${idTutor}`, null);
  }

  listarEmpresariales() {
    return this.http.get<tutorempresarial[]>(this.url+'/listar');
  }
  
}  
