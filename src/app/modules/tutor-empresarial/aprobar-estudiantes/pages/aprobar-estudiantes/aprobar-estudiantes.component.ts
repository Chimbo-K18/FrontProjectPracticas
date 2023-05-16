import { tutorempresarialService } from './../../../../../services/tutorempresarial.service';
import { EstudiantePracticanteService } from './../../../../../services/estudiantepracticante.service';
import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { UserService } from 'src/app/services/user.service';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-aprobar-estudiantes',
  templateUrl: './aprobar-estudiantes.component.html',
  styleUrls: ['./aprobar-estudiantes.component.css']
})
export class AprobarEstudiantesComponent implements AfterViewInit{


  practicasSolicitud: Convocatorias[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['fecha', 'carrera', 'esta', 'sy', 'nombre'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;
@ViewChild('paginator2', {static: true}) paginator2!: MatPaginator;
@ViewChild(MatStepper) stepper!: MatStepper;
  ngAfterViewInit() {
    this.dataF1.paginator = this.paginator1;
    this.dataTabla.paginator = this.paginator2;
  }

  //FINTABLA
  displayedestudiante: string[] = [
    'id',
    'fecha',
    'nombres',
    'apellidos',
    'carrera',
    'opciones',
  ];
  displayedestudiantetrue: string[] = [
    'id',
    'fecha',
    'nombres',
    'apellidos',
    'carrera',
  ];
  // tabla3
  datosCargadosAprobados: boolean = false;
  datosCargados: boolean = false;

  dataestudiante = new MatTableDataSource<SolicitudConvocatoria>([]);
  dataestudiantetrue = new MatTableDataSource<SolicitudConvocatoria>([]);

//fin
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tresFormGroup = this._formBuilder.group({
    tresCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private solicitudPracticas : SolicitudpracticasService,
    private solicitudService : SolicitudConvocatoriasService,
    private SolicitudConvocatoriasService: SolicitudConvocatoriasService,
    private EstudiantePracticanteService: EstudiantePracticanteService,
    private userService: UserService, private tutorempresarialService:tutorempresarialService,
    private ConvocatoriasService: ConvocatoriasService) { }
    SolicitudConvocatoria: SolicitudConvocatoria= new SolicitudConvocatoria();
  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

Ce:any;
tutoenecontrado:any;
listaconvocatorias:any;
  listarSolicitudesAprobadasPracticas() {
    this.Ce = localStorage.getItem("idusuario");
    this.userService.getuscedula(this.Ce).subscribe(dataUserEncon => {
      this.tutorempresarialService.extraerEmpresarialIdUsuario(dataUserEncon.idUsuario).subscribe(dataTutor => {
        this.tutoenecontrado = dataTutor.empresa.idEmpresa;
        this.ConvocatoriasService.ConvocatoriaporEmpresa(this.tutoenecontrado).subscribe(
          (res) => {
            this.listaconvocatorias = res;
            console.log(res);
    
            this.dataF1.data = this.listaconvocatorias
          }
        );
      });
    });
  
  }

  selectconvo:any;
  idpract:any;
  listasolicitudconvocatoria: any;
  nom:any;
  // para seleccionar la convocatoria
  seleccionarConvocatoria(id: any) {
    console.log('Se seleccionó la solicitud:', id);
       this.idpract=id;
       console.log(this.idpract);
       this.buscarSolicitud(this.idpract);
       this.buscarAprobados(this.idpract);

  }

  ///buscar solicitudpractica

  
  buscarSolicitud(id:any) {
    console.log(id)
    this.SolicitudConvocatoriasService.getRequestSolicitudconvoTutor(id).subscribe(
      datasoli => {
        this.listasolicitudconvocatoria = datasoli;
        this.dataestudiante.data = this.listasolicitudconvocatoria;
        this.datosCargados =true;
    });
}

  idestudentapro: any;
  iduspracticanteApro: any;
  fechaapro: any;
  idsoliapro:any;
  convo:any
  listasolicitudconvocatoriatrue:any
  /////cargar estudinates aprobados
  buscarAprobados(id: any) {
    this.SolicitudConvocatoriasService.getRequestSolicitudconvoTutorTrue(id).subscribe(
        datasoli => {
          this.listasolicitudconvocatoriatrue = datasoli;
          this.dataestudiantetrue.data = this.listasolicitudconvocatoriatrue;
          this.datosCargadosAprobados =true;
      });
    }

//Aprobar Estudiante - checkEmpresarial
estadosoli:any;
idsolienc:any;
Cedus:any;
dataUs:any;
dataSolicitud:any;
idsoliG:any;
id:any;
datatutorEmp:any
selectedestudinate(id: number) {
  this.mivariable = id;
  this.Cedus=localStorage.getItem("idusuario");
  console.log("id usuario "+this.Cedus)
  console.log("ID seleccionado:",this.mivariable);
  this.SolicitudConvocatoriasService.getRequestSolicitudconvo(this.mivariable).subscribe(
    (dataBuscarsoli) => {
      this.idsolienc=dataBuscarsoli.idSolicitudConvocatoria;
      this.SolicitudConvocatoria=dataBuscarsoli;
      this.SolicitudConvocatoria.checkEmpresarial=true;
      this.userService.getuscedula(this.Cedus).subscribe(dataUserEncon =>{
        this.tutorempresarialService.extraerEmpresarialIdUsuario(dataUserEncon.idUsuario).subscribe(dataTutor =>{
        console.log("esta es la dat del tuto");
        console.log(dataTutor);
        this.datatutorEmp =dataTutor;
        this.SolicitudConvocatoria.tutorEmpresarial= this.datatutorEmp;
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
          });

          this.SolicitudConvocatoria.tutorEmpresarial = dataTutor;

this.resetStepper();
        });

      });
  });
};


resetStepper() {
  this.stepper.reset();
}

refreshWindow() {
  window.location.reload();
}
}