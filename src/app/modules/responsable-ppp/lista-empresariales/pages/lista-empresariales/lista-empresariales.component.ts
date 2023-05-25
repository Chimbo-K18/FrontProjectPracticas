import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { tutorempresarial } from 'src/app/models/tutorempresarial';


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

  tutor: tutorempresarial = new tutorempresarial();
  empresasUsuarios!: any[];
  matcher = new MyErrorStateMatcher();
  displayedColumns: string[] = ['idUsuario', 'nombreEmpresa', 'nombreUsuario', 'correoUsuario', 'telefonoUsuario', 'acciones', 'update'];
  dataSource = new MatTableDataSource<any>([]);
  apiResponse: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private tutoresEmpreService: tutorempresarialService, private http: HttpClient, private responsableppservice: Responsable_PPPService) {
    this.capturarTutorEmpresarial();
  }

  datos: { idUsuario: string, nombreEmpresa: string, nombreUsuario: string, correoUsuario: string, telefonoUsuario: string }[] = [];

  ngOnInit(): void {
    this.getTutorEmpresarial();
  }

  idusuario: any;
  dataresponsable: any;
  getTutorEmpresarial() {

    this.idusuario = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
      this.dataresponsable = datausu.idResponsablePPP;
      console.log(this.dataresponsable);

      this.http.get('http://localhost:8080/api/tutorEmp/datos/' + this.dataresponsable).subscribe({

        next: (response: any) => {
          console.log(response);
          this.datos = response;
          this.dataSource = new MatTableDataSource<any>(this.datos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("No hay tutores empresariales disponibles")
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

  eliminarTutor(update: number): void {
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
          res => this.tutoresEmpreService.getTutorEmp()
            .subscribe({
              next: (res) => {
                this.apiResponse = res;
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              },
              error: (err) => {
                alert("Error while fetching the records")
              }
            })
        )
        Swal.fire("Listo!", "Se deshabilito correctamente!", "success");
      } else {

        Swal.fire("Usted ha cancelado la eliminación");

      }
    })
  }

  actualizarTutorEmp() {
    const idTutor = this.tutoresEmpreService.idTutor;
    const empresa = this.tutoresEmpreService.empresa;
    const nombreTutor = this.tutoresEmpreService.nombreTutor;
    const emailTutor = this.tutoresEmpreService.emailTutor;
    const contactoTutor = this.tutoresEmpreService.contactoTutor;

    // Llama al método de actualización del servicio pasando los valores actualizados
    this.tutoresEmpreService.actualizarTutoremp(idTutor, empresa, nombreTutor, emailTutor, contactoTutor).subscribe(
      (resultado) => {
        console.log("Tutor empresarial actualizado correctamente:", resultado);
        // Realiza alguna acción adicional después de actualizar, si es necesario
      },
      (error) => {
        console.error("Error al actualizar el tutor empresarial:", error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );

  }

  traerTutor(idTutor: any) {
    localStorage.setItem('id', String(idTutor));
    console.log(idTutor);
    this.capturarTutorEmpresarial();
  }

  //Metodo de Capturar
  captura: any;
  capturarTutorEmpresarial() {
    this.captura = localStorage.getItem("id");
    console.log(this.captura);
    this.tutoresEmpreService.buscarId(this.captura).subscribe(response => {
      this.tutor.cargo = response.cargo;
      this.tutor.departamento = response.departamento;
      this.tutor.titulo = response.titulo;
    });
  }

  actualizarTutor() {
    this.tutoresEmpreService.UpdateTutor(this.tutor, this.captura)
      .subscribe(response => {
        console.log(response);
        console.log("La tutor ha sido actualizada correctamente.");
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Tutor Actualizada Exitosamente',
          showConfirmButton: false,
          timer: 2000,
        });
      }, error => {

        console.log('Error al actualizar la tutor:', error);
        Swal.fire(
          'Error',
          'No se pudo actualizar la tutor. Por favor, inténtelo nuevamente.',
          'error'
        );
      });
  }


}