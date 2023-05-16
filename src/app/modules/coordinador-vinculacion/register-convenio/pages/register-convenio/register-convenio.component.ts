import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Convenio } from 'src/app/models/convenio';
import { ConvenioService } from 'src/app/services/convenio.service';
import Swal from 'sweetalert2';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DetalleConvenio } from 'src/app/models/detalleconvenio';
import { DocumentoConvenio } from 'src/app/models/docsGlobales/documentoConvenio';
import { DocumentoConvenioService } from 'src/app/services/doc/DocumentoConvenio.service';
import { HttpEventType } from '@angular/common/http';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-register-convenio',
  templateUrl: './register-convenio.component.html',
  styleUrls: ['./register-convenio.component.css']
})
export class RegisterConvenioComponent {

  listaEmpresa: Empresa[] = [];
  loading: boolean = true;
  idDocumento!: any;

  empresa: Empresa = new Empresa;

  convvenio: Convenio = new Convenio();

  detalleconvenio: DetalleConvenio = new DetalleConvenio();

  public searchControl = new FormControl();
  //TABLA
  displayedColumns: string[] = ['idEmpresa', 'nombreEmpresa', 'rucEmpresa', 'correo', 'direccion', 'numeroTelefono', 'opcion'];
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
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  @ViewChild('inputFile') inputFile!: ElementRef;
  @ViewChild(MatStepper) stepper!: MatStepper;

  isEditable = false;
  convenio: Convenio = new Convenio;
  documentoConvenio: DocumentoConvenio = new DocumentoConvenio;
  detalleConvenio: DetalleConvenio = new DetalleConvenio;
  public filesToUpload!: Array<File>;


  constructor(private _formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private convenioService: ConvenioService,
    private detalleConvenioService: DetalleconvenioService,
    private documentoConvenioService: DocumentoConvenioService,
    private carrera: CarreraService) {
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
    this.empresaService.buscarId(idempresa).subscribe(
      data =>{
        this.empresa = data;
        this.empresacreada = data;
        console.log(this.empresa);

      });

  }


  obtenerEmpresas() {
    this.empresaService.listarEmpresa().subscribe(
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

      }
    )
  }


  carrera_nombre: any[] = [];
  traercarreras() {
    this.carrera.getCarreras().subscribe(data => {
      this.carrera_nombre = data;
      console.log(this.carrera_nombre);
    });
  }
  carreraSeleccionada: any;
  seleccionarCarrera() {
    console.log(this.carreraSeleccionada);

  }

  fechaela: any;
  fechaini: any;
  fechacaduca: any;
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

  conveniocreado: any;
  numcon: any;
  numitv: any;
  idconvenio:any;

  crearconvenio() {
    this.convenio.estado = true;
    console.log(this.numcon);
    console.log(this.numitv);
    this.convenio.numero_convenio = this.numcon;
    this.convenio.numero_itv = this.numitv;
    this.convenioService.crearConvenio(this.convenio).subscribe(data => {
      this.conveniocreado = data;
      this.idconvenio=data.idConvenio;
      console.log(this.idconvenio);
      this.detalleConvenio.convenio = this.conveniocreado;
      this.detalleConvenio.empresa = this.empresacreada;
      this.detalleConvenio.nombre_carrera = this.carreraSeleccionada;
      this.detalleConvenioService.creardetalleConvenio(this.detalleConvenio).subscribe({
        

      });
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Convenio creado satisfactoriamente.',
        showConfirmButton: false,
        timer: 2000,
      });
    });

  }

  resetStepper() {
    this.stepper.reset();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onLoad(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoConvenioService.uploadFileDocumentoConvenio(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


  public upload(event: any) {

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.documentoConvenioService.uploadFileDocumentoConvenio(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoConvenio', JSON.stringify(data.body));
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Documento guardado correctamente',
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.actualizarDocumento();
                break;
            }
          }
        },
        error => {
          this.inputFile.nativeElement.value = '';
          Swal.fire(
            'Error',
            'El documento no se pudo subir.',
            'error'
          );
        }
      );
    }
  }


  actualizarDocumento() {
    const idDoc = JSON.parse(
      sessionStorage.getItem('ArchivoConvenio') || '{}'
    );
    this.idDocumento = idDoc.id_documentoCnv;

    console.log(this.idDocumento);

    this.convenioService.updateDocumentoConvenio(this.idconvenio, this.idDocumento).subscribe(

      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }

}
