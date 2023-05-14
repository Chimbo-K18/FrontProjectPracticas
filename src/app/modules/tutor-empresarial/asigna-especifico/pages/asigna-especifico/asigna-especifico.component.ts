import { EstudiantePracticante } from './../../../../../models/estudiantepracticante';
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
import { Practica } from 'src/app/models/practica';


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


  practicasSolicitud: any ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['fecha', 'carrera', 'esta', 'sy', 'nombre'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombres', 'apellidos', 'horai', 'horaf','opciones'];
  datam = new MatTableDataSource<Practica>([]);
  ///usuarios
  datosCargadosAprobados: boolean = false;
  datosTablaAprobados: any[] = [];

  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;
@ViewChild('paginator2', {static: true}) paginator2!: MatPaginator;
@ViewChild(MatStepper) stepper!: MatStepper;
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
  SolicitudPracticas: SolicitudPracticas = new SolicitudPracticas();
  Practica:Practica=new Practica();
  constructor(private _formBuilder: FormBuilder, private solicitudPracticas : SolicitudpracticasService,
    private solicitudService : SolicitudConvocatoriasService,
    private SolicitudpracticasService:SolicitudpracticasService,
    private PracticaService:PracticaService, private UserService:UserService, 
    private tutorempresarialService:tutorempresarialService) { }

  ngOnInit(): void {
this.ObtenerTutores();
    this.listarSolicitudesAprobadasPracticas();
  }
estdo:string ="solicitud aprobada";
idempres:any;
cedus:any;

  listarSolicitudesAprobadasPracticas() {
    this.cedus = localStorage.getItem("idusuario");
this.UserService.getuscedula(this.cedus).subscribe(datBuscar=>{
this.tutorempresarialService.extraerEmpresarialIdUsuario(datBuscar.idUsuario).subscribe(DataExtaer =>{
this.idempres=DataExtaer.empresa?.idEmpresa;
this.solicitudPracticas.getBuscarPorEmpresa(this.idempres).subscribe(
  (res) => {  
    this.practicasSolicitud = res;
    console.log(res);
    this.dataF1.data = this.practicasSolicitud
  }
);
});
}); 
  }
  seleccionarConvocatoria(solicitud: any) {
    sessionStorage.setItem('solicitudPractica', JSON.stringify(solicitud));
    const valor = JSON.parse(
      sessionStorage.getItem('solicitudPractica') || '{}'
    );
    this.mivariable = valor.idSolicitudPracticas;
    console.log(this.mivariable)

  }
  selectedConvocatoria: any;
  lista:any[]=[];
  seleccionarSolicitud(soli: any) {
    this.selectedConvocatoria= soli;
    console.log('Valor seleccionado:', this.selectedConvocatoria);
    this.PracticaService.buscarPorUsuarioSolicitud(this.selectedConvocatoria).subscribe(dataSolictud =>{
      console.log(dataSolictud)
  
              this.datosCargadosAprobados=true;
              this.lista = [];
              dataSolictud.forEach((practica: Practica) => {
               this.lista.push(practica);
             });
             this.datam.data = this.lista;
             console.log(this.lista);
    
      }) 
  }

  /////////////Listar Tutores
   ids:number=1;
   listatutores: any;
   listatutorestrados: any [] = [];
   ObtenerTutores() {
     this.SolicitudpracticasService.listarDocentes(this.ids).subscribe((datax) => {
       if (Array.isArray(datax)) {
         this.listatutores = datax
       } else {
         console.log("Error: data no es un arreglo.");
       }
     });
   };

tutorselect:any;
cedulatutor:any
idUsTuto:any;
dataTutorcod:any
onSelectTutor(event: Event): void {
  const selectedValue = (event.target as HTMLSelectElement).value;
  this.cedulatutor=selectedValue;
  this.UserService.getuscedula(this.cedulatutor).subscribe(dataUsuario =>{
    console.log(dataUsuario);
    this.idUsTuto=dataUsuario.idUsuario;
    this.tutorempresarialService.extraerEmpresarialIdUsuario(this.idUsTuto).subscribe(dataTutor =>{
      this.dataTutorcod=dataTutor;
      });
    });
}
///asignar tutor 
idAsignar:any
idPrac:any
cedUsuario:any
dataPracticacod:any

asignar(id:any){
this.idAsignar= id;
this.PracticaService.buscarId(this.idAsignar).subscribe(dataPractica =>{
this.dataPracticacod=dataPractica;
this.idPrac=dataPractica.idPractica;
});
}

actualizar(){
  this.Practica=this.dataPracticacod;
  this.Practica.tutorEmpresarial=this.dataTutorcod;
  this.Practica.checkEmpresarial=true;
  this.PracticaService.UpdatePractica(this.Practica,this.idPrac).subscribe(datapractica =>{
    console.log(datapractica);
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Asignación de Tutor, Exitoso.',
      showConfirmButton: false,
      timer: 1000,
    });

}

resetStepper() {
  this.stepper.reset();
}


}
