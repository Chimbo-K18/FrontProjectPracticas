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


  practicasSolicitud: SolicitudPracticas[] = [] ;
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

  // tabla3
  datosCargadosAprobados: boolean = false;
datosTablaAprobados: any[] = [];

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
    private userService: UserService, private tutorempresarialService:tutorempresarialService) { }
    SolicitudConvocatoria: SolicitudConvocatoria= new SolicitudConvocatoria();
  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  listarSolicitudesAprobadasPracticas() {
    this.solicitudPracticas.getSolicitudesEstado().subscribe(
      (res) => {
        this.practicasSolicitud = res;
        console.log(res);

        this.dataF1.data = this.practicasSolicitud
      }
    );
  }

  variablecheck: any ;
  seleccionarConvocatoria(solicitud: any) {
    sessionStorage.setItem('solicitudPractica', JSON.stringify(solicitud));
    const valor = JSON.parse(
      sessionStorage.getItem('solicitudPractica') || '{}'
    );
    this.mivariable = valor.idSolicitudPracticas;
    console.log(this.mivariable)
    this.solicitudService.listarCheckResponsable(this.mivariable).subscribe(
      (data) => {
        console.log("es esta data")
        console.log(data)
       this.SolicitudConvocatoriasService.getRequestSolicitudconvo(this.mivariable).subscribe(dataConvo =>{
        if(dataConvo.checkEmpresarial ==true){
          Swal.fire(
            'Advertencia',
            'Los estudiantes de esta Convocatoria ya han sido aprobados.',
            'warning'
                );
        }else{
          this.listaSolicitudesAprobadas = data
          this.dataTabla.data = this.listaSolicitudesAprobadas
        }
       });
      }
    )

  }
  idestudentapro: any;
  iduspracticanteApro: any;
  fechaapro: any;
  idsoliapro:any;
////cargar estudiantes aprobados
buscarAprobados() {
  this.SolicitudConvocatoriasService.getRequestSolicitudconvo(this.mivariable).subscribe(
    (datasoliapro) => {
      this.idsoliapro=datasoliapro.idSolicitudConvocatoria;
      this.fechaapro = datasoliapro.fechaEnvio;
      console.log(datasoliapro);
      if(datasoliapro.checkEmpresarial==true){
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

//Aprobar Estudiante - checkEmpresarial
estadosoli:any;
idsolienc:any;
Cedus:any;
dataUs:any;
dataSolicitud:any;
idsoliG:any;
id:any;
datatutorEmp:any
selectedestudinate() {
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
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Estudiante Aprobado.',
              showConfirmButton: false,
              timer: 1000,
            });
          });

          this.SolicitudConvocatoria.tutorEmpresarial = dataTutor;


        });

      });
  });
};


resetStepper() {
  this.stepper.reset();
}


}
