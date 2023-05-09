import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';

import { UserService } from 'src/app/services/user.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convocatorias } from 'src/app/models/convocatorias';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { EstudiantePracticanteService } from 'src/app/services/estudiantepracticante.service';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  estado: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-001',
    name: '05-01-2022',
    weight: '10-01-2022',
    estado: 'Finalizado',
    symbol: 'H',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-002',
    name: '20-01-2022',
    weight: '25-01-2022',
    estado: 'Finalizado',
    symbol: 'He',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-003',
    name: '08-02-2022',
    weight: '13-02-2022',
    estado: 'Finalizado',
    symbol: 'Li',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-004',
    name: '23-02-2022',
    weight: '28-02-2022',
    estado: 'Finalizado',
    symbol: 'Be',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-005',
    name: '13-03-2022',
    weight: '18-03-2022',
    estado: 'Finalizado',
    symbol: 'B',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-006',
    name: '28-03-2022',
    weight: '02-04-2022',
    estado: 'Finalizado',
    symbol: 'C',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-007',
    name: '22-04-2022',
    weight: '27-04-2022',
    estado: 'Finalizado',
    symbol: 'N',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-008',
    name: '05-05-2022',
    weight: '10-05-2022',
    estado: 'Finalizado',
    symbol: 'O',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-009',
    name: '20-05-2022',
    weight: '25-05-2022',
    estado: 'Finalizado',
    symbol: 'F',
  },
  {
    position: 'CONVOCATORIA – TSDS -PPP-2022-010',
    name: '10-06-2022',
    weight: '15-06-2022',
    estado: 'Finalizado',
    symbol: 'Ne',
  },
];

export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;
}

const AP: Aprobados[] = [
  {
    nombre: 'Bryam Tenecota',
    fecha: '05-01-2022',
    carrera: 'TDS',
    esta: 'Finalizado',
  },
  {
    nombre: 'Carlos Ibarra',
    fecha: '05-01-2022',
    carrera: 'TDS',
    esta: 'Finalizado',
  },
  {
    nombre: 'Christian Barbecho',
    fecha: '05-01-2022',
    carrera: 'TDS',
    esta: 'Finalizado',
  },
  {
    nombre: 'Erika Fernandez',
    fecha: '08-01-2022',
    carrera: 'TDS',
    esta: 'Finalizado',
  },
  {
    nombre: 'Adriana Jaya',
    fecha: '08-01-2022',
    carrera: 'TDS',
    esta: 'Finalizado',
  },
];

@Component({
  selector: 'app-aprobacion-estudiantes',
  templateUrl: './aprobacion-estudiantes.component.html',
  styleUrls: ['./aprobacion-estudiantes.component.css'],
})
export class AprobacionEstudiantesComponent implements AfterViewInit {
SolicitudConvocatoria: SolicitudConvocatoria= new SolicitudConvocatoria();




  //TABLA1
  //TABLA convocatorias
  displayedColumns: string[] = [
    'nombreconvocatoria',
    'fechapublicacion',
    'fechaexpiracion',
    'estadoConvocatoria',
    'opciones',
  ];
  listaConvocatoria: Convocatorias[] = [];
  convocatorias: Convocatorias = new Convocatorias();
  loading: boolean = true;
  dataSource = new MatTableDataSource<Convocatorias>([]);
  //TABLA2
loadingest:boolean=true;
datosCargados: boolean = false;
datosTabla: any[] = [];

