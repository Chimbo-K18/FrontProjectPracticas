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
import { UserService } from 'src/app/services/user.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { Anexo1 } from 'src/app/models/anexo1';
import { Anexo1Service } from 'src/app/services/anexo1.service';
import Swal from 'sweetalert2';

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
  selector: 'app-anexo1',
  templateUrl: './anexo1.component.html',
  styleUrls: ['./anexo1.component.css']
})



export class Anexo1Component implements AfterViewInit {


  practicasSolicitud: SolicitudPracticas[] = [];
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  anexo1: Anexo1 = new Anexo1();
  practica: Practica = new Practica();


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'nombre', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  dColumns: string[] = ['nombre', 'fechainicio', 'fechafin', 'horainicio', 'horafin', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta'];
  datam = new MatTableDataSource<Aprobados>(AP);

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;

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

  constructor(private _formBuilder: FormBuilder, private solicitudPracticas: SolicitudpracticasService, private anexo1service: Anexo1Service,
    private solicitudService: SolicitudConvocatoriasService, private userService: UserService, private practicaservice: PracticaService) { }

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
    this.practicaservice.buscarPorconvocatoriaParaanexo(solicitud, idusuario).subscribe(datapracticalist => {
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

  idanexo1: any;
  anexo1generado: any;
  anexodataencontrada: any;
  CreaAnexo1(anexoid: any) {
    this.idanexo1 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata => {
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo1 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo1).subscribe(practicaupdate => {
        console.log(practicaupdate);
        this.anexo1.practica = practicaupdate;
        this.anexo1.estado_academico = true;
        this.anexo1service.crearAnexo1(this.anexo1).subscribe(dataanexo1 => {
          console.log(dataanexo1);
          this.anexo1generado = dataanexo1.idAnexo1;
          Swal.fire(
            'PROCESO',
            'GENERADO CON EXITO',
            'success'
          )
        });
      });

    });
  }

  descargarPDF() {
    const idAnexo1 = this.anexo1generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo1/${idAnexo1}`;
    window.open(url, '_blank');
  }

}
