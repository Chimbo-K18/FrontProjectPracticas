import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convocatorias } from 'src/app/models/convocatorias';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { ActividadService } from 'src/app/services/actividad.service';
import { BaseFenixService } from 'src/app/services/base-fenix.service';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { DocumentoLanzamientoConvocatoria } from 'src/app/services/doc/DocumentoLanzamientoConvocatoria.service';
import { EstudiantePracticanteService } from 'src/app/services/estudiantepracticante.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { UserService } from 'src/app/services/user.service';
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
    'documento_convocatoria',
    'opciones',
  ];
  listaConvocatoria: Convocatorias[] = [];
  convocatorias: Convocatorias = new Convocatorias();
  solicitudconvocatorias: SolicitudConvocatoria = new SolicitudConvocatoria();
  loading: boolean = true;
  dataSource = new MatTableDataSource<Convocatorias>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
    private DocumentoLanzamientoConvocatoria: DocumentoLanzamientoConvocatoria) { }

  ngOnInit(): void {
  }

  getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  //obtener convocatorias
  //obtener convocatorias
  obtenerConvocatorias() {
    this.convocatoriaService.listarConvocatorias().subscribe((data) => {
      this.listaConvocatoria = data.map((result) => {
        let convo = new Convocatorias();
        convo.idConvocatorias = result.idConvocatorias;
        convo.nombreConvocatoria = result.nombreConvocatoria;
        convo.fechaPublicacion = result.fechaPublicacion
        convo.fechaExpiracion = result.fechaExpiracion;
        convo.documentoConvatoria = result.documentoConvatoria;
        return convo;
      });
      this.dataSource.data = this.listaConvocatoria;
      this.loading = false;

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
      // console.log(dataconvocatoria);
    });


    this.convocatoriaService.buscardoc(this.selectedConvo).subscribe(datadocumento => {
      console.log(datadocumento)


      this.DocumentoLanzamientoConvocatoria.getPdf(datadocumento).subscribe((pdfBlob: Blob) => {
        this.downloadFile(pdfBlob);
      });

    });
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


  crearconvocatoria() {
    this.estu = localStorage.getItem("idusuario");
    this.estudianteService.getEstucedulavale(this.estu).subscribe(dataestudiante => {
      console.log(dataestudiante);


      this.estudianteService.getRequestEstudiante(dataestudiante).subscribe(dataestu => {
        console.log(dataestu);
        this.convocatoriaService.getRequest(this.cargar).subscribe(dataconvo => {
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
          this.solicitudconvoservice.crearSolicitudConvocatoria(this.solicitudconvocatorias).subscribe({

          });


        });

      });

    });
  }





}
