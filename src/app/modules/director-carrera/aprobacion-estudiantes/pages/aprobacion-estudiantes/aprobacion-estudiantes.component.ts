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
datosCargados: boolean = false;
datosTabla: any[] = [];
  // tabla3
  datosCargadosAprobados: boolean = false;
datosTablaAprobados: any[] = [];


  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
  @ViewChild('paginator3', { static: true }) paginator3!: MatPaginator;
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
        if(datasoli.checkDirector==false && this.idsoli==this.selectedsolicitud){
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
      if(datasoliapro.checkDirector==true  && this.idsoli==this.selectedsolicitud){
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
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Estudiante Aprobado.',
              showConfirmButton: false,
              timer: 1000,
            });
            this.resetStepper();
            this.datosCargados = true;
          });
      });


  });
}
resetStepper() {
  this.stepper.reset();
}






}
