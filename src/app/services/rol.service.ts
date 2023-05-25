import { RolToUser } from 'src/app/models/RolToUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class rolService {
  url: string = 'http://68.183.134.207:8080/api/rol';
  constructor(private http: HttpClient) { }



  buscarrol(idrol: any){
    return this.http.get<RolToUser>(this.url+'/buscar/'+idrol);
  }
}
