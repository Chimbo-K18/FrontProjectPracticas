import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Convenio } from 'src/app/models/convenio'; 
import { ConvenioService } from 'src/app/services/convenio.service'; 
import Swal from 'sweetalert2';
import { DetalleConvenio } from 'src/app/models/detalleConvenio'; 
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';
import { DocumentoConvenio } from 'src/app/models/documentoConvenio';
import { DocumentoconvenioService } from 'src/app/services/documentoconvenio.service';



@Component({
  selector: 'app-register-convenio',
  templateUrl: './register-convenio.component.html',
  styleUrls: ['./register-convenio.component.css']
})
export class RegisterConvenioComponent  {

  listaEmpresa: Empresa[] = [];
  loading: boolean = true;

  empresa: Empresa = new Empresa;

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

  convenio: Convenio = new Convenio();
  documentoConvenio: DocumentoConvenio = new DocumentoConvenio();
  detalleConvenio: DetalleConvenio = new DetalleConvenio();
  
  constructor(private _formBuilder: FormBuilder, private empresaService: EmpresaService, private convenioService: ConvenioService, private detalleConvenioService: DetalleconvenioService, private documentoConvenioService: DocumentoconvenioService) {}

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value.trim().toLowerCase();
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
      }
    )
  }

  guardarConvenioCompleto() {
    this.convenioService.crearConvenio(this.convenio).subscribe(() => {
      this.detalleConvenioService.creardetalleConvenio(this.detalleConvenio).subscribe(() => {
        this.documentoConvenioService.subirdocumentoConvenio(this.documentoConvenio).subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Convenio creado satisfactoriamente.',
            showConfirmButton: false,
            timer: 2000,
          });
        });
      });
    });
  }
}
