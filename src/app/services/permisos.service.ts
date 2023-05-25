import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://68.183.134.207:8080/api/user';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {


  constructor(private httpClient: HttpClient) { }

  public addRoleToUser(roltouser: any): Observable<any> {
    return this.httpClient.put(API_URL + "/rol/addtouser", roltouser);
  }

}

