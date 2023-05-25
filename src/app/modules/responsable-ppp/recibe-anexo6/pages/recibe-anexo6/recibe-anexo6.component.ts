import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { Practica } from 'src/app/models/practica';
import { PracticaService } from 'src/app/services/practica.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recibe-anexo6',
  templateUrl: './recibe-anexo6.component.html',
  styleUrls: ['./recibe-anexo6.component.css']
})
export class RecibeAnexo6Component implements OnInit {


  displayedColumns1: string[] = ['position', 'name', 'weight', 'estado', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'carrera','descargar'];
  dataSource = new MatTableDataSource<Practica>([]);

   firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private responsableppservice: Responsable_PPPService, private practicaservice: PracticaService, private _formBuilder: FormBuilder){
    
  }
  ngOnInit(): void {

    this.listarpracticas();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  Ce:any;
  practicasSolicitudesd: any;
  listarpracticas(){
    this.Ce = localStorage.getItem("idusuario");
    console.log(this.Ce);
    this.practicaservice.listarPorResponsable(this.Ce).subscribe(datapractica=>{
      console.log(datapractica);
      this.practicasSolicitudesd = datapractica;
      console.log(datapractica);

      this.dataF1.data = this.practicasSolicitudesd
    });
  }

  listaconvocatoria: any[] = [];
  listarAnexos(idconvo:any) {

        this.practicaservice.listarPorAnexo6Recibe(idconvo).subscribe(dataconvo => {
          console.log(dataconvo);
          this.listaconvocatoria = dataconvo;
          this.dataSource.data = this.listaconvocatoria;

        });

  }
  anexo6generado:any;
  descargarPDF(idAnexo6 :any) {
    this.anexo6generado = idAnexo6; // obtén el ID de la solicitud
    const url = `http://68.183.134.207:8080/api/documentoAnexo6/download/${this.anexo6generado}`;
    window.open(url, '_blank');
  }

 

}