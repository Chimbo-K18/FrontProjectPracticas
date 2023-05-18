import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-lista-asignados',
  templateUrl: './lista-asignados.component.html',
  styleUrls: ['./lista-asignados.component.css']
})
export class ListaAsignadosComponent implements OnInit {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombreConvocatoria', "nombres", 'carrera', 'fechainicio', 'fechafin'];
  dataSource = new MatTableDataSource<any>([]);
  apiResponse: any = [];
  mitutor!: any;
  tutorEmpre: any;
  numerodeempresarial: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService,
    private http: HttpClient) { }

  datos: {nombreConvocatoria:string,nombres: string, carrera: string, fechainicio: string, fechafin: string}[] = [];


  ngOnInit(): void {
    this.getEstudiantesAsignados();
  }
  
  user!:any;
  getEstudiantesAsignados(){
    this.user = localStorage.getItem("idusuario");
    console.log("id usuario " + this.user)
    this.userService.getuscedula(this.user).subscribe(dataUserEncon => {
    this.http.get('http://localhost:8080/api/practica/listadoAprobados/'+dataUserEncon.cedula).subscribe({
      next: (response: any) => {
        console.log(response);
        this.datos = response;
        this.dataSource = new MatTableDataSource<any>(this.datos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error while fetching the records")
      }
    });
  }); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
