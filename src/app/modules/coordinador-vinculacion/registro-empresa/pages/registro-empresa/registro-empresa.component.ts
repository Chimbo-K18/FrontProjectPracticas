import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

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

  crearEmpresa(){
    this.empresaServices.crearEmpresa(this.empresa)
    .subscribe(response => console.log('Exito al Registrar la empresa'));
  }

  //Metodo Para limpiar los Campos
  guardado = false;
  Limpiar(){
    this.empresa.rucEmpresa = ''; // Limpiar el campo "Ruc"
    this.empresa.nombreEmpresa = ''; // Limpiar el campo "NombreEmpresa"
    this.empresa.correo = ''; // Limpiar el campo "Correo"
    this.empresa.ciudad = ''; // Limpiar el campo "Ciudad"
    this.empresa.numeroTelefono = ''; // Limpiar el campo "Telefono"
    this.empresa.direccion = ''; // Limpiar el campo "Direccion"
    this.empresa.codigoPostal = ''; // Limpiar el campo "CodigoPostal"
    this.empresa.descripcion = ''; // Limpiar el campo "Descripcion"
    this.guardado = true;
  }
  //Solo Registra Numeros
  soloNumeros(event: KeyboardEvent) {
    const codigo = event.keyCode;
    if ((codigo < 48 || codigo > 57) && codigo !== 8) {
      event.preventDefault();
    }
  }
  //Solo Texto
  soloTexto(event: KeyboardEvent) {
    const codigo = event.keyCode;
    if ((codigo >= 48 && codigo <= 57) || (codigo >= 96 && codigo <= 105)) {
      event.preventDefault();
    }
  }

}
