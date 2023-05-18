import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';


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
  selector: 'app-recibe-anexo8',
  templateUrl: './recibe-anexo8.component.html',
  styleUrls: ['./recibe-anexo8.component.css']
})



export class RecibeAnexo8Component implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'carrera','descargar'];
  dataSource = new MatTableDataSource<Practica>([]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private responsableppservice: Responsable_PPPService, private practicaservice: PracticaService){
    
  }
  ngOnInit(): void {

    this.listarAnexos();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  Ce:any;
  carreradata:any;
  listaconvocatoria: any[] = [];
  listarAnexos() {
    this.Ce = localStorage.getItem("idusuario");
    console.log(this.Ce);
    this.responsableppservice.getBuscarcedula(this.Ce).subscribe(datausu => {
      console.log(datausu);
    this.carreradata = datausu.carrera;
        this.practicaservice.listarPorAnexo1Recibe(this.carreradata).subscribe(dataconvo => {
          console.log(dataconvo);
          this.listaconvocatoria = dataconvo;
          this.dataSource.data = this.listaconvocatoria;

        });
      });

  }
  anexo1generado:any;
  descargarPDF(idAnexo1 :any) {
    this.anexo1generado = idAnexo1; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo1/${this.anexo1generado}`;
    window.open(url, '_blank');
  }

 

}
