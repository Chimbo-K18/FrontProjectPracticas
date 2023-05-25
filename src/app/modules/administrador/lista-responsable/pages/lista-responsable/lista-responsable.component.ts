import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-lista-responsable',
  templateUrl: './lista-responsable.component.html',
  styleUrls: ['./lista-responsable.component.css']
})
export class ListaResponsableComponent implements OnInit {
  //TABLA empresa
  displayedColumns: string[] = [
    'cedula',
    'nombres',
    'apellidos',
    'correo',
    'carrera',
  ];
  listadocentes: any[] = [];
  dataSource = new MatTableDataSource<Usuarios>(this.listadocentes);

  buscarPorCedula() {
  this.resultadosBusqueda = [];
  this.listadocentes.forEach((Usuarios) => {
    if (Usuarios.cedula === this.cedulaBuscada) {
      this.resultadosBusqueda.push(Usuarios);
    }
  });
  this.dataSource = new MatTableDataSource<Usuarios>(this.resultadosBusqueda);
  this.dataSource.paginator = this.paginator;
}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //FINTABLA

  
  Usuarios: Usuarios = new Usuarios();
  resultadosBusqueda: any[] = [];
  cedulaBuscada: string = '';

  constructor(
    public activatedRoute: ActivatedRoute,
    private UserService:UserService,

  ) {}
  ngOnInit(): void {
    this.Obtenerdocente();
  }
  //buscar usuario
  onInputKeyup() {
    if (!this.cedulaBuscada) {
      this.dataSource.data = this.listadocentes;
      this.dataSource.paginator = this.paginator;
    }
  }

  /////////////obtener responsables
  ids:number=4;
  Obtenerdocente() {
    this.UserService.buscarUsuarioRol(this.ids).subscribe((data) => {
      if (Array.isArray(data)) {
        this.listadocentes = data.map((result) => {
          let docentes = new Usuarios();
          docentes.cedula = result.cedula;
          docentes.nombres = result.nombres;
          docentes.apellidos = result.apellidos;
          docentes.correo = result.correo;
          docentes.carrera = result.carrera;
          return docentes;
        });
        console.log(data);
        this.dataSource.data = this.listadocentes;
      } else {
        console.log("Error: data no es un arreglo.");
      }
    });
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