  // tabla3
  datosCargadosAprobados: boolean = false;
datosTablaAprobados: any[] = [];


  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta'];
  datam = new MatTableDataSource<Aprobados>(AP);

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
  @ViewChild(MatStepper) stepper!: MatStepper;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
    // this.data.paginator = this.paginator2;
    this.obtenerConvocatorias();
  }

  //FINTABLA

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    private convocatoriaService: ConvocatoriasService,
    private SolicitudConvocatoriasService: SolicitudConvocatoriasService,
    private EstudiantePracticanteService: EstudiantePracticanteService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  
  //obtener convocatorias
  obtenerConvocatorias() {
    this.convocatoriaService.listarConvocatorias().subscribe((data) => {
      this.listaConvocatoria = data.map((result) => {
        let convo = new Convocatorias();
        convo.idConvocatorias = result.idConvocatorias;
        convo.nombreConvocatoria = result.nombreConvocatoria;
        convo.fechaPublicacion = result.fechaPublicacion;
        convo.fechaExpiracion = result.fechaExpiracion;
        convo.estadoConvocatoria = result.estadoConvocatoria;
        convo.documentoConvatoria = result.documentoConvatoria;
        convo.solicitudPracticas = result.solicitudPracticas;
        console.log(convo);
        return convo;
      });
      this.dataSource.data = this.listaConvocatoria;
      this.loading = false;
    });
  }

  selectedsolicitud: any;
  // para seleccionar la convocatoria
  seleccionarConvocatoria(convocatorias: any) {
    console.log('Se seleccionó la convocatoria:', convocatorias);
    this.selectedsolicitud =convocatorias.solicitudPracticas.idSolicitudPracticas;
    console.log(this.selectedsolicitud);
    this.buscarSolicitud(this.selectedsolicitud);
    this.buscarAprobados(this.selectedsolicitud);
  }
  ///buscar solicitudpractica
  idestudent: any;
  nombrestudent: any;
  carreraestudent: any;
  iduspracticante: any;
  fecha: any;
  idsoli:any;
  buscarSolicitud(id: any) {
    this.SolicitudConvocatoriasService.getRequestSolicitudconvo(id).subscribe(
      (datasoli) => {
        this.idsoli=datasoli.idSolicitudConvocatoria;
        this.fecha = datasoli.fechaEnvio;
        console.log(datasoli);
        if(datasoli.checkDirector==false){
          this.idestudent = datasoli.estudiantePracticante.idEstudiantePracticas;
          this.EstudiantePracticanteService.getRequestEstudiante(
            this.idestudent).subscribe((datapracticante) => {
            console.log(datapracticante);
            this.iduspracticante =datapracticante.usuario_estudiante_practicante?.idUsuario;
            console.log('este el id usuario');
            console.log(this.iduspracticante);
            this.userService.getUsuarioporId(this.iduspracticante).subscribe((datausuario) => {
                console.log(datausuario);
                    this.datosTabla.push({
                      id:this.idsoli,
                      fecha: this.fecha,
                      nombres: datausuario.nombres,
                      apellidos: datausuario.apellidos,
                      carrera: datausuario.carrera
                    });
                      // Indicar que los datos ya están cargados
      this.datosCargados = true;
              });
          });
        }else{
          Swal.fire(
            'Advertencia',
            'Los estudiantes de esta Convocatoria ya han sido aprobados.',
            'warning'
                );
        }
    
    });
}
idestudentapro: any;
iduspracticanteApro: any;
fechaapro: any;
idsoliapro:any;
/////cargar estudinates aprobados
buscarAprobados(id: any) {
  this.SolicitudConvocatoriasService.getRequestSolicitudconvo(id).subscribe(
    (datasoliapro) => {
      this.idsoliapro=datasoliapro.idSolicitudConvocatoria;
      this.fechaapro = datasoliapro.fechaEnvio;
      console.log(datasoliapro);
      if(datasoliapro.checkDirector==true){
        this.idestudentapro = datasoliapro.estudiantePracticante.idEstudiantePracticas;
        this.EstudiantePracticanteService.getRequestEstudiante(this.idestudentapro).subscribe((datapracticanteApro) => {
          console.log(datapracticanteApro);
          this.iduspracticanteApro =datapracticanteApro.usuario_estudiante_practicante?.idUsuario;
          console.log('este el id usuario');
          console.log(this.iduspracticanteApro);
          this.userService.getUsuarioporId(this.iduspracticanteApro).subscribe((datausuarioApro) => {
              console.log(datausuarioApro);
                  this.datosTablaAprobados.push({
                    id:this.idsoliapro,
                    fecha: this.fechaapro,
                    nombres: datausuarioApro.nombres,
                    apellidos: datausuarioApro.apellidos,
                    carrera: datausuarioApro.carrera
                  });
                  this.datosCargadosAprobados = true;
            });
        });
      }else{
      }
  
  });
}
//checkdirector
estadosoli:any;
idsolienc:any;
Cedus:any;
dataUs:any;
dataSolicitud:any;
idsoliG:any;
selectedestudinate(id: number) {
  this.Cedus=localStorage.getItem("idusuario");
  console.log("id usuario "+this.Cedus)
  console.log("ID seleccionado:", id);
  this.SolicitudConvocatoriasService.getRequestSolicitudconvo(id).subscribe(
    (dataBuscarsoli) => {
      this.idsolienc=dataBuscarsoli.idSolicitudConvocatoria;
      this.SolicitudConvocatoria=dataBuscarsoli;
      this.SolicitudConvocatoria.checkDirector=true;
      this.userService.getuscedula(this.Cedus).subscribe(dataUserEncon =>{
        this.dataUs=dataUserEncon;
        console.log( this.dataUs);
        this.SolicitudConvocatoria.usuario=this.dataUs;
        this.SolicitudConvocatoriasService.updateSolicitudConvocatoria(this.SolicitudConvocatoria, this.idsolienc).subscribe(
          (datasoliencontrada) => {
            console.log(datasoliencontrada);
            this.resetStepper();
          });
      });
  
   
  });
}
resetStepper() {
  this.stepper.reset();
}






}
