import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa();
  constructor(private empresaServices: EmpresaService, private activateRoute: ActivatedRoute) {
    //Capturar la empresa por local stora

    // this.actualizarEmpresa();

  }

  ngOnInit(): void {
    // Buscar Empresa Por ID
    this.activateRoute.params
      this.empresa = new Empresa;
      this.empresa.ciudad = '';
      this.empresa.correo = '';
      this.empresa.codigoPostal = '';
      this.empresa.descripcion = '';
      this.empresa.direccion = '';
      this.empresa.nombreEmpresa = '';
      this.empresa.rucEmpresa = '';
      this.empresa.numeroTelefono = '';
  }

  crearEmpresa() {
   this.empresa.status = true;

  if (!this.empresa.rucEmpresa || !this.empresa.correo || !this.empresa.numeroTelefono) {
    Swal.fire(
      'Campos Vacíos',
      'Todos los campos deben ser ingresados.',
      'error'
    );
  } else if (this.empresa.rucEmpresa.length !== 13) {
    Swal.fire(
      'Error',
      'El RUC debe tener 13 dígitos.',
      'error'
    );
  } else if (!this.empresa.correo.endsWith('@gmail.com') &&
  !this.empresa.correo.endsWith('@hotmail.com') &&
  !this.empresa.correo.endsWith('@outlook.com')) {    Swal.fire(
      'Error',
      'El correo electrónico debe tener el formato correcto.',
      'error'
    );
  } else {
    this.empresaServices.crearEmpresa(this.empresa)
      .subscribe(response => {
        console.log('Éxito al Registrar la empresa');
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Empresa Creada Exitosamente',
          showConfirmButton: false,
          timer: 2000,
        });
      }, error => {
        console.log('Error al registrar la empresa:', error);
        Swal.fire(
          'Error',
          'No se pudo registrar la empresa. Por favor, inténtelo nuevamente.',
          'error'
        );
      });
  }
}

  LimpiarCampos() {
    this.empresa.ciudad = '';
    this.empresa.correo = '';
    this.empresa.codigoPostal = '';
    this.empresa.descripcion = '';
    this.empresa.direccion = '';
    this.empresa.nombreEmpresa = '';
    this.empresa.rucEmpresa = '';
    this.empresa.numeroTelefono = '';
  }

  onKeyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  //Capturar por local storas
  capturar: any;
  capturarEmpresa() {
    this.capturar = localStorage.getItem("idEmpre");
    console.log(this.capturar);

    this.empresaServices.buscarId(this.capturar).subscribe(response => {
      this.empresa.rucEmpresa = response.rucEmpresa;
      this.empresa.nombreEmpresa = response.nombreEmpresa;
      this.empresa.correo = response.correo;
      this.empresa.ciudad = response.ciudad;
      this.empresa.numeroTelefono = response.numeroTelefono;
      this.empresa.direccion = response.direccion;
      this.empresa.codigoPostal = response.codigoPostal;
      this.empresa.descripcion = response.descripcion;

    });
  }

  actualizarEmpresa() {
    this.empresaServices.UpdateEmpresa(this.empresa, this.capturar)
      .subscribe(response => {
        console.log(response);
        console.log("La empresa ha sido actualizada correctamente.");
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Empresa Actualizada Exitosamente',
          showConfirmButton: false,
          timer: 2000,
        });
      }, error => {

        console.log('Error al actualizar la empresa:', error);
        Swal.fire(
          'Error',
          'No se pudo actualizar la empresa. Por favor, inténtelo nuevamente.',
          'error'
        );
      });
  }


  onActualizarClick() {
    this.actualizarEmpresa();
  }

}

