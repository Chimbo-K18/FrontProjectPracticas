import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convocatorias } from 'src/app/models/convocatorias';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DocumentoLanzamientoConvocatoria } from 'src/app/services/doc/DocumentoLanzamientoConvocatoria.service';
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
  listaConvocatoria: Convocatorias[] = [];
  convocatorias: Convocatorias= new Convocatorias();
  loading: boolean = true;



  public filesToUpload!: Array<File>;
  solicitudGenerada !: any;
    dataSource  = new MatTableDataSource<Convocatorias>([]);
  
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
  
    constructor(private _formBuilder: FormBuilder,    private convocatoriaService: ConvocatoriasService, private DocumentoLanzamientoConvocatoria: DocumentoLanzamientoConvocatoria) {}

  
    ngOnInit(): void {
    }
    //obtener convocatorias

    obtenerConvocatorias() {
      this.convocatoriaService.listarConvocatorias().subscribe((data) => {
        this.listaConvocatoria = data.map((result) => {
          let convo = new Convocatorias();
          convo.idConvocatorias = result.idConvocatorias;
          convo.nombreConvocatoria = result.nombreConvocatoria;
          convo.fechaPublicacion = result.fechaPublicacion
          convo.fechaExpiracion = result.fechaExpiracion;
          convo.documentoConvatoria = result.documentoConvatoria;
           return convo;
        });
        this.dataSource.data = this.listaConvocatoria;
        this.loading = false;
      
      });
    }
///obtener el id de la convocatoria de la tabla
selectedConvo: any;
  // para seleccionar la convocatoria
  seleccionarConvocatoria(convocatorias: any) {
    console.log('Se seleccionó la empresa:', convocatorias);
    this.selectedConvo = convocatorias.idConvocatorias;
    this.buscarConvocatoria();
  }

idencontrado:any;
  buscarConvocatoria(){
    this.convocatoriaService.getRequest(this.selectedConvo).subscribe(dataconvocatoria =>{
      // console.log(dataconvocatoria);
    });


      this.convocatoriaService.buscardoc(this.selectedConvo).subscribe(datadocumento =>{
        console.log(datadocumento)

      
          this.DocumentoLanzamientoConvocatoria.getPdf(datadocumento).subscribe((pdfBlob: Blob) => {
            this.downloadFile(pdfBlob);
          });
        
    });
  }





    
  //Metodo para descargar la solicitud de convocatorias
  // getPdf

  downloadPdf(id: number) {
    this.DocumentoLanzamientoConvocatoria.getPdf(id).subscribe((pdfBlob: Blob) => {
      this.downloadFile(pdfBlob);
    });
  }

  downloadFile(data: Blob) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }


  }
  