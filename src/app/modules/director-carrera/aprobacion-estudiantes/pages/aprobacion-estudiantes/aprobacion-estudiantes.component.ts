import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { UserService } from 'src/app/services/user.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { AfterViewInit, Component, ViewChild,Renderer2  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Convocatorias } from 'src/app/models/convocatorias';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { EstudiantePracticanteService } from 'src/app/services/estudiantepracticante.service';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { DocumentoSolicitudConvocatoria } from 'src/app/services/doc/DocumentoSolicitudConvocatoria.service';


@Component({
  selector: 'app-aprobacion-estudiantes',
  templateUrl: './aprobacion-estudiantes.component.html',
  styleUrls: ['./aprobacion-estudiantes.component.css'],
})
export class AprobacionEstudiantesComponent implements AfterViewInit {
  SolicitudConvocatoria: SolicitudConvocatoria = new SolicitudConvocatoria();

  //TABLA1
  //TABLA convocatorias
  displayedColumns: string[] = [
    'nombreconvocatoria',
    'nombresoli',
    'fechapublicacion',
    'fechaexpiracion',
    'estadoConvocatoria',
    'opciones',
  ];
  listaConvocatoria: Convocatorias[] = [];
  convocatorias: Convocatorias = new Convocatorias();
  loading: boolean = true;
  dataSource = new MatTableDataSource<Convocatorias>([]);
  //TABLA2
  datosCargados: boolean = false;
  datosCargadostrue: boolean=false;
  datosTabla: any[] = [];
  // tabla3
  datosCargadosAprobados: boolean = false;
  datosTablaAprobados: any[] = [];
  displayedestudiante: string[] = [
    'id',
    'fecha',
    'nombres',
    'apellidos',
    'carrera',
    'opciones',
  ];

  displayedestudiantetrue: string[] = [
    'id',
    'fecha',
    'nombres',
    'apellidos',
    'carrera',
  ];

  dataestudiante = new MatTableDataSource<SolicitudConvocatoria>([]);

  dataestudiantetrue = new MatTableDataSource<SolicitudConvocatoria>([]);

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;
  @ViewChild('paginator3', { static: true }) paginator3!: MatPaginator;
  @ViewChild(MatStepper) stepper!: MatStepper;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
    // this.data.paginator = this.paginator2;
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

  constructor(
    private _formBuilder: FormBuilder,
    private convocatoriaService: ConvocatoriasService,
    private SolicitudConvocatoriasService: SolicitudConvocatoriasService,
    private userService: UserService,
    private DocumentConvocatoria:DocumentoSolicitudConvocatoria, 
    private renderer: Renderer2
  ) { }

  ngOnInit(): void { }
  Ceduss: any;
  variablecarrera: any;
  usucarrera: any;
  //obtener convocatorias
  obtenerConvocatorias() {
    this.Ceduss = localStorage.getItem("idusuario");
    console.log("id usuario " + this.Ceduss)
    this.userService.getcedula(this.Ceduss).subscribe(datausu => {
      this.usucarrera = datausu.carrera;
      this.convocatoriaService.listarConvocatoriasPorCarrera(this.usucarrera).subscribe((data) => {
        this.listaConvocatoria = data.map((result) => {
          let convo = new Convocatorias();
          convo.idConvocatorias = result.idConvocatorias;
          convo.nombreConvocatoria = result.nombreConvocatoria;
          convo.fechaPublicacion = result.fechaPublicacion;
          convo.fechaExpiracion = result.fechaExpiracion;
          convo.estadoConvocatoria = result.estadoConvocatoria;
          convo.documentoConvatoria = result.documentoConvatoria;
          convo.solicitudPracticas = result.solicitudPracticas;
          console.log(convo);
          return convo;
      });
      this.dataSource.data = this.listaConvocatoria;
      this.loading = false;
    });
     
      
      
    });
  }

