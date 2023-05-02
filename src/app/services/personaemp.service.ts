
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personasemp } from '../models/personaemp';

@Injectable({
  providedIn: 'root'
})
export class personaempService {
  url: string = 'http://localhost:8080/api/personaemp';
  constructor(private http: HttpClient) { }

  crearpersonaemp(personaemp: personasemp): Observable<personasemp>{
    return this.http.post<personasemp>(this.url+'/crear',personaemp);
  }
  

}
