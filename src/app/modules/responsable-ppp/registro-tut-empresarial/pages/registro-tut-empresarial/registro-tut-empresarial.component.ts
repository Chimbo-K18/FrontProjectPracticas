import { rolService } from './../../../../../services/rol.service';
import { usuarioService } from './../../../../../services/usuario.service';
import { tutorempresarialService } from './../../../../../services/tutorempresarial.service';
import { tutorempresarial } from './../../../../../models/tutorempresarial';
import { personasemp } from './../../../../../models/personaemp';
import { personaempService } from './../../../../../services/personaemp.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { usuario } from 'src/app/models/usuario';
import { FormControl, FormGroup } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { Rol } from 'src/app/models/rol';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-registro-tut-empresarial',
  templateUrl: './registro-tut-empresarial.component.html',
  styleUrls: ['./registro-tut-empresarial.component.css']
})
export class RegistroTutEmpresarialComponent {
  //TABLA
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
    //FINTABLA
    @ViewChild('modal')
    modal!: TemplateRef<any>;

    //MODAL
    openModal(): void {

      const dialogRef = this.dialog.open(this.modal);  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    closeModal(): void {
      this.dialog.closeAll();
    }
  
  
  
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  
    isEditable = false;
    // usuario = {
    //   cedula: '',
    //   contrasenia: '',
    //   username: ''
    // };
personas={cedula:''};
datos={cedula: ''};


// firstFormGroup = new FormGroup({
//   firstCtrl: new FormControl(),
//   secondCtrl: new FormControl()
// });
actualizarValorSegundoInput() {
  this.datos.cedula = this.personasemp.cedula;

}
actualizarNombreSegundoInput() {
  this.usuario.nombres = this.personasemp.primer_nombre;
  this.usuario.apellidos = this.personasemp.primer_apellido;

}
actualizarApellidoSegundoInput() {
  this.usuario.apellidos = this.personasemp.primer_apellido;

}

    /////instancias
    personasemp: personasemp = new personasemp;
    tutorempresarial: tutorempresarial = new tutorempresarial();
    usuario: usuario = new usuario();
    empresa: Empresa = new Empresa();
    rol: Rol = new Rol();
    idUsuario: any;
    idEmpresa: any;
    idrol:any;



    constructor(private _formBuilder: FormBuilder,public dialog: MatDialog, private personaempService: personaempService
      , private tutorempresarialService: tutorempresarialService , private usuarioService: usuarioService, private rolService: rolService) {}
  
    ngOnInit(): void {
      this.obtenerUsuario();
      // this.obtenerEmpresa();
    }


    crearpersonaemp(){
      this.personaempService.crearpersonaemp(this.personasemp)
      .subscribe(response => console.log('Exito al Registrar persona empresa'));
    }
    creartutoremp(){
      this.tutorempresarialService.creartutoremp(this.tutorempresarial)
      .subscribe(response => console.log('Exito al Registrar tutor empresarial'));
    }
    crearusuario(){
      this.usuarioService.crearusuario(this.usuario)
      .subscribe(response => console.log('Exito al Registrar usuario'));
    }
 
    //////////////////obtener datos de otras tablas
    obtenerUsuario() {
      this.idUsuario = localStorage.getItem('idUsuario');
      if (this.idUsuario != '' && this.idUsuario != undefined) {
        this.usuarioService.buscarus(this.idUsuario).subscribe((data) => {
          console.log(data);
          this.usuario = data;
          // this.idrol = data.rol?.idrol;
          this.obtenerRolDelUsuario(this.idrol);
        })
      } else {
        console.log("Usuario no foun => ")
      }
    }
    obtenerRolDelUsuario(idrol: any) {
      if (this.idrol != '' && this.idrol != undefined) {
        this.rolService.buscarrol(this.idrol).subscribe((data) => {
          console.log(data);
          this.rol = data;
        })
      } else {
        console.log("rol no found o esta vacio=> ")
      }
    }
   
  }
  