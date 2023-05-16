import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convocatorias } from 'src/app/models/convocatorias';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { ActividadService } from 'src/app/services/actividad.service';
import { BaseFenixService } from 'src/app/services/fenix/base-fenix.service';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { DocumentoLanzamientoConvocatoria } from 'src/app/services/doc/DocumentoLanzamientoConvocatoria.service';
import { DocumentoSolicitudConvocatoria } from 'src/app/services/doc/DocumentoSolicitudConvocatoria.service';
import { EstudiantePracticanteService } from 'src/app/services/estudiantepracticante.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { UserService } from 'src/app/services/user.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-lista-convocatorias',
  templateUrl: './lista-convocatorias.component.html',
  styleUrls: ['./lista-convocatorias.component.css']
})
export class ListaConvocatoriasComponent {
  //TABLA
  //TABLA empresa
  displayedColumns: string[] = [
    'idConvocatorias',
    'nombreconvocatoria',
    'fechapublicacion',
    'fechaexpiracion',
    'carrera',
    'documento_convocatoria',
    'opciones',
  ];
  listaConvocatoria: Convocatorias[] = [];
  solicitudConvocatoriaGenerada: any;
  convocatorias: Convocatorias = new Convocatorias();
  solicitudconvocatorias: SolicitudConvocatoria = new SolicitudConvocatoria();
  loading: boolean = true;
  dataSource = new MatTableDataSource<Convocatorias>([]);

