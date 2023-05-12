import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-lista-empresariales',
  templateUrl: './lista-empresariales.component.html',
  styleUrls: ['./lista-empresariales.component.css']
})
export class ListaEmpresarialesComponent implements OnInit {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  empresasUsuarios!: any[];

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['idUsuario','nombreEmpresa', 'nombreUsuario', 'correoUsuario', 'telefonoUsuario',"acciones"];
  dataSource = new MatTableDataSource<any>([]);
  apiResponse: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private tutoresEmpreService: tutorempresarialService, private http: HttpClient) { }

  datos: {idUsuario:string,nombreEmpresa: string, nombreUsuario: string, correoUsuario: string, telefonoUsuario: string}[] = [];

  ngOnInit(): void {
    this.getTutorEmpresarial();
  }
  
  getTutorEmpresarial(){
    this.http.get('http://localhost:8080/api/tutorEmp/datos').subscribe({
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarTutor(update:number):void{
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro/a de deshabilitar este registro?',
      showConfirmButton: true,
      confirmButtonText: 'DESHABILITAR',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonText: 'CANCELAR',
      cancelButtonColor: '#d33',
      buttonsStyling: true,   
  
  }).then((result) => {
      if (result.isConfirmed) {
        this.tutoresEmpreService.updateEstado(update).subscribe(
          res=>this.tutoresEmpreService.getTutorEmp()
          .subscribe({
            next:(res)=>{
                this.apiResponse=res;
                this.dataSource=new MatTableDataSource(res);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
            },
            error:(err)=>{
              alert("Error while fetching the records")
            }
          })
        )
     Swal.fire("Listo!", "Se deshabilito correctamente!", "success");
      }else{

Swal.fire("Usted ha cancelado la eliminación");

      }
})}

}
