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
import Swal from 'sweetalert2';
import { Anexo2 } from 'src/app/models/anexo2';
import { Anexo2Service } from 'src/app/services/anexo2.service';

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
  selector: 'app-genera-anexo2',
  templateUrl: './genera-anexo2.component.html',
  styleUrls: ['./genera-anexo2.component.css']
})




export class GeneraAnexo2Component   implements AfterViewInit{


  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica: Practica = new Practica();
  anexo2 : Anexo2 = new Anexo2();


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado','nombre', 'symbol'];
  dataF1 = new MatTableDataSource<SolicitudPracticas>([]);

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
    private solicitudService : SolicitudConvocatoriasService, private practicaservice: PracticaService, private anexo2service: Anexo2Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  datatutorEmps: any
  practicasSolicitudesd: any;
  ce:any
  listarSolicitudesAprobadasPracticas() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.practicaservice.buscarPorconvocatoriaPorestudiante(this.ce).subscribe(datapractica =>{
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }


  idanexo2:any;
  idAnexoGenerado: any;
  CreaAnexo2(anexoid:any){
    this.idanexo2 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo2 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo2).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo2.practica = practicaupdate;
        this.anexo2service.crearAnexo2(this.anexo2).subscribe(dataanexo2=>{
          console.log(dataanexo2);

          this.idAnexoGenerado = dataanexo2.idAnexo2;
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
    const idanexo2 = this.idAnexoGenerado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo2/${idanexo2}`;
    window.open(url, '_blank');
  }

}
