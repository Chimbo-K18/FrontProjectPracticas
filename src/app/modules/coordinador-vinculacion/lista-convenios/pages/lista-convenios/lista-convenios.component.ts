import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convenio } from 'src/app/models/convenios';
import { DetalleConvenio } from 'src/app/models/detalleconvenio';
import { ConveniosService } from 'src/app/services/convenios.service';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';
import { FormBuilder, Validators } from '@angular/forms';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-convenios',
  templateUrl: './lista-convenios.component.html',
  styleUrls: ['./lista-convenios.component.css']
})
export class ListaConveniosComponent implements OnInit {

  conve: Convenio = new Convenio();
  estados: boolean = false;

  convenios: DetalleConvenio[] = [];
  displayedColumns: string[] = ['position', 'name', 'itv', 'weight', 'symbol','des', 'ab', 'colum'];
  dataSource = new MatTableDataSource<DetalleConvenio>(this.convenios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor( private convenioService: DetalleconvenioService, private conveniosService: ConveniosService) {
    this.capturarConvenio();

  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  //  Actualizar Estado
  traerEstado(idConvenio: any) {
    console.log(idConvenio);
    localStorage.setItem('id', String(idConvenio));
  }

  //Cambiar Estado
  capturar: any;
  cambiarEstado(event: any, element: any) {

    element.estado = event.checked;
    this.estados = element.estado;

    if (element.estado) {
      console.log("El toggle está activado");
      this.estados = true;

      console.log(this.estados);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'LA EMPRESA SE HA RECUPERADO',
        showConfirmButton: true,
        timer: 2000,
      });

    } else {

      console.log("El toggle está desactivado");
      this.estados = false;
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'LA EMPRESA SE HA ELIMINADO',

        showConfirmButton: true,
        timer: 2000,
      });

    }

    console.log(this.estados);
    this.capturar = localStorage.getItem("id");
    console.log("xxx" + this.capturar);

    this.conveniosService.buscarId(this.capturar).subscribe(response => {

      this.conve = response;
      this.conve.estado = this.estados;
      console.log("base: " + this.conve.estado);
      console.log("Estado: " + response.estado);
      this.conveniosService.UpdateConvenio(this.conve, this.capturar).subscribe(response_convenio => {
        console.log(response_convenio.estado);

      });

    });

  }

  //Actualizar
  //Enviar por local Storag
  traerConevenio(idConevenio: any) {
    console.log("Estoy aki.");
    localStorage.setItem('idConve', String(idConevenio));
    console.log("Este es el Id que mando a traer: " + idConevenio);
    this.capturarConvenio();

  }

  captura: any;

  capturarConvenio() {
  fecha_elaboraciones: new Date() // Inicializa con la fecha actual

    this.captura = localStorage.getItem("idConve");
    console.log("Este es el id que estoy recibiendo: " + this.captura);
    this.conveniosService.buscarId(this.captura).subscribe(response => {
      console.log(response);
      console.log(response.numero_itv);
      this.conve.numero_convenio = response.numero_convenio;
      console.log(this.conve.idConvenio);

      this.conve.numero_itv = response.numero_itv;
      console.log(this.conve.numero_itv);
      this.conve.fecha_elaboracion = response.fecha_elaboracion;
      this.conve.descripcion = response.descripcion;
      this.conve= response;
      console.log(this.conve.descripcion);

    });
  }

  actualizarConvenio() {
    this.conveniosService.UpdateConvenio(this.conve, this.captura)
      .subscribe(response => {
        console.log(response);
        console.log("La convenio ha sido actualizada correctamente.");
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Empresa Actualizada Exitosamente',
          showConfirmButton: false,
          timer: 2000,
        });
      }, error => {

        console.log('Error al actualizar la convenio:', error);
        Swal.fire(
          'Error',
          'No se pudo actualizar la convenio. Por favor, inténtelo nuevamente.',
          'error'
        );
      });
  }

  actualizarPagina() {
    location.reload();
  }

  onActualizarClick() {
    this.actualizarConvenio();
    this.actualizarPagina();
  }

}
