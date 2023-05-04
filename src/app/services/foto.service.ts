import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotoService {


  constructor(
    private http: HttpClient
  ) { }

  private urlApiFoto: string = '';


  guararImagenes(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    this.http.post(this.urlApiFoto + '/crear', formData).subscribe();
  }

}