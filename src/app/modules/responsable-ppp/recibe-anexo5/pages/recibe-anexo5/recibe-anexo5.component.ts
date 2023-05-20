import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';



@Component({
  selector: 'app-recibe-anexo5',
  templateUrl: './recibe-anexo5.component.html',
  styleUrls: ['./recibe-anexo5.component.css']
})



export class RecibeAnexo5Component implements AfterViewInit {

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
        this.practicaservice.listarPorAnexo5Recibe(this.carreradata).subscribe(dataconvo => {
          console.log(dataconvo);
          this.listaconvocatoria = dataconvo;
          this.dataSource.data = this.listaconvocatoria;

        });
      });

  }
  anexo5generado:any;
  descargarPDF(idAnexo5 :any) {
    this.anexo5generado = idAnexo5; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo5/${this.anexo5generado}`;
    window.open(url, '_blank');
  }

 

}