  selectedsolicitud: any;
  selectconvo:any;
  // para seleccionar la convocatoria
  seleccionarConvocatoria(convocatorias: any) {
    console.log('Se seleccionó la convocatoria:', convocatorias);
    this.selectedsolicitud = convocatorias.solicitudPracticas.idSolicitudPracticas;
    this.selectconvo=convocatorias.idConvocatorias;
    // console.log(this.selectconvo);
    // console.log(this.selectedsolicitud);
    this.buscarSolicitud(this.selectconvo);
    this.buscarAprobados(this.selectconvo);
  }



  ///buscar solicitudpractica

  listasolicitudconvocatoria: any;
  buscarSolicitud(id: any) {
    this.SolicitudConvocatoriasService.getRequestSolicitudconvoDirector(id).subscribe(
      datasoli => {
        this.listasolicitudconvocatoria = datasoli;
        this.dataestudiante.data = this.listasolicitudconvocatoria;
        this.datosCargados =true;
    });
}

idestudentapro: any;
iduspracticanteApro: any;
fechaapro: any;
idsoliapro:any;
convo:any
listasolicitudconvocatoriatrue:any
/////cargar estudinates aprobados
buscarAprobados(id: any) {
  this.SolicitudConvocatoriasService.getRequestSolicitudconvoDirectorTrue(id).subscribe(
      datasoli => {
        this.listasolicitudconvocatoriatrue = datasoli;
        this.dataestudiantetrue.data = this.listasolicitudconvocatoriatrue;
        this.datosCargadostrue =true;
    });
  }
  //checkdirector
  estadosoli: any;
  idsolienc: any;
  Cedus: any;
  dataUs: any;
  dataSolicitud: any;
  idsoliG: any;
  selectedestudinate(id: number) {
    this.Cedus = localStorage.getItem("idusuario");
    console.log("id usuario " + this.Cedus)
    console.log("ID seleccionado:", id);
    this.SolicitudConvocatoriasService.getRequestSolicitudconvo(id).subscribe(
      (dataBuscarsoli) => {
        this.idsolienc = dataBuscarsoli.idSolicitudConvocatoria;
        this.SolicitudConvocatoria = dataBuscarsoli;
        this.SolicitudConvocatoria.checkDirector = true;
        this.userService.getuscedula(this.Cedus).subscribe(dataUserEncon => {
          this.dataUs = dataUserEncon;
          console.log(this.dataUs);
          this.SolicitudConvocatoria.usuario = this.dataUs;
          this.SolicitudConvocatoriasService.updateSolicitudConvocatoria(this.SolicitudConvocatoria, this.idsolienc).subscribe(
            (datasoliencontrada) => {
              console.log(datasoliencontrada);
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Estudiante Aprobado.',
                showConfirmButton: false,
                timer: 1000,
              });
  
              this.datosCargados = true;
              this.refreshWindow();
            });
        });


      });
  }
  resetStepper() {
    this.stepper.reset();
  }

  selectedSolicitud: any;
  seleccionarSolicitudC(solicitud: any) {
    console.log('Se seleccionó la solicitud:', solicitud);


    this.selectedSolicitud = this.idsoliapro;
    this.buscarSolicitudC();
  }

  idencontrado:any;
  buscarSolicitudC(){
  this.SolicitudConvocatoriasService.getRequestSolicitudconvo(this.selectedSolicitud).subscribe(dataSolicitudes =>{
    console.log(dataSolicitudes);
  });
    this.SolicitudConvocatoriasService.buscarDocumentoSolicitudConv(this.selectedSolicitud).subscribe(datadocumento =>{
      console.log(datadocumento)
      this.downloadDocumentoSolicitudConvocatoria(datadocumento);

  });
  }

  public downloadDocumentoSolicitudConvocatoria(id:any) {
    this.DocumentConvocatoria.descargarSolicitudConvocatoria(id).subscribe(
      (data) => {
        const file = new Blob([data], { type: 'application/pdf' }); // Cambiar el tipo MIME a pdf
        const fileUrl = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Documento-Solicitud-Convocatoria.pdf'; // Nombre del documento para cuando se descargue
        link.click();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refreshPage() {    
    // Refresca la página
    this.renderer.setProperty(window, 'location', location.href);
  }


  refreshWindow() {
    // Realiza la acción aquí
  
    // Refresca la ventana sin redireccionar a la página principal
    window.location.reload();
  }
}
