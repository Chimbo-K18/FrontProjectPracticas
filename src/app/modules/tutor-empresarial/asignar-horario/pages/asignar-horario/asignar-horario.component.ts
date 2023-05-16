import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
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
import { MatStepper } from '@angular/material/stepper';

export interface Aprobados {
  nombre: string;
  fecha: string;
  carrera: string;
  esta: string;

}

const AP: Aprobados[] = [
  { nombre: 'Bryam Tenecota', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Carlos Ibarra', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Christian Barbecho', fecha: '05-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Erika Fernandez', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado' },
  { nombre: 'Adriana Jaya', fecha: '08-01-2022', carrera: 'TDS', esta: 'Finalizado' },
];

@Component({
  selector: 'app-asignar-horario',
  templateUrl: './asignar-horario.component.html',
  styleUrls: ['./asignar-horario.component.css']
})


export class AsignarHorarioComponent implements AfterViewInit {



  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica: Practica = new Practica();
  solicitudpractica: SolicitudPracticas = new SolicitudPracticas();
  solicitudconvocatoria: SolicitudConvocatoria = new SolicitudConvocatoria();
  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

  dColumns: string[] = ['nombre', 'carrera', 'fecha', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'estafin', 'sy'];
  datam = new MatTableDataSource<Practica>([]);

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
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

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private tutorempresarialService: tutorempresarialService, private solicitudPracticas: SolicitudpracticasService, private solicitudconvocatoriaservice: SolicitudConvocatoriasService, private practicaservice: PracticaService,
    private solicitudService: SolicitudConvocatoriasService, private convocatoriaservice: ConvocatoriasService) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  estadosoli: any;
  idsolienc: any;
  Ceduss: any;
  dataUs: any;
  dataSolicitud: any;
  idsoliG: any;
  id: any;
  datatutorEmps: any
  practicasSolicitudesd: any;
  listarSolicitudesAprobadasPracticas() {
    this.Ceduss = localStorage.getItem("idusuario");
    console.log("id usuario " + this.Ceduss)
    this.userService.getuscedula(this.Ceduss).subscribe(dataUserEncon => {
      this.tutorempresarialService.extraerEmpresarialIdUsuario(dataUserEncon.idUsuario).subscribe(dataTutor => {
        console.log("esta es la dat del tuto");
        console.log(dataTutor);
        this.datatutorEmps = dataTutor.empresa.idEmpresa;
        console.log(this.datatutorEmps);
        this.convocatoriaservice.ConvocatoriaporEmpresaTrue(this.datatutorEmps).subscribe(dataporempresa => {
          console.log(dataporempresa);
      this.practicasSolicitudesd = dataporempresa;
      // Asignar la lista al datasource de la tabla
      this.dataF1.data = this.practicasSolicitudesd;
      console.log(this.practicasSolicitudesd);

        }
        );
      });
    });



  }


  listassolicitudesll: any[] = [];
  listassolicitudeslltrue: any[] = [];
  traerconvocatoria(idconvocatoria: any) {
    console.log(idconvocatoria);
    this.solicitudconvocatoriaservice.Solicitudestudiantestruepractica(idconvocatoria).subscribe((dataconvo) => {
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

  idsoli: any;
  datasoli: any;
  Captirarid(idsoliconvo: any) {
    this.idsoli = idsoliconvo;
    console.log(this.idsoli);
    this.solicitudconvocatoriaservice.getRequestSolicitudconvo(idsoliconvo).subscribe(datasoliconvo => {
      console.log(datasoliconvo);
      this.datasoli = datasoliconvo;


    });
  }
  Cedus: any;
  datatutorEmp: any;
  Asignarhorario() {
    this.solicitudconvocatoriaservice.getRequestSolicitudconvo(this.idsoli).subscribe(datasoliconvo => {
      console.log(datasoliconvo);
      this.solicitudconvocatoria = datasoliconvo;
      this.solicitudconvocatoria.checkPractica = true;
      this.solicitudconvocatoriaservice.updateSolicitudConvocatoria(this.solicitudconvocatoria, this.idsoli).subscribe(datasoliactu => {
        console.log(datasoliactu);
        this.datasoli = datasoliactu;
        this.practica.solicitudConvocatoria = this.datasoli;
        this.practica.checkEmpresarial = true;
        this.practica.estadoHorario = true;
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
        this.practicaservice.crearPractica(this.practica).subscribe(datapractica => {
          console.log(datapractica);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Datos Creados Correctamente',
            showConfirmButton: false,
            timer: 2000,
          });

          const fechainicio = document.getElementById(
            'fechainicio'
          ) as HTMLInputElement;
          fechainicio.value = "dd/mm/aaaa";
          
  
          const fechafinal = document.getElementById(
            'fechafinal'
          ) as HTMLInputElement;
          fechafinal.value= "dd/mm/aaaa";
         
  
          const horainicio = document.getElementById(
            'horainicio'
          ) as HTMLInputElement;
          horainicio.value= "-:-";
       
  
          const horafin = document.getElementById(
            'horafin'
          ) as HTMLInputElement;
          horafin.value= "-:-";
        });
      });


    });


  }

  resetStepper() {
    this.stepper.reset();
  }

  listaspracticastrue: any[] = [];
  listarpracticas() {
    this.practicaservice.listarPracticaEstudiante(this.datatutorEmps).subscribe(datapracticaestu => {
      this.listaspracticastrue = datapracticaestu;
      this.datam.data = this.listaspracticastrue;
      console.log(this.listaspracticastrue);
    });

  }





}
