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

  crearEmpresa(){
    this.empresaServices.crearEmpresa(this.empresa)
    .subscribe(response => console.log('Exito al Registrar la empresa'));
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Empresa creada satisfactoriamente.',
      showConfirmButton: false,
      timer: 2000,
    });
  }

}
