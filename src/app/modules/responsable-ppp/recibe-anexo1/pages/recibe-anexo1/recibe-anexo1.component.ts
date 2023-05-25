import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-recibe-anexo1',
  templateUrl: './recibe-anexo1.component.html',
  styleUrls: ['./recibe-anexo1.component.css']
})


export class RecibeAnexo1Component implements AfterViewInit {

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

  carreradata:any;
  listaconvocatoria: any[] = [];
  listarAnexos(idconvo:any) {
        this.practicaservice.listarPorAnexo1Recibe(idconvo).subscribe(dataconvo => {
          console.log(dataconvo);
          this.listaconvocatoria = dataconvo;
          this.dataSource.data = this.listaconvocatoria;

      });

  }
  anexo1generado:any;
  descargarPDF(anexogenerado :any) {

    this.anexo1generado = anexogenerado; // obtén el ID de la solicitud
    const url = `http://68.183.134.207:8080/api/documentoAnexo1/download/${this.anexo1generado}`;
    window.open(url, '_blank');
  }

 

}
