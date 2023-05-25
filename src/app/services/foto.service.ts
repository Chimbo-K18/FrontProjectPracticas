import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotoService {


  constructor(
    private http: HttpClient
  ) { }

  private urlApiFoto: string = 'http://68.183.134.207:8080/api/imagen';


  guardarImagenes(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    this.http.post(this.urlApiFoto +'/crear',formData).subscribe();
  }

}
