import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { convocatorias } from 'src/app/models/convocatorias';
import { convocatoriasService } from 'src/app/services/convocatorias.service';
@Component({
  selector: 'app-lista-convocatorias',
  templateUrl: './lista-convocatorias.component.html',
  styleUrls: ['./lista-convocatorias.component.css']
})
export class ListaConvocatoriasComponent {
  //TABLA
     //TABLA empresa
  displayedColumns: string[] = [
    'nombreconvocatoria',
    'fechapublicacion',
    'fechaexpiracion',
    'documento_convocatoria',
    'opciones',
  ];
  listaConvocatoria: convocatorias[] = [];
  convocatorias: convocatorias= new convocatorias();
  loading: boolean = true;
    dataSource  = new MatTableDataSource<convocatorias>([]);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.obtenerConvocatorias();
    }
  
    //FINTABLA
  
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  
    isEditable = false;
  
    constructor(private _formBuilder: FormBuilder,    private convocatoriaService: convocatoriasService,) {}
  
    ngOnInit(): void {
    }
    //obtener convocatorias
    obtenerConvocatorias() {
      this.convocatoriaService.listarConvocatorias().subscribe((data) => {
        this.listaConvocatoria = data.map((result) => {
          let convo = new convocatorias();
          convo.idConvocatorias = result.idConvocatorias;
          convo.nombreConvocatoria = result.nombreConvocatoria;
          convo.fechaPublicacion = result.fechaPublicacion
          convo.fechaExpiracion = result.fechaExpiracion;
          convo.documento_convocatoria = result.documento_convocatoria;
     
          return convo;
        });
        this.dataSource.data = this.listaConvocatoria;
        this.loading = false;
      
      });
    }
  }
  