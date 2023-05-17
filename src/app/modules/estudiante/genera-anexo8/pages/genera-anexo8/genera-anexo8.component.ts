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
import { Anexo3Service } from 'src/app/services/anexos/anexo3.service';
import { Practica } from 'src/app/models/practica';
import { Anexo3 } from 'src/app/models/anexos/anexo3';

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
  selector: 'app-genera-anexo8',
  templateUrl: './genera-anexo8.component.html',
  styleUrls: ['./genera-anexo8.component.css']
})




export class GeneraAnexo8Component   implements AfterViewInit{
  
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
  anexo3: Anexo3 = new Anexo3();


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
    private solicitudService : SolicitudConvocatoriasService, private practicaservice: PracticaService, private anexo3service: Anexo3Service) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }

  datatutorEmps: any
  practicasSolicitudesd: any;
  ce:any
  listarSolicitudesAprobadasPracticas() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.practicaservice.buscarPorconvocatoriaPorestudianteAnexo3(this.ce).subscribe(datapractica =>{
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd

    });
  }


  idanexo3:any;
  idAnexo3Generado: any;
  CreaAnexo2(anexoid:any){
    this.idanexo3 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo3 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo3).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo3.practica = practicaupdate;
        this.anexo3service.crearAnexo3(this.anexo3).subscribe(dataanexo3=>{
          console.log(dataanexo3);
          this.idAnexo3Generado = dataanexo3.idAnexo3;

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
    const idanexo3 = this.idAnexo3Generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo3/${idanexo3}`;
    window.open(url, '_blank');
  }

}
