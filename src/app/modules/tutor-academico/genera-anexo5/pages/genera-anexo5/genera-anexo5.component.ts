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
import Swal from 'sweetalert2';
import { PracticaService } from 'src/app/services/practica.service';
import { Anexo3Service } from 'src/app/services/anexo3.service';
import { Practica } from 'src/app/models/practica';
import { Anexo3 } from 'src/app/models/anexo3';
import { Anexo5 } from 'src/app/models/anexo5';
import { Anexo5Service } from 'src/app/services/anexo5.service';

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
  selector: 'app-genera-anexo5',
  templateUrl: './genera-anexo5.component.html',
  styleUrls: ['./genera-anexo5.component.css']
})





export class GeneraAnexo5Component   implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo5: Anexo5 = new Anexo5();


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'nombre', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  dColumns: string[] = ['nombre', 'fechainicio', 'fechafin', 'horainicio', 'horafin', 'sy'];
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
    private solicitudService : SolicitudConvocatoriasService, private practicaservice: PracticaService, private anexo5service: Anexo5Service) { }

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
    console.log("id usuario " + this.Ceduss);
    this.practicaservice.listarPorAcademico(this.Ceduss).subscribe(datapractica => {
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }


  listapraacticas: any[] = [];
  seleccionarConvocatoria(solicitud: any, idusuario: any) {
    console.log(solicitud);
    console.log(idusuario);
    this.practicaservice.buscarPorconvocatoriaParaanexo5(solicitud, idusuario).subscribe(datapracticalist => {
      console.log(datapracticalist);
      this.listapraacticas = [];
      datapracticalist.forEach((practica: Practica) => {
        this.listapraacticas.push(practica);
      });
      // Asignar la lista al datasource de la tabla
      this.dataTabla.data = this.listapraacticas;
      console.log(this.listapraacticas);
    }
    );
  }

  idanexo5: any;
  anexo5generado: any;
  anexodataencontrada: any;
  CreaAnexo5(anexoid: any) {
    this.idanexo5 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata => {
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo5 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo5).subscribe(practicaupdate => {
        console.log(practicaupdate);
        this.anexo5.practica = practicaupdate;
        this.anexo5.estado_academico = true;
        this.anexo5service.crearAnexo5(this.anexo5).subscribe(dataanexo5 => {
          console.log(dataanexo5);
          this.anexo5generado = dataanexo5.idAnexo5;
          Swal.fire(
            'PROCESO',
            'GENERADO CON EXITO',
            'success'
          )
        });
      });

    });
  }

}
