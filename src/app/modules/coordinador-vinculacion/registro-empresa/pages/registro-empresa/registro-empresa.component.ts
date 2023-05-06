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
    this.limpiarCampos();
  }

  crearEmpresa() {
    if (!this.empresa.rucEmpresa || !this.empresa.nombreEmpresa || !this.empresa.correo || !this.empresa.direccion || !this.empresa.numeroTelefono) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Por favor llene todos los campos requeridos.',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  
    if (this.empresa.rucEmpresa.length !== 13) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'El RUC debe tener 13 dígitos.',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  
    if (this.empresa.numeroTelefono.length !== 7) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'El número de teléfono debe tener 7 dígitos.',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.empresa.correo)) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Por favor ingrese un correo válido.',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  
    this.empresaServices.existeEmpresa(this.empresa.rucEmpresa).subscribe(response => {
      if (response != null) {
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Ya existe una empresa con este RUC.',
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }
  
      this.empresaServices.crearEmpresa(this.empresa).subscribe(response => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Empresa creada satisfactoriamente.',
          showConfirmButton: false,
          timer: 2000,
        });
        this.limpiarCampos();
      });
    });
  }

  validarSoloNumeros(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  validarSoloLetras(event: any) {
  const charCode = (event.which) ? event.which : event.keyCode;
  if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode != 32) {
    event.preventDefault();
    return false;
  }
  return true;
}

validarCorreo(correo: string): boolean {
  const regex = /\S+@\S+\.\S+/; 
  return regex.test(correo); 
}

limpiarCampos() {
  this.empresa.rucEmpresa = '';
  this.empresa.nombreEmpresa = '';
  this.empresa.ciudad = '';
  this.empresa.codigoPostal = '';
  this.empresa.correo = '';
  this.empresa.descripcion = '';
  this.empresa.direccion = '';
  this.empresa.numeroTelefono = '';

}
}
