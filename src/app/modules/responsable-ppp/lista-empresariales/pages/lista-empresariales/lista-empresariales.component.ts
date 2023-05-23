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



  constructor(private tutoresEmpreService: tutorempresarialService, 
    private http: HttpClient,
    private responsableppservice: Responsable_PPPService) { }

  datos: {idUsuario:string,nombreEmpresa: string, nombreUsuario: string, correoUsuario: string, telefonoUsuario: string}[] = [];

  ngOnInit(): void {
    this.getTutorEmpresarial();
  }
  
  idusuario: any;
  dataresponsable: any;
  // getTutorEmpresarial(){

  //   this.idusuario = localStorage.getItem("idusuario");
  //   this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
    
  //     if (datausu && datausu.idResponsablePPP) {
  //       this.dataresponsable = datausu.idResponsablePPP;
  //       console.log(this.dataresponsable);
        
  //       this.http.get('http://localhost:8080/api/tutorEmp/datos/'+this.dataresponsable).subscribe({

  //     next: (response: any) => {
  //       console.log(response);
  //       this.datos = response;
  //       this.dataSource = new MatTableDataSource<any>(this.datos);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     error: (err) => {
  //       alert("No hay tutores empresariales disponibles")
  //     }
  //   });
  //     } else {
  //       console.error('El objeto datausu o la propiedad idResponsablePPP son nulos.');
  //     }  this.dataresponsable = datausu.idResponsablePPP;
  //   console.log(this.dataresponsable);
    
    
  // });  
  // }
  // getTutorEmpresarial() {
  //   this.idusuario = localStorage.getItem("idusuario");
    
  //   this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(
  //     (datausu) => {
  //       if (datausu && datausu.idResponsablePPP) {
  //         this.dataresponsable = datausu.idResponsablePPP;
  //         console.log(this.dataresponsable);
  
  //         this.http.get('http://localhost:8080/api/tutorEmp/datos/' + this.dataresponsable).subscribe(
  //           (response: any) => {
  //             console.log(response);
  //             this.datos = response;
  //             this.dataSource = new MatTableDataSource<any>(this.datos);
  //             this.dataSource.paginator = this.paginator;
  //             this.dataSource.sort = this.sort;
  //           },
  //           (error) => {
  //             alert("No hay tutores empresariales disponibles");
  //           }
  //         );
  //       } else {
  //         console.error('El objeto datausu o la propiedad idResponsablePPP son nulos.');
  //       }
  //     },
  //     (error) => {
  //       console.error("Error al obtener el responsable del PPP:", error);
  //     }
  //   );
  // }
  getTutorEmpresarial() {
    this.idusuario = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
      if (datausu && datausu.idResponsablePPP) {
        this.dataresponsable = datausu.idResponsablePPP;
        console.log(this.dataresponsable);
        
        this.http.get('http://localhost:8080/api/tutorEmp/datos/' + this.dataresponsable).subscribe({
          next: (response: any) => {
            console.log(response);
            this.datos = response;
            console.log(this.datos); // Verifica si los datos están asignados correctamente
            
            this.dataSource = new MatTableDataSource<any>(this.datos);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
  
            // Aplica el filtro y la paginación nuevamente
            this.dataSource.filter = '';
            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          },
          error: (err) => {
            alert("No hay tutores empresariales disponibles")
          }
        });
      } else {
        console.error('El objeto datausu o la propiedad idResponsablePPP son nulos.');
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

  // Cierra el modal
  // Puedes usar cualquier método para cerrar el modal, como 'data-bs-dismiss="modal"' o a través de tu lógica personalizada
}

}