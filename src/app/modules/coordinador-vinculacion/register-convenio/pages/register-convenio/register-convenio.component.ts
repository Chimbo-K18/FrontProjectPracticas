import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Convenio } from 'src/app/models/convenio';
import { ConvenioService } from 'src/app/services/convenio.service';
import Swal from 'sweetalert2';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';
import { DocumentoConvenio } from 'src/app/models/documentoconvenio';
import { DocumentoconvenioService } from 'src/app/services/documentoconvenio.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DetalleConvenio } from 'src/app/models/detalleConvenio';



@Component({
  selector: 'app-register-convenio',
  templateUrl: './register-convenio.component.html',
  styleUrls: ['./register-convenio.component.css']
})
export class RegisterConvenioComponent  {

  listaEmpresa: Empresa[] = [];
  loading: boolean = true;

  empresa: Empresa = new Empresa;

  convvenio: Convenio = new Convenio();

  detalleconvenio: DetalleConvenio = new DetalleConvenio();

  public searchControl = new FormControl();
//TABLA
  displayedColumns: string[] = ['idEmpresa', 'nombreEmpresa', 'rucEmpresa', 'correo', 'direccion', 'numeroTelefono','opcion'];
  dataSource = new MatTableDataSource<Empresa>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //FINTABLA

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  isEditable = false;

  convenio: Convenio = new Convenio;
  documentoConvenio: DocumentoConvenio = new DocumentoConvenio;
  detalleConvenio: DetalleConvenio = new DetalleConvenio;

  constructor(private _formBuilder: FormBuilder, private empresaService: EmpresaService, private convenioService: ConvenioService, private detalleConvenioService: DetalleconvenioService, private documentoConvenioService: DocumentoconvenioService, private carrera: CarreraService) {
    this.traercarreras();
  }
  ngOnInit(): void {
    this.obtenerEmpresas();
    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value.trim().toLowerCase();
    });
  }

  empresacreada:any;
   obtenerCedulaSeleccionada(idempresa: number){
    this.empresaService.getPorId(idempresa).subscribe(
      data =>{
        this.empresa = data;
        this.empresacreada = data;
        console.log(this.empresa);

      });

  }


  obtenerEmpresas() {
    this.empresaService.listarEmpresas().subscribe(
      data => {
        this.listaEmpresa = data.map(
          result => {
            let empresa = new Empresa;
            empresa.idEmpresa = result.idEmpresa;
            empresa.nombreEmpresa = result.nombreEmpresa;
            empresa.rucEmpresa = result.rucEmpresa;
            empresa.correo = result.correo;
            empresa.direccion = result.direccion;
            empresa.numeroTelefono = result.numeroTelefono;
            return empresa;
          }
        );
        this.dataSource.filterPredicate = (data: Empresa, filter: string) =>
          data.rucEmpresa.includes(filter);
        this.dataSource.data = this.listaEmpresa;
        this.loading = false;
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Datos ingresados correctamente',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    )
  }


  carrera_nombre : any [] = [];
traercarreras() {
  this.carrera.getCarreras().subscribe(data => {
    this.carrera_nombre = data;
    console.log(this.carrera_nombre);
  });
}
carreraSeleccionada:any;
seleccionarCarrera() {
console.log(this.carreraSeleccionada);

}

fechaela:any;
fechaini:any;
fechacaduca:any;
onDateChange(event: MatDatepickerInputEvent<Date>) {
  if (event.value != null) {
    console.log("entro a que si vale");
    this.fechaela = event.value.toISOString().slice(0, 10);
    this.convenio.fecha_elaboracion = this.fechaela;
    console.log(this.convenio.fecha_elaboracion);
  } else {
    console.log("entro a null");
    this.fechaela = null;
  }
}

onDateChange2(event: MatDatepickerInputEvent<Date>) {
  if (event.value != null) {
    console.log("entro a que si vale");
    this.fechaini = event.value.toISOString().slice(0, 10);
    this.detalleConvenio.fechaAprobacion = this.fechaini;
    console.log(this.detalleConvenio.fechaAprobacion);
  } else {
    console.log("entro a null");
    this.fechaini = null;
  }
}

onDateChange3(event: MatDatepickerInputEvent<Date>) {
  if (event.value != null) {
    console.log("entro a que si vale");
    this.fechacaduca = event.value.toISOString().slice(0, 10);
    this.detalleConvenio.fecha_caducidad = this.fechacaduca;
    console.log(this.detalleConvenio.fecha_caducidad);
  } else {
    console.log("entro a null");
    this.fechacaduca = null;
  }
}

conveniocreado:any;
numcon:any;
numitv:any;
crearconvenio(){
  this.convenio.estado = true;
  console.log(this.numcon);
  console.log(this.numitv);
  this.convenio.numero_convenio = this.numcon;
  this.convenio.numero_itv = this.numitv;
this.convenioService.crearConvenio(this.convenio).subscribe(data =>{
  this.conveniocreado = data;
  this.detalleConvenio.convenio =this.conveniocreado;
  this.detalleConvenio.empresa = this.empresacreada;
  this.detalleConvenio.nombre_carrera = this.carreraSeleccionada;
  this.detalleConvenioService.creardetalleConvenio(this.detalleConvenio).subscribe({

  });
});

}

//   guardadoFull(){
//     this.documentoConvenioService.subirdocumentoConvenio(documentoConvenio).subscribe(
//       data=>{
//         this.documentoConvenio = data;
//         this.convenio.documentoConvenio = this.documentoConvenio
//         this.convenioService.crearConvenio(this.convenio).subscribe(
//           data =>{
//             this.convenio = data;
//             this.detalleConvenio.convenio = this.convenio
//             this.detalleConvenio.empresa = this.empresa
//             this.detalleConvenioService.creardetalleConvenio(this.detalleConvenio).subscribe(
//               data =>{
//                 Swal.fire({
//                   position: 'top',
//                   icon: 'success',
//                   title: 'Convenio registrado satisfactoriamente.',
//                   showConfirmButton: false,
//                   timer: 2000,
//                 });
//               }
//             )
//           }
//         )
//       }
//     )
//   }
}
