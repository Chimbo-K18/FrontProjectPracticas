import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { verCarreras } from 'src/app/models/verCarreras';
import { vermateriasf } from 'src/app/models/vermateriasf';
import { CarreraService } from 'src/app/services/carrera.service';
import { MateriaService } from 'src/app/services/materias.service';
import{SolicitudpracticasService} from 'src/app/services/solicitudpracticas.service';

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
  selector: 'app-registro-actividades',
  templateUrl: './registro-actividades.component.html',
  styleUrls: ['./registro-actividades.component.css']
})
export class RegistroActividadesComponent implements OnInit {

  displayedColumns: string[] = ['idSolicitudPracticas', 'numeroEstudiantes', 'nombreSolicitud', 'nombre_carrera', 'nombre_carrera', 'empresa'];
  dataSource = new MatTableDataSource<SolicitudPracticas>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public vercarrera: verCarreras = new verCarreras();

  constructor(private carrera: CarreraService, private materia: MateriaService, private solicitudpracticas:SolicitudpracticasService){
this.listarSolicitudes();
    // this.traercarreras();
  }
  Carrera:any;
 capturarmateriasporcarrera(){

  this.materia.getlistarmateriascarrera(this.Carrera).subscribe(data =>{
    data.materia_nombre;
    console.log(data.materia_nombre);
  } );
 }
 materias: any[] = [];



 buscarMateriasPorCarrera(event: any) {
  const carrera = decodeURIComponent(event.target.value);
  if (carrera) {
    this.materia.getlistarmateriascarrera(carrera).subscribe((data: any) => {
      this.materias = data;
    });
  } else {
    this.materias = [];
  }
}

carreraSeleccionada:any;
seleccionarCarrera() {
  console.log(this.carreraSeleccionada);
}

// carrera_nombre : any [] = [];
// traercarreras() {
//   this.carrera.getCarreras().subscribe(data => {
//     this.carrera_nombre = data;
//     console.log(this.carrera_nombre);
//   });
// }
// carreraSeleccionada:any;
// seleccionarCarrera() {
//   console.log(this.carreraSeleccionada);
// }

listassolicitudes:any []=[];
listarSolicitudes(){
  this.solicitudpracticas.getSolicitudes().subscribe(data=>{
this.listassolicitudes = data;
this.dataSource.data= this.listassolicitudes;
  })
}




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }


  ngOnInit(): void {
  }

}
