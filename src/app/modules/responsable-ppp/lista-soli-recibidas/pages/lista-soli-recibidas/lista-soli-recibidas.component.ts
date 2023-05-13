import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { DocumentoSolicitudPracticaService } from 'src/app/services/doc/DocumentoSolicitudPractica.service';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
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
  selector: 'app-lista-soli-recibidas',
  templateUrl: './lista-soli-recibidas.component.html',
  styleUrls: ['./lista-soli-recibidas.component.css']
})
export class ListaSoliRecibidasComponent {
  //TABLA
  solicitudpractica: SolicitudPracticas = new SolicitudPracticas();

  displayedColumns1: string[] = ['idSolicitudPracticas', 'nombre_carrera', 'numeroEstudiantes', 'tutorEmpresarial.empresa.nombreEmpresa','name','weight'];
  dataSource1 = new MatTableDataSource<SolicitudPracticas>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatStepper) stepper!: MatStepper;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
  }
  constructor(private _formBuilder: FormBuilder,
    private solicitudpracticas: SolicitudpracticasService,
    private documentoSolPracticas: DocumentoSolicitudPracticaService, private responsableppservice: Responsable_PPPService) {
    this.listarSolicitudes();
  }

  ngOnInit(): void {
  }

  //FINTABLA

  idsoli: any;
  capturarid(id: any) {
    this.idsoli = id;
    console.log(this.idsoli);
    localStorage.setItem("idsolicitud", String(this.idsoli));


  }
  apruebaid: any;

  resetStepper() {
    this.stepper.reset();
  }

  nombreprac:any;
  aprobarsolicitud() {
    Swal.fire({
      title: 'Estas seguro que deseas asignar',
      text: "Esta asignación sera permanente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Continuar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apruebaid = localStorage.getItem("idsolicitud");
        this.solicitudpracticas.getRequest(this.apruebaid).subscribe(datasali => {
          console.log(datasali);
          this.solicitudpractica = datasali;
          this.solicitudpractica.nombreSolicitud = this.nombreprac;
          this.solicitudpractica.fechaAceptacion = this.fechaela;
          this.solicitudpractica.estadoSolicitud = true;
          this.solicitudpracticas.updateSolicitud(this.solicitudpractica, this.idsoli).subscribe(dataupdate => {
            console.log(dataupdate);
            this.listarSolicitudes();
          });
        });
        this.resetStepper();
        Swal.fire(
          'APROBADO',
          'CON EXITO',
          'success'
        )
      }
    })
  }

  fechaela: any;
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value != null) {
      console.log("entro a que si vale");
      this.fechaela = event.value.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      this.solicitudpractica.fechaAceptacion = this.fechaela;
      console.log(this.solicitudpractica.fechaAceptacion);
      const nombresolicitud = document.getElementById(
        'nombresolicitud'
      ) as HTMLInputElement;
      this.nombreprac = nombresolicitud.value;
      console.log(this.nombreprac);
    } else {
      console.log("entro a null");
      this.fechaela = null;
    }
  }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;



  idusuario: any;
  dataresponsable: any;
  listassolicitudes: any[] = [];
  listarSolicitudes() {
    this.idusuario = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
      this.dataresponsable = datausu.carrera;
      this.solicitudpracticas.getSolicitudesEstadofalse(this.dataresponsable).subscribe(data => {
        this.listassolicitudes = data;
        console.log(this.listassolicitudes);
        this.dataSource1.data = this.listassolicitudes;
      })
    });

   
  }

  idSeleccionadas: string[] = [];
  materiaSeleccionadas: string[] = [];
  empresaSeleccionadas: string[] = [];
  capturarCheckbox(checkbox: MatCheckbox, id: string, carreras: string, empresa: string) {
    if (checkbox.checked) {
      console.log('El checkbox está seleccionado');
      this.idSeleccionadas.push(id);
      this.materiaSeleccionadas.push(carreras);
      this.empresaSeleccionadas.push(empresa);
    } else {
      console.log('El checkbox no está seleccionado');
      const index = this.idSeleccionadas.indexOf(id);
      if (index > -1) {
        this.idSeleccionadas.splice(index, 1);
      }
    }
    console.log(`Cédulas seleccionadas: ${this.idSeleccionadas}`);
    console.log(`Cédulas seleccionadas: ${this.materiaSeleccionadas}`);
    console.log(`Cédulas seleccionadas: ${this.empresaSeleccionadas}`);
  }

  downloadDocumentoSoliPractica(id: any) {
    this.documentoSolPracticas.descargarDocumentoSoliPractica(id).subscribe(
      (data) => {
        const file = new Blob([data], { type: 'application/pdf' }); // Cambiar el tipo MIME a pdf
        const fileUrl = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Documento-Solicitud-Practica.pdf'; // Nombre del documento para cuando se descargue
        link.click();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ///obtener el id de la solicitud practicas de la tabla
  selectedSolicitud: any;
  // para seleccionar la convocatoria
  seleccionarSolicitud(solicitud: any) {
    console.log('Se seleccionó la solicitud:', solicitud.idSolicitudPracticas);
    this.selectedSolicitud = solicitud.idSolicitudPracticas;
    this.buscarConvocatoria();
  }

  idencontrado: any;
  buscarConvocatoria() {
    this.solicitudpracticas.getRequest(this.selectedSolicitud).subscribe(dataSolicitud => {
      console.log(dataSolicitud);
    });
    this.solicitudpracticas.buscarDocumentSolicitud(this.selectedSolicitud).subscribe(datadocumento => {
      console.log(datadocumento)
      this.downloadDocumentoSoliPractica(datadocumento);

    });
  }


}


