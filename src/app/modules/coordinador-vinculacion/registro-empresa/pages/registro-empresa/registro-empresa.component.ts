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
      // .subscribe(params => {
      //   let id: number = params['idEmpresa'];
      //   if (id) {
      //     this.empresaServices.buscarId(id).subscribe(response => this.empresa = response);
      //   }
      // });

      this.empresa = new Empresa;
    this.limpiarCampos();
  }
  

  // crearEmpresa() {
  //   if (!this.empresa.rucEmpresa || !this.empresa.correo || !this.empresa.numeroTelefono) {
  //     Swal.fire(
  //       'Campos Vacíos',
  //       'Todos los campos deben ser ingresados.',
  //       'error'
  //     );
  //   } else {
  //     this.empresaServices.crearEmpresa(this.empresa)
  //       .subscribe(response => {
  //         console.log('Exito al Registrar la empresa');
  //         Swal.fire({
  //           position: 'top',
  //           icon: 'success',
  //           title: 'Empresa Creada Exitosamente',
  //           showConfirmButton: false,
  //           timer: 2000,
  //         });
  //       }, error => {
  //         console.log('Error al registrar la empresa:', error);
  //         Swal.fire(
  //           'Error',
  //           'No se pudo registrar la empresa. Por favor, inténtelo nuevamente.',
  //           'error'
  //         );
  //       });
  //   }
  // }

  



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

