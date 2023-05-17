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
import { Anexo6Service } from 'src/app/services/anexo6.service';
import { Anexo6 } from 'src/app/models/anexo6';

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
  selector: 'app-genera-anexo6',
  templateUrl: './genera-anexo6.component.html',
  styleUrls: ['./genera-anexo6.component.css']
})





export class GeneraAnexo6Component   implements AfterViewInit{

//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR
//ESTOS DATOS NO CORRESPONDEN A LA PAGINA TOMAR DE REFERENCIA PORFAVOR

  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo6: Anexo6 = new Anexo6();


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado','nombre', 'symbol', 'boton'];
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
    private solicitudService : SolicitudConvocatoriasService, private practicaservice: PracticaService, private anexo6service: Anexo6Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  datatutorEmps: any
  practicasSolicitudesd: any;
  ce:any
  listarSolicitudesAprobadasPracticas() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.practicaservice.buscarPorconvocatoriaPorestudianteAnexo6(this.ce).subscribe(datapractica =>{
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }

  Captirarid(id:any){

  }


  fechaini:any;
  fechafin:any;
  numerosemana:any;
  GenerarFechas(){
    const fechainicio = document.getElementById(
      'fechainicio'
    ) as HTMLInputElement;
    this.fechaini = fechainicio.value;
    console.log(this.fechaini);

    const fechafinal = document.getElementById(
      'fechafinal'
    ) as HTMLInputElement;
    this.fechafin = fechafinal.value;
    console.log(this.fechafin);

    const numero = document.getElementById(
      'numero'
    ) as HTMLInputElement;
    this.numerosemana = numero.value;
    console.log(this.numerosemana);

  }
  idanexo6:any;
  idAnexo6Generado: any;
  CreaAnexo6(anexoid:any){
    this.idanexo6 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo6 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo6).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo6.practica = practicaupdate;
        this.anexo6.estado_estudiante = true;
        this.anexo6.fecha_inicio = this.fechaini;
        this.anexo6.fecha_fin = this.fechafin;
        this.anexo6.numero_semana = this.numerosemana;
        this.anexo6service.crearAnexo6(this.anexo6).subscribe(dataanexo6=>{
          console.log(dataanexo6);
          this.idAnexo6Generado = dataanexo6.idAnexo6;
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
    const idanexo6 = this.idAnexo6Generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo6/${idanexo6}`;
    window.open(url, '_blank');
  }

}
