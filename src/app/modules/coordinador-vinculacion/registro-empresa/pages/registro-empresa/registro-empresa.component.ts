import { Component, OnInit } from '@angular/core';
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
  constructor(private empresaServices: EmpresaService) { }

  ngOnInit(): void {
  }

  crearEmpresa() {
    if (!this.empresa.rucEmpresa || !this.empresa.correo || !this.empresa.numeroTelefono) {
      Swal.fire(
        'Campos Vacíos',
        'Todos los campos deben ser ingresados.',
        'error'
      );
    } else {
      this.empresaServices.crearEmpresa(this.empresa)
        .subscribe(response => {
          console.log('Exito al Registrar la empresa');
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


}