  public filesToUpload!: Array<File>;
  solicitudGenerada !: any;
  idDocumento!: any;





  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('inputFile') inputFile!: ElementRef;
  @ViewChild(MatStepper) stepper!: MatStepper;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerConvocatorias();
  }

  //FINTABLA

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private convocatoriaService: ConvocatoriasService,
    private actividadservice: ActividadService, private userservice: UserService,
    private solicitudconvoservice: SolicitudConvocatoriasService,
    private estudianteService: EstudiantePracticanteService,
    private DocumentoLanzamientoConvocatoria: DocumentoLanzamientoConvocatoria,
    private documentoScService: DocumentoSolicitudConvocatoria) { }

  ngOnInit(): void {
  }

  getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  resetStepper() {
    this.stepper.reset();
  }



  //obtener convocatorias
  //obtener convocatorias
  Cedus: any;
  variablecarrera: any;
  usucarrera: any;
  obtenerConvocatorias() {
    this.Cedus = localStorage.getItem("idusuario");
    console.log("id usuario " + this.Cedus)
    this.userservice.getcedula(this.Cedus).subscribe(datausu => {
      this.usucarrera = datausu.carrera;
      this.convocatoriaService.listarConvocatoriasPorCarrera(this.usucarrera).subscribe((data) => {
        this.listaConvocatoria = data.map((result) => {
          let convo = new Convocatorias();
          convo.idConvocatorias = result.idConvocatorias;
          convo.nombreConvocatoria = result.nombreConvocatoria;
          convo.fechaPublicacion = result.fechaPublicacion
          convo.fechaExpiracion = result.fechaExpiracion;
          convo.documentoConvatoria = result.documentoConvatoria;
          this.variablecarrera = result.solicitudPracticas?.nombre_carrera
          console.log(this.variablecarrera);
          return convo;
        });
        this.dataSource.data = this.listaConvocatoria;
        this.loading = false;

      });
    });

  }
  ///obtener el id de la convocatoria de la tabla
  selectedConvo: any;
  // para seleccionar la convocatoria
  seleccionarConvocatoria(convocatorias: any) {
    console.log('Se seleccionó la empresa:', convocatorias);
    this.selectedConvo = convocatorias.idConvocatorias;
    this.buscarConvocatoria();
  }

  idencontrado: any;
  buscarConvocatoria() {
    this.convocatoriaService.getRequest(this.selectedConvo).subscribe(dataconvocatoria => {
      console.log(dataconvocatoria);
    });
    this.convocatoriaService.buscardoc(this.selectedConvo).subscribe(datadocumento => {
      console.log(datadocumento)
      this.downloadDocumentoConvocatoria(datadocumento);

    });
  }

  descargarPDF() {
    const idSolicitud = this.solicitudConvocatoriaGenerada; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/obtener/${idSolicitud}`;
    window.open(url, '_blank');
  }


  downloadFile(data: Blob) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  idconvo: any;
  capturarid(id: any) {
    this.idconvo = id;
    console.log(this.idconvo);
    localStorage.setItem("idconvocatoria", String(this.idconvo));
    this.cargardatos();

  }

  cargar: any;
  nombreconvo: any;
  idConvocatoria: any;
  fechaenvio: any;
  requisitos: any;
  usuarioid: any;
  nombreusuario: any;
  correo: any;
  cedula: any;
  estu: any
  checkboxRequisitos: any;
  cargardatos() {

    this.usuarioid = localStorage.getItem("idusuario");
    this.userservice.getcedula(this.usuarioid).subscribe(datausu => {
      this.cedula = datausu.cedula;
      this.nombreusuario = datausu.nombres + " " + datausu.apellidos;
      this.correo = datausu.correo;
      this.cargar = localStorage.getItem("idconvocatoria");
      this.actividadservice.obtenerActividadesPorConvocatoria(this.cargar).subscribe(
        actividades => {
          this.requisitos = actividades.map(actividad => actividad.nombre_materia);
          this.convocatoriaService.getRequest(this.cargar).subscribe(dataconvo => {
            console.log(dataconvo);
            this.nombreconvo = dataconvo.nombreConvocatoria;

            this.fechaenvio = this.getCurrentDate();


          });

        },

        error => {
          console.log(error);
        }
      );
    });

  }


  idconvocount: any
  idestucont!: number;
  contvariable:any;
  crearconvocatoria() {
    this.estu = localStorage.getItem("idusuario");
    this.estudianteService.getEstucedulavale(this.estu).subscribe(dataestudiante => {
      console.log(dataestudiante);
      console.log(this.idestucont);
      this.estudianteService.getRequestEstudiante(dataestudiante).subscribe(dataestu => {
        console.log(dataestu);
        this.idestucont = dataestu.idEstudiantePracticas;
        this.convocatoriaService.getRequest(this.cargar).subscribe(dataconvo => {
          this.idconvocount = dataconvo.idConvocatorias;
          this.solicitudconvocatorias.convocatoria = dataconvo;
          this.solicitudconvocatorias.fechaEnvio = this.fechaenvio;
          this.solicitudconvocatorias.estudiantePracticante = dataestu;
          this.solicitudconvocatorias.estadoSolicitudConvo = true;
          const periodo = document.getElementById(
            'periodo'
          ) as HTMLInputElement;
          this.solicitudconvocatorias.periodo = periodo.value;
          const ciclo = document.getElementById(
            'ciclo'
          ) as HTMLInputElement;
          this.solicitudconvocatorias.ciclo = ciclo.value;
          const contacto = document.getElementById(
            'contacto'
          ) as HTMLInputElement;
          this.solicitudconvocatorias.numero_contacto = contacto.value;
          this.solicitudconvoservice.comprobarconvocatoria(this.idconvocount, this.idestucont).subscribe(dataconut => {
            this.contvariable = dataconut;
             if(this.contvariable==1){
              Swal.fire(
                'Error',
                'Usted ya postulo para esta convocatoria',
                'error'
              );
              this. resetStepper();
             }else{
              this.solicitudconvoservice.crearSolicitudConvocatoria(this.solicitudconvocatorias).subscribe(

                data => {
    
                  console.log(data.idSolicitudConvocatoria)
                  this.solicitudConvocatoriaGenerada = data.idSolicitudConvocatoria
    
    
                });
             }
          });

          


        });

      });

    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onLoad(event: Event): void {

    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.documentoScService.uploadFileSolicitudConvocatoria(file)
        .subscribe(res => {
          console.log(res);
        });
    }
  }


  public upload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.documentoScService.uploadFileSolicitudConvocatoria(file,).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                console.log("progreso....");

                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                sessionStorage.setItem('ArchivoSolicitudCnv', JSON.stringify(data.body));
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Documento guardado correctamente',
                  showConfirmButton: false,
                  timer: 1500,
                });

                this.actualizarDocumento();

                break;
            }
          }

        },
        error => {
          this.inputFile.nativeElement.value = '';
          Swal.fire(
            'Error',
            'El documento no se pudo subir.',
            'error'
          );

        }
      );
    }
  }

  actualizarDocumento() {
    const idDoc = JSON.parse(
      sessionStorage.getItem('ArchivoSolicitudCnv') || '{}'
    );
    this.idDocumento = idDoc.id_documentoSolicitudConvocatoria;
    console.log(this.idDocumento);
    this.solicitudconvoservice.updateSolicitudConvocatoriaS(this.solicitudConvocatoriaGenerada, this.idDocumento).subscribe(
      response => {
        console.log('Documento actualizado correctamente');
      },
      error => {
        //console.error('Error al actualizar el documento');
      }
    );
  }

  public downloadDocumentoConvocatoria(id: any) {
    this.DocumentoLanzamientoConvocatoria.descargarDocumentoConvocatoria(id).subscribe(
      (data) => {
        const file = new Blob([data], { type: 'application/pdf' }); // Cambiar el tipo MIME a pdf
        const fileUrl = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Documento-Convocatoria.pdf'; // Nombre del documento para cuando se descargue
        link.click();
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
