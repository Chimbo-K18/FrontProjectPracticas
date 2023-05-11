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
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { UserService } from 'src/app/services/user.service';
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
  selector: 'app-asignar-horario',
  templateUrl: './asignar-horario.component.html',
  styleUrls: ['./asignar-horario.component.css']
})


export class AsignarHorarioComponent  implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica: Practica = new Practica();
  solicitudconvocatoria: SolicitudConvocatoria = new SolicitudConvocatoria();
  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['nombre', 'carrera', 'fecha', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'estafin', 'sy'];
  datam = new MatTableDataSource<Practica>([]);

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

  constructor(private _formBuilder: FormBuilder, private userService: UserService ,private tutorempresarialService:tutorempresarialService, private solicitudPracticas : SolicitudpracticasService, private solicitudconvocatoriaservice: SolicitudConvocatoriasService, private practicaservice: PracticaService,
    private solicitudService : SolicitudConvocatoriasService) { }

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


  listassolicitudesll:any []=[];
  listassolicitudeslltrue:any []=[];
  traerconvocatoria(idconvocatoria: any) {
    this.solicitudconvocatoriaservice.Solicitudestudiantestruepractica(idconvocatoria).subscribe((dataconvo)  => {
      // Guardar los datos en la lista
      this.listassolicitudesll = [];
      dataconvo.forEach((solicitud: SolicitudConvocatoria) => {
        this.listassolicitudesll.push(solicitud);
      });
      // Asignar la lista al datasource de la tabla
      this.dataTabla.data = this.listassolicitudesll;
      console.log(this.listassolicitudesll);
    });



  }


  seleccionarConvocatoria(solicitud: any) {
    sessionStorage.setItem('solicitudPractica', JSON.stringify(solicitud));

    const valor = JSON.parse(
      sessionStorage.getItem('solicitudPractica') || '{}'
    );

    this.mivariable = valor.idSolicitudPracticas;
    console.log(this.mivariable)


    // this.solicitudService.listarCheckResponsable(this.mivariable).subscribe(
    //   (data) => {

    //     console.log(data)
    //     this.listaSolicitudesAprobadas = data

    //     this.dataTabla.data = this.listaSolicitudesAprobadas

    //   }
    // )

  }

  idsoli:any;
  datasoli:any;
  Captirarid(idsoliconvo: any){
this.idsoli = idsoliconvo;
console.log(this.idsoli);
    this.solicitudconvocatoriaservice.getRequestSolicitudconvo(idsoliconvo).subscribe(datasoliconvo => {
      console.log(datasoliconvo);
      this.datasoli = datasoliconvo;


    });
  }
  Cedus:any;
  datatutorEmp:any;
  Asignarhorario(){
    this.solicitudconvocatoriaservice.getRequestSolicitudconvo(this.idsoli).subscribe(datasoliconvo => {
      console.log(datasoliconvo);
      this.solicitudconvocatoria = datasoliconvo;
      this.solicitudconvocatoria.checkPractica = true;
      this.solicitudconvocatoriaservice.updateSolicitudConvocatoria(this.solicitudconvocatoria, this.idsoli).subscribe(datasoliactu =>{
        console.log(datasoliactu);
        this.datasoli= datasoliactu;
        this.practica.solicitudConvocatoria = this.datasoli;
        this.practica.checkEmpresarial = true;
        const fechainicio = document.getElementById(
          'fechainicio'
        ) as HTMLInputElement;
        this.practica.fechaInicio = fechainicio.value;
        console.log(this.practica.fechaInicio);
    
        const fechafinal = document.getElementById(
          'fechafinal'
        ) as HTMLInputElement;
        this.practica.fechaFin = fechafinal.value;
        console.log(this.practica.fechaFin);
    
        const horainicio = document.getElementById(
          'horainicio'
        ) as HTMLInputElement;
        this.practica.horaInicio = horainicio.value;
        console.log(this.practica.horaInicio);
    
        const horafin = document.getElementById(
          'horafin'
        ) as HTMLInputElement;
        this.practica.horaSalida = horafin.value;
        console.log(this.practica.horaSalida);
        this.practicaservice.crearPractica(this.practica).subscribe(datapractica =>{
          console.log(datapractica);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Datos Creados Correctamente',
            showConfirmButton: false,
            timer: 2000,
          });
          
        });
      });


    });

    
  }

  listaspracticastrue:any []=[];
  listarpracticas(){
    this.practicaservice.listarPracticaEstudiante().subscribe(datapracticaestu =>{
      this.listaspracticastrue = datapracticaestu;
      this.datam.data = this.listaspracticastrue;
      console.log(this.listaspracticastrue);
    });
      
  }

  



}
