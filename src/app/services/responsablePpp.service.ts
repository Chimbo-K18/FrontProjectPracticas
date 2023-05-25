import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { ResponsablePpp } from '../models/ResponsablePPP';


@Injectable({
  providedIn: 'root',
})
export class responsablePpp {

  private API_URL: string = 'http://68.183.134.207:8080/api/representantePPP';
  private urlGet: string = 'http://68.183.134.207:8080/api/representantePPP/carrera';
  private urlGet2: string =
    'http://68.183.134.207:8080/api/representantePPP/carreraID';

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

  getIdResp(carrera2: string): Observable<ResponsablePpp> {
    return this.http.get<ResponsablePpp>(`${this.urlGet2}/${carrera2}`);
  }

  getResponsable(idResponsable: any): Observable<ResponsablePpp> {
    return this.http.get<ResponsablePpp>(
      this.API_URL + `/buscar/ ${idResponsable}`
    );
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
