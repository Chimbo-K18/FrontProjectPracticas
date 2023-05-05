import { tutorempresarial } from '../models/tutorempresarial';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class tutorempresarialService {
  url: string = 'http://localhost:8080/api/tutorEmp';


  constructor(private http: HttpClient) { }

  creartutoremp(tutorempresarial1: tutorempresarial): Observable<tutorempresarial>{
    return this.http.post<tutorempresarial>(this.url+'/crear',tutorempresarial1);
  }



  extraerEmpresarialIdUsuario(idUsuario: any): Observable<tutorempresarial> {
    return this.http.get<tutorempresarial>(
      this.url + `/extraer/ ${idUsuario}`
    );
  }


}
