import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
  empresas: Empresa = new Empresa();
  empresa: Empresa[] = [];
  empre: Empresa = new Empresa();
  estado: boolean = false;
  //TABLA
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['rucEmpresa', 'nombreEmpresa', 'correo', 'numeroTelefono'];
  displayedColumns: string[] = ['idEmpresa', 'nombreEmpresa', 'correo', 'direccion', 'numeroTelefono', 'acciones', 'delete'];
  dataSource = new MatTableDataSource<Empresa>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private empresaServices: EmpresaService) {
    this.capturarEmpresa();

   }

  ngOnInit(): void {
    this.empresaServices.listarEmpresa().subscribe(response => this.dataSource.data = this.empresa = response);
    
  }

  //Enviar por local Storag
  traerEmpresa(idEmpresa: any) {
    console.log(idEmpresa);
    localStorage.setItem('idEmpre', String(idEmpresa));
    this.capturarEmpresa();


  }
  traerEstado(idEmpresa: any) {
    console.log(idEmpresa);
    localStorage.setItem('id', String(idEmpresa));
  }


  //Cambiar Estado
  capturar: any;
  cambiarEstado(event: any, element: any) {

    element.estado = event.checked;
    this.estado = element.estado;

    if (element.estado) {
      console.log("El toggle está activado");
      this.estado = true;
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'LA EMPRESA SE HA RECUPERADO',
        showConfirmButton: true,
        timer: 2000,
      });

    } else {

      console.log("El toggle está desactivado");
      this.estado = false;
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'LA EMPRESA SE HA ELIMINADO',

        showConfirmButton: true,
        timer: 2000,
      });

    }


    console.log(this.empre.status);
    this.capturar = localStorage.getItem("id");
    console.log(this.capturar);

    this.empresaServices.buscarId(this.capturar).subscribe(response => {


      this.empre = response;

      this.empre.status = this.estado;

      
      console.log(response);
      
      this.empresaServices.UpdateEmpresa(this.empre, this.capturar).subscribe(response_empre => {
        console.log(response_empre);

      });

    });
  }

  //Actualizar

  captura: any;
  capturarEmpresa() {
    this.captura = localStorage.getItem("idEmpre");
    console.log(this.captura);

    this.empresaServices.buscarId(this.captura).subscribe(response => {
      this.empre.rucEmpresa = response.rucEmpresa;
      this.empre.nombreEmpresa = response.nombreEmpresa;
      this.empre.correo = response.correo;
      this.empre.ciudad = response.ciudad;
      this.empre.numeroTelefono = response.numeroTelefono;
      this.empre.direccion = response.direccion;
      this.empre.codigoPostal = response.codigoPostal;
      this.empre.descripcion = response.descripcion;

    });
  }
  actualizarEmpresa() {
    this.empresaServices.UpdateEmpresa(this.empre, this.captura)
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

  actualizarPagina() {
    location.reload();
  }
  
  onActualizarClick() {
    this.actualizarEmpresa();
  }

  //FIltrado por cualquier elemento de la lista
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}