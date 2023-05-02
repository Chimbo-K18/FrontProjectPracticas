import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class rolService {
  url: string = 'http://localhost:8080/api/rol';
  constructor(private http: HttpClient) { }


  
  buscarrol(idrol: any){
    return this.http.get<Rol>(this.url+'/buscar/'+idrol);
  }
}