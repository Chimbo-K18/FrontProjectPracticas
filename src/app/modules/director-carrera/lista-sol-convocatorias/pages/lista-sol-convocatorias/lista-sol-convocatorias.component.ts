import { UserService } from './../../../../../services/user.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
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
    private UserService:UserService) {
    this.obtenersolicitudes();
  }

  ngOnInit(): void {

  }
  listassolicitudes: any[] = [];
  idusuarious: any;
  datadirector: any;
  listaconvocatorias:any;

  obtenersolicitudes() {
    this.idusuarious = localStorage.getItem("idusuario");
    this.UserService.getuscedula(this.idusuarious).subscribe(datausu => {
    this.convocatoriaService.listarConvocatoriasSoliPorCarrera(datausu.carrera).subscribe({
      next: (data) => {
      this.listaconvocatorias = data;
      console.log("estas es la data de convocatoria")
            console.log(data); 
            this.dataSource.data = this.listaconvocatorias
            this.dataSource = new MatTableDataSource<any>(this.listaconvocatorias);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }, 
          error: (err) => {
        console.log("error xd")
          }
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
