import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convenio } from 'src/app/models/convenios';
import { DetalleConvenio } from 'src/app/models/detalleconvenio';
import { ConveniosService } from 'src/app/services/convenios.service';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';



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
  selector: 'app-lista-convenios',
  templateUrl: './lista-convenios.component.html',
  styleUrls: ['./lista-convenios.component.css']
})
export class ListaConveniosComponent implements  OnInit {


  convenios: DetalleConvenio[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'ab', 'colum'];
  dataSource = new MatTableDataSource<DetalleConvenio>(this.convenios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private convenioService: DetalleconvenioService) { }

  ngOnInit(): void {

    this.obtenerConvenios();

  }

  obtenerConvenios() {
    this.convenioService.getDetalleConvenio()
      .subscribe(
        (convenios: DetalleConvenio[]) => {
          this.convenios = convenios;

          console.log(this.convenios)
          this.dataSource = new MatTableDataSource<DetalleConvenio>(this.convenios);


        },
        error => {
          // Manejo de errores, si es necesario
        }
      );
  }


  //Filtrado para todos los campos de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
