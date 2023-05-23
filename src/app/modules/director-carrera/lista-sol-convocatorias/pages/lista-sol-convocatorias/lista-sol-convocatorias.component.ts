import { UserService } from './../../../../../services/user.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Convocatorias } from 'src/app/models/convocatorias';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';




@Component({
  selector: 'app-lista-sol-convocatorias',
  templateUrl: './lista-sol-convocatorias.component.html',
  styleUrls: ['./lista-sol-convocatorias.component.css']
})
export class ListaSolConvocatoriasComponent  {
  convocatorias: Convocatorias | any;
  mivariable !: any;
  //TABLA
  //TABLA convocatorias
  displayedColumns: string[] = [
    'nombreconvocatoria',
    'fechapublicacion',
    'fechaexpiracion',
    'estadoConvocatoria',
  ];
  listaConvocatoria: Convocatorias[] = [];
  solicitudconvocatoria: SolicitudConvocatoria = new SolicitudConvocatoria();
  loading: boolean = true;
  dataSource = new MatTableDataSource<Convocatorias>([]);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private convocatoriaService: ConvocatoriasService, 
    private UserService:UserService,
    private solicitudconvocatoriaservice: SolicitudConvocatoriasService) {
    this.obtenerConvocatorias();
  }

  ngOnInit(): void {

    this.listaConvocatorias();
  }
  listaConvocatorias() {
    this.convocatoriaService.getConvocatorias().subscribe(
      (res) => {
        this.convocatorias = res;
        console.log(this.convocatorias);
      }
    );
  }
 
  listassolicitudes: any[] = [];
  idusuarious: any;
  datadirector: any;
  //obtener convocatorias
  obtenerConvocatorias() {
    this.idusuarious = localStorage.getItem("idusuario");
    this.UserService.getuscedula(this.idusuarious).subscribe(datausu => {
    this.datadirector = datausu.carrera;
    console.log(this.datadirector);
    this.convocatoriaService.listarConvocatoriasPorCarrera(this.datadirector).subscribe((data) => {
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
      console.log(this.listaConvocatoria);
      this.loading = false;

    });
    });
   
  }

}
