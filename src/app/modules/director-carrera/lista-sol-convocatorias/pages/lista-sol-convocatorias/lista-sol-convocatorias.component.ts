import { UserService } from './../../../../../services/user.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista-sol-convocatorias',
  templateUrl: './lista-sol-convocatorias.component.html',
  styleUrls: ['./lista-sol-convocatorias.component.css']
})
export class ListaSolConvocatoriasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'fechaE', 'fechaA','estado'];
  dataSource = new MatTableDataSource<any>([]);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private convocatoriaService: ConvocatoriasService, 
    private UserService:UserService,
    private solicitudconvocatoriaservice: SolicitudConvocatoriasService) {
    this.obtenersolicitudes();
  }

  ngOnInit(): void {

  }
  listassolicitudes: any[] = [];
  idusuarious: any;
  datadirector: any;
  listaconvocatorias:any;
  //obtener convocatorias
  obtenersolicitudes() {
    this.idusuarious = localStorage.getItem("idusuario");
    this.UserService.getuscedula(this.idusuarious).subscribe(datausu => {
    this.datadirector = datausu.carrera;
    console.log(this.datadirector);
    this.convocatoriaService.listarConvocatoriasPorCarrera(this.datadirector).subscribe((data) => {
      this.listaconvocatorias = data;
            console.log(data); 
            this.dataSource.data = this.listaconvocatorias
            this.dataSource = new MatTableDataSource<any>(this.listaconvocatorias);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
    });
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
