import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Actividades } from 'src/app/models/actividades';
import { Requerimientos } from 'src/app/models/requerimientos';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { verCarreras } from 'src/app/models/verCarreras';
import { vermateriasf } from 'src/app/models/vermateriasf';
import { ActividadService } from 'src/app/services/actividad.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { MateriaService } from 'src/app/services/materias.service';
import { RequermientoService } from 'src/app/services/requerimientos.service';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import Swal from 'sweetalert2';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-registro-actividades',
  templateUrl: './registro-actividades.component.html',
  styleUrls: ['./registro-actividades.component.css']
})
export class RegistroActividadesComponent implements OnInit {

  actividad: Actividades = new Actividades();
  requerimiento: Requerimientos = new Requerimientos();
  solicitudpractica: SolicitudPracticas = new SolicitudPracticas();

  displayedColumns1: string[] = ['seleccionar', 'idSolicitudPracticas', 'nombreSolicitud', 'nombre_carrera', 'tutorEmpresarial.empresa.nombreEmpresa', 'numeroEstudiantes'];
  dataSource1 = new MatTableDataSource<SolicitudPracticas>([]);

  displayedColumns2: string[] = ['solicitudPracticas.tutorEmpresarial.empresa.nombreEmpresa', 'actividades.detalleActividad', 'actividades.herramientas', 'actividades.nombre_materia'];
  dataSource2 = new MatTableDataSource<Requerimientos>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public vercarrera: verCarreras = new verCarreras();

  constructor(private carrera: CarreraService, private materia: MateriaService, private requerimientoservice: RequermientoService, private solicitudpracticas: SolicitudpracticasService, private actividadservice: ActividadService) {
    this.listarSolicitudes();
    // this.traercarreras();
  }
  Carrera: any;
  capturarmateriasporcarrera() {

    this.materia.getlistarmateriascarrera(this.Carrera).subscribe(data => {
      data.materia_nombre;
      console.log(data.materia_nombre);
    });
  }
  materias: any[] = [];





  idSeleccionadas: string[] = [];
  materiaSeleccionadas: string[] = [];
  empresaSeleccionadas: string[] = [];
  capturarCheckbox(checkbox: MatCheckbox, id: string, carreras: string, empresa: string) {
    if (checkbox.checked) {
      console.log('El checkbox está seleccionado');
      this.idSeleccionadas.push(id);
      this.materiaSeleccionadas.push(carreras);
      this.empresaSeleccionadas.push(empresa);
    } else {
      console.log('El checkbox no está seleccionado');
      const index = this.idSeleccionadas.indexOf(id);
      if (index > -1) {
        this.idSeleccionadas.splice(index, 1);
      }
    }
    console.log(`Cédulas seleccionadas: ${this.idSeleccionadas}`);
    console.log(`Cédulas seleccionadas: ${this.materiaSeleccionadas}`);
    console.log(`Cédulas seleccionadas: ${this.empresaSeleccionadas}`);
  }

  carreraSeleccionada: any;
  seleccionarCarrera() {
    console.log(this.carreraSeleccionada);
  }

  obtenerdatostable() {
    const cedulaSeleccionada = this.idSeleccionadas[this.idSeleccionadas.length - 1];
    console.log(`ID seleccionada: ${cedulaSeleccionada}`);
    let cedulausuario: any = cedulaSeleccionada;
    const solicitud = document.getElementById(
      'solicitud'
    ) as HTMLInputElement;
    solicitud.value = cedulaSeleccionada;
    localStorage.setItem("idsolicitud", String(cedulaSeleccionada));

    const carreraselect = this.materiaSeleccionadas[this.materiaSeleccionadas.length - 1];
    console.log(`Materia seleccionada: ${carreraselect}`);
    let care: any = carreraselect;
    const carrera = document.getElementById(
      'carrera'
    ) as HTMLInputElement;
    carrera.value = carreraselect;
    this.materia.getlistarmateriascarrera(carreraselect).subscribe((data: any) => {
      this.materias = data;
    });

    const empreselect = this.empresaSeleccionadas[this.empresaSeleccionadas.length - 1];
    console.log(`Empresa seleccionada: ${empreselect}`);
    let empresasl: any = empreselect;
    const empresa = document.getElementById(
      'empresa'
    ) as HTMLInputElement;
    empresa.value = empreselect;
  }


  listassolicitudes: any[] = [];
  listarSolicitudes() {

    this.solicitudpracticas.getSolicitudesEstado().subscribe(data => {
      this.listassolicitudes = data;
      console.log(this.listassolicitudes);
      this.dataSource1.data = this.listassolicitudes;
    })
  }

  listarrequerimientos: any[] = [];
  listaRequerimientos() {

    this.requerimientoservice.getRequerimiento().subscribe(dataareque => {
      this.listarrequerimientos = dataareque;
      this.dataSource2.data = this.listarrequerimientos;
    })
  }


  getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  idsoli: any;
  crearActividades() {
    Swal.fire({
      title: 'Esta seguro de asignar esta actividad?',
      text: "Recuerde que esta actividad podra solo ser modificada, no podra ser eliminada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Continuar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividad.nombre_materia = this.carreraSeleccionada;
        const detalle = document.getElementById(
          'detalle'
        ) as HTMLInputElement;
        this.actividad.detalleActividad = detalle.value;
        const herramienta = document.getElementById(
          'herramienta'
        ) as HTMLInputElement;
        this.actividad.herramientas = herramienta.value;
        this.idsoli = localStorage.getItem("idsolicitud");
        this.actividadservice.crearActividad(this.actividad).subscribe(dataacti => {
          this.requerimiento.actividades = dataacti;
          this.solicitudpracticas.getRequest(this.idsoli).subscribe(datasali => {
            console.log(datasali);
            this.solicitudpractica = datasali;
            this.solicitudpractica.estadoActividad = true;
            this.solicitudpracticas.updateSolicitud(this.solicitudpractica, this.idsoli).subscribe(dataupdate => {
              console.log(dataupdate);
              this.requerimiento.solicitudPracticas = dataupdate;
              this.requerimientoservice.crearRequerimiento(this.requerimiento).subscribe(datareque => {
                this.listaRequerimientos();
              });

            });
          });

        });
        Swal.fire(
          'PROCESO',
          'CON EXITO',
          'success'
        )
      }
    })
  }



  procesoterminado() {
    Swal.fire(
      'PROCESO',
      'TERMINADO CON EXITO',
      'success'
    )
  }

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
    this.dataSource1.paginator = this.paginator;

  }


  ngOnInit(): void {
  }

}
