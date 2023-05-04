import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { ResponsablePpp } from '../models/ResponsablePPP';


@Injectable({
  providedIn: 'root',
})
export class responsablePpp {
  private urlGet: string = 'http://localhost:8080/api/representantePPP/carrera';
  private urlGet2: string = 'http://localhost:8080/api/representantePPP/idresponsable';

  private urlPost: string = '';
  private urlDelete: string = '';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) {}

  //Metodo para listar GET
  /*
    getCarrera(): Observable<ResponsablePpp[]>{
    return this.http.get(this.urlGet).pipe(
    map(response=> response as ResponsablePpp[])
    );

    }*/

  getCarrera(carrera: string): Observable<ResponsablePpp> {
    return this.http.get<ResponsablePpp>(`${this.urlGet}/${carrera}`);
  }

  getIdResp(nombre: string): Observable<ResponsablePpp> {
    return this.http.get<ResponsablePpp>(`${this.urlGet2}/${encodeURIComponent(nombre)}`);
  }

  //Metodo para crear POST
  createTutoEmp(tutor: ResponsablePpp): Observable<ResponsablePpp> {
    return this.http.post<ResponsablePpp>(this.urlPost, tutor, {
      headers: this.httpHeaders,
    });
  }

  /*
  //Metodo para editar un tutor Empresarial
  getTutoEmp(id:number):Observable<ResponsablePpp>{
    return this.http.get<ResponsablePpp>(`${this.urlGet}/${id}`);
  }

   //Metodo para eliminar un tutor Empresarial
   eliminarTutoEmp(id:number):Observable<ResponsablePpp>{
    return this.http.delete<ResponsablePpp>(`${this.urlDelete}/${id}`);
  }
  */
}
