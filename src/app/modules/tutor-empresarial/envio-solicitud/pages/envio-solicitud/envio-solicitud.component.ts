import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/models/convenios';
import { ConveniosService } from 'src/app/services/convenios.service';
import { DetalleConvenio } from 'src/app/models/detalleconvenio';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';
import { responsablePpp } from 'src/app/services/responsablePpp.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { ResponsablePpp } from 'src/app/models/ResponsablePPP';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { DocumentoSolPracticasService } from 'src/app/services/documento-sol-practicas.service';
import { DocumentoSolicitudPracticas } from 'src/app/models/documentoPracticas';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-envio-solicitud',
  templateUrl: './envio-solicitud.component.html',
  styleUrls: ['./envio-solicitud.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class EnvioSolicitudComponent implements OnInit {
  detalles: any;
  nombre: any;
  idRes: any;



  //myForm: FormGroup;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ceroFormGroup = this._formBuilder.group({
    cerotCtrl: ['', Validators.required],
  });

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //llamado a la clase
  public solicitudPractica: SolicitudPracticas = new SolicitudPracticas();
  convenios: Convenio[] | undefined;
  listaDetalles: DetalleConvenio[] | undefined;

  mivariable!: string;
  micarrera!: string;
  micarrera2!: string;
  responsable!: ResponsablePpp;
  responsable2!: any;
  responsableKO!: any;
  mitutor !: string;
  tutorEmpre !: any;
  solicitudGenerada !: any;

  respon!: ResponsablePpp;

  constructor(
    private _formBuilder: FormBuilder,
    private solicitud: SolicitudpracticasService,
    private router: Router,
    private convenioService: ConveniosService,
    private detalleService: DetalleconvenioService,
    private responsableService: responsablePpp,
    private empresarialService : tutorempresarialService,
    private documentoSolService: DocumentoSolPracticasService
  ) {}

  ngOnInit(): void {
    //this.listar();


    this.listarDetalles();
    this.extraerEmpresarial();
    const dropArea = document.querySelector<HTMLElement>('.drop_box')!;
    const button = dropArea.querySelector<HTMLButtonElement>('button')!;
    const input = dropArea.querySelector<HTMLInputElement>('input')!;

    let file: File;
    let filename: string;

    button.onclick = () => {
      input.click();
    };
  }

  seleccionarDetalle(detalles: any) {
    sessionStorage.setItem('detalleSeleccionado', JSON.stringify(detalles));
    this.obtenerCarrera();

    const valor = JSON.parse(
      sessionStorage.getItem('detalleSeleccionado') || '{}'
    );
    this.mivariable = valor.nombre_carrera;


    this.getCurrentDate();
    this.obtenerID();

  }

  getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public create() {


    this.solicitudPractica.nombre_carrera = this.mivariable;
    this.solicitudPractica.fechaEnvioSolicitud = this.getCurrentDate();
    this.solicitudPractica.responsablePPP = this.responsableKO;
    this.solicitudPractica.tutorEmpresarial = this. tutorEmpre;

    return this.solicitud.saveSolicitud(this.solicitudPractica).subscribe(
      (res) => {
        //this.router.navigate(['/administrador/lista-vehiculos'])
        this.solicitudGenerada = res.idSolicitudPracticas;
        console.log(this.solicitudGenerada)
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se a creado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      },

      (err) => console.error(err)
    );
  }

  validaRequest() {
    if (
      !this.solicitud.getRequest(this.solicitudPractica.idSolicitudPracticas)
    ) {
      console.log('Solicitud Encontrada');
    } else {
      this.create();
    }
  }

  public listar() {
    this.convenioService
      .getConvenios()
      .subscribe((res) => (this.convenios = res));
  }

  public listarDetalles() {
    this.detalleService
      .getDetalleConvenio()
      .subscribe((res) => (this.listaDetalles = res));


  }

  public nombreResponsable: string = '';
  public nombreResponsable2: any;

  obtenerCarrera() {

    const valorCarrera = JSON.parse(
      sessionStorage.getItem('detalleSeleccionado') || '{}'
    );
    this.micarrera = valorCarrera.nombre_carrera;

    this.responsableService.getCarrera(this.micarrera).subscribe(
      (data) => {
        this.responsable = data;
        console.log(data);

        this.nombreResponsable = data.nombreCompleto; // Asignar el valor a la variable de clase
        // Llamar al método getIdResp con el parámetro
      },
      (error) => {
        console.error(error);
      }
    );
  }

  extraerEmpresarial(){

    const valorEmpresarial = JSON.parse(
      sessionStorage.getItem('auth-user') || '{}'
    );
    this.mitutor = valorEmpresarial.id;

    console.log(this.mitutor)

    this.empresarialService.extraerEmpresarialIdUsuario(this.mitutor).subscribe(
      (data) => {

        this.tutorEmpre = data;
        console.log(this.tutorEmpre)
      }
    )


  }

  obtenerID() {
    const valCarrera = JSON.parse(
      sessionStorage.getItem('detalleSeleccionado') || '{}'
    );
    this.micarrera2 = valCarrera.nombre_carrera;

    this.responsableService.getIdResp(this.micarrera2).subscribe(
      (data) => {
        this.responsable2 = data;
        console.log(data);

        this.nombreResponsable2 = data; // Asignar el valor a la variable de clase

        this.responsableService
          .getResponsable(this.responsable2)
          .subscribe((data01) => {

            this.responsableKO = data01;
            console.log(data01);

          });
        // Llamar al método getIdResp con el parámetro
      },
      (error) => {
        console.error(error);
      }
    );
  }


  descargarPDF() {
  const idSolicitud = this.solicitudGenerada; // obtén el ID de la solicitud
  const url = `http://localhost:8080/api/jasperReport/descargar/${idSolicitud}`;
  window.open(url, '_blank');
}

}
