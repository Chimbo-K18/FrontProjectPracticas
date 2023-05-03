import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service'
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Convenios } from 'src/app/models/convenios';
import { ConveniosService } from 'src/app/services/convenios.service';
import { DetalleConvenio } from 'src/app/models/detalleconvenio';
import { DetalleconvenioService } from 'src/app/services/detalleconvenio.service';

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
  selector: 'app-envio-solicitud',
  templateUrl: './envio-solicitud.component.html',
  styleUrls: ['./envio-solicitud.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class EnvioSolicitudComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ceroFormGroup = this._formBuilder.group({
    cerotCtrl: ['', Validators.required],
  });

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  //llamado a la clase 
  public solicitudPractica: SolicitudPracticas=new SolicitudPracticas();
  convenios: Convenios[] | undefined ;
  listaDetalles: DetalleConvenio[] | undefined;



  constructor(private _formBuilder: FormBuilder, private solicitud:SolicitudpracticasService, 
    private router:Router, private convenioService: ConveniosService,
    private detalleService: DetalleconvenioService) { }

  ngOnInit(): void {


    this.listar();
    this.listarDetalles();

    const dropArea = document.querySelector<HTMLElement>(".drop_box")!;
    const button = dropArea.querySelector<HTMLButtonElement>("button")!;
    const input = dropArea.querySelector<HTMLInputElement>("input")!;
    let file: File;
    let filename: string;

    button.onclick = () => {
      input.click();
    };

    input.addEventListener("change", function (e) {
      const fileName = (e.target as HTMLInputElement).files![0].name;
      const filedata = `
        <form action="" method="post">
        <div class="form">
        <h4 style="margin-top: 10px;
        margin-bottom: 20px;
        font-size: 12px;
        color: #005af0;">${fileName}</h4>
        <button style="  text-decoration: none;
        background-color: #005af0;
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        outline: none;
        transition: 0.3s;">Subir</button>
        </div>
        </form>`;
      dropArea.innerHTML = filedata;
    });
  }
  /*
  public create(){
    this.solicitud.saveSolicitud(this.solicitudPractica).subscribe(this.solicitudPractica)=>{
      this.secondFormGroup
      Swal.fire(
        'Solicitud de Practicas Guardado',
        `Solicitud ${this.solicitudPractica.nombreSolicitud}`,
        'success'
      )
    }
  }*/

  public create(){
    return this.solicitud.saveSolicitud(this.solicitudPractica).subscribe(
      res => {
        //this.router.navigate(['/administrador/lista-vehiculos'])
      console.log(res)
            Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se a creado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    
      },

      err => console.error(err)
    )
  }

  validaRequest(){

    if(!this.solicitud.getRequest(this.solicitudPractica.idSolicitudPracticas)){
      console.log('Solicitud Encontrada');
    }else{
      this.create();
    }

  }

  public listar() {
    this.convenioService.getConvenios().subscribe((res) => (this.convenios = res))

  }

  public listarDetalles() {
    this.detalleService.getDetalleConvenio().subscribe((res) => (this.listaDetalles = res))

  }

}