import { PracticaService } from 'src/app/services/practica.service';
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
import { Usuarios } from 'src/app/models/usuarios';
import { tutorempresarialService } from './../../../../../services/tutorempresarial.service';
import { EstudiantePracticanteService } from './../../../../../services/estudiantepracticante.service';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';

export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;

}

const AP: Aprobados[] = [
  {nombre: 'Bryam Tenecota', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Carlos Ibarra', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Christian Barbecho', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Erika Fernandez', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado'},
  {nombre: 'Adriana Jaya', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado'},
];

@Component({
  selector: 'app-asigna-especifico',
  templateUrl: './asigna-especifico.component.html',
  styleUrls: ['./asigna-especifico.component.css']
})


export class AsignaEspecificoComponent   implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['fecha', 'carrera', 'esta', 'sy', 'nombre'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta'];
  datam = new MatTableDataSource<Aprobados>(AP);

  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;
@ViewChild('paginator2', {static: true}) paginator2!: MatPaginator;

  ngAfterViewInit() {
    this.dataF1.paginator = this.paginator1;
    this.dataTabla.paginator = this.paginator2;
  }

  //FINTABLA





  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tresFormGroup = this._formBuilder.group({
    tresCtrl: ['', Validators.required],
  });

  cuatroFormGroup = this._formBuilder.group({
    cuatroCtrl: ['', Validators.required],
  });

  cincoFormGroup = this._formBuilder.group({
    cincoCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private solicitudPracticas : SolicitudpracticasService,
    private solicitudService : SolicitudConvocatoriasService,private UserService:UserService,
    private SolicitudConvocatoriasService: SolicitudConvocatoriasService,
    private EstudiantePracticanteService: EstudiantePracticanteService,
    private userService: UserService, 
    private tutorempresarialService:tutorempresarialService,
    private SolicitudpracticasService:SolicitudpracticasService) { }

  ngOnInit(): void {
this.ObtenerTutores();
    this.listarSolicitudesAprobadasPracticas();
  }
estdo:string ="solicitud aprobada";
  listarSolicitudesAprobadasPracticas() {
    this.solicitudPracticas.getSolicitudesEstado().subscribe(
      (res) => {  
        this.practicasSolicitud = res;
        console.log(res);
        this.dataF1.data = this.practicasSolicitud
      }
    );
  }


  seleccionarConvocatoria(solicitud: any) {
    sessionStorage.setItem('solicitudPractica', JSON.stringify(solicitud));
    const valor = JSON.parse(
      sessionStorage.getItem('solicitudPractica') || '{}'
    );
    this.mivariable = valor.idSolicitudPracticas;
    console.log(this.mivariable)
    this.solicitudService.listarCheckResponsable(this.mivariable).subscribe(
      (data) => {
        console.log(data)
        this.listaSolicitudesAprobadas = data
        this.dataTabla.data = this.listaSolicitudesAprobadas
      }
    )
  }
  datosCargadosAprobados: boolean = false;
  datosTablaAprobados: any[] = [];

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

  nombres:any
  /////////////Listar Tutores
   ids:number=1;
   listatutores: any;
   listatutorestrados: any [] = [];
   ObtenerTutores() {
     this.SolicitudpracticasService.listarDocentes(this.ids).subscribe((datax) => {
       if (Array.isArray(datax)) {
        // this.listatutorestrados = datax;
        // console.log(this.listatutorestrados);
        //  this.listatutores = datax.map(user => user.cedula+" "+ user.nombres + " " + user.apellidos);
         this.listatutores = datax
       } else {
         console.log("Error: data no es un arreglo.");
       }
     });
   };

tutorselect:any;
onSelectTutor(event: Event): void {
  const selectedValue = (event.target as HTMLSelectElement).value;
  if (selectedValue) {
    console.log('El tutor seleccionado es:', selectedValue);
  } else {
    console.log('No se ha seleccionado ningún tutor.');
  }
}

//////////////////

}
