import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service'
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(private _formBuilder: FormBuilder, private solicitud:SolicitudpracticasService, private router:Router) { }

  ngOnInit(): void {
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

}