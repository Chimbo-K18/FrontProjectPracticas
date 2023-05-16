import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-lista-soli-enviadas',
  templateUrl: './lista-soli-enviadas.component.html',
  styleUrls: ['./lista-soli-enviadas.component.css']
})
export class ListaSoliEnviadasComponent implements OnInit {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  
  matcher = new MyErrorStateMatcher();
  
  displayedColumns: string[] = ['nombreSolicitud','fechaEnvioSolicitud', 'fechaAceptacion', 'nombre_carrera',"estadoSolicitud"];
  dataSource = new MatTableDataSource<any>([]);
  apiResponse: any = [];

  //Datos para extraer tutor empresarial
  mitutor !: string;
  tutorEmpre !: any;
  numerodeempresarial !: any;
  listadoSolicitudes:SolicitudPracticas[]=[];
  estadoTexto!:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private empresarialService: tutorempresarialService,
               private solicitudP:SolicitudpracticasService) { }

  datos: {nombreSolicitud:string,fechaEnvioSolicitud: string, fechaAceptacion: string, nombre_carrera: string, estadoSolicitud:boolean}[] = [];


  ngOnInit(): void {
    this.extraerEmpresarial();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  extraerEmpresarial() {

    const valorEmpresarial = JSON.parse(
      sessionStorage.getItem('auth-user') || '{}'
    );
    this.mitutor = valorEmpresarial.id;

    console.log(this.mitutor)

    this.empresarialService.extraerEmpresarialIdUsuario(this.mitutor).subscribe(
      (data) => {
        this.tutorEmpre = data;
        this.numerodeempresarial = data.empresa.idEmpresa
        this.solicitudP.getBuscarPorEmpresa(this.numerodeempresarial).subscribe({
          next: (response: any) => {
            let solicitud=new SolicitudPracticas();
            console.log(response);
            this.datos = response;
            //this.estadoTexto = solicitud.estadoSolicitud ? "Pendiente" : "Aprobada";
            this.estadoTexto = solicitud.estadoSolicitud ? "Pendiente" : "Aprobada";
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

}