import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-lista-estudiantes-aprobados',
  templateUrl: './lista-estudiantes-aprobados.component.html',
  styleUrls: ['./lista-estudiantes-aprobados.component.css']
})
export class ListaEstudiantesAprobadosComponent implements OnInit {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);


  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombreConvocatoria', "fechaAprobacion", 'nombres', 'carrera'];
  dataSource = new MatTableDataSource<any>([]);
  apiResponse: any = [];
  mitutor!: any;
  tutorEmpre: any;
  numerodeempresarial: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private SolicitudConvocatoriasService: SolicitudConvocatoriasService,
    private userService: UserService, private tutorempresarialService: tutorempresarialService,
    private http: HttpClient) { }

  datos: { nombreConvocatoria: string, nombres: string, carrera: string, fechaAprobacion: string }[] = [];

  ngOnInit(): void {
    this.getEstudiantesAprobados();
  }

  getEstudiantesAprobados() {
    const valorEmpresarial = JSON.parse(
      sessionStorage.getItem('auth-user') || '{}'
    );
    this.mitutor = valorEmpresarial.id;
    console.log(this.mitutor)
    this.tutorempresarialService.extraerEmpresarialIdUsuario(this.mitutor).subscribe(
      (data) => {
        console.log(data);
        this.tutorEmpre = data.idTutorEmpresarial;

        this.http.get('http://localhost:8080/api/solicitudConvocatoria/listadoAprobados/' + this.tutorEmpre).subscribe({
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
      }
    )
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
