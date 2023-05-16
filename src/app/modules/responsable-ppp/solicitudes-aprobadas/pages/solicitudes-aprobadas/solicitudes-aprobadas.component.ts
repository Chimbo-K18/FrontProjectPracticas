import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';


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
  selector: 'app-solicitudes-aprobadas',
  templateUrl: './solicitudes-aprobadas.component.html',
  styleUrls: ['./solicitudes-aprobadas.component.css']
})


export class SolicitudesAprobadasComponent  {


  displayedColumns: string[] = ['idSolicitudPracticas', 'nombreSolicitud', 'nombre_carrera', 'seleccionar', 'seleccionar1',  'tutorEmpresarial.empresa.nombreEmpresa', 'numeroEstudiantes'];
  dataSource = new MatTableDataSource<SolicitudPracticas>([]);



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private responsableppservice: Responsable_PPPService,
    private solicitudpracticas: SolicitudpracticasService) {

      this.listarSolicitudes();
  }


  listassolicitudes: any[] = [];
  idusuario: any;
  dataresponsable: any;

  listarSolicitudes() {
    this.idusuario = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
      this.dataresponsable = datausu.carrera;
      this.solicitudpracticas.getSolicitudesEstadotrue(this.dataresponsable).subscribe(data => {
        this.listassolicitudes = data;
        console.log(this.listassolicitudes);
        this.dataSource.data = this.listassolicitudes;
      })
    });

  }

}
