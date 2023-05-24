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
  selector: 'app-listaraprobados',
  templateUrl: './listaraprobados.component.html',
  styleUrls: ['./listaraprobados.component.css']
})
export class ListaraprobadosComponent implements AfterViewInit {
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
    // this.data.paginator = this.paginator2;
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
  ) { 
    this.EstudianteCancelado();
    this.EstudianteNoCancelado();
  }

  ngOnInit(): void { }
  Ceduss: any;
  variablecarrera: any;
  usucarrera: any;
  //obtener convocatorias


  ///buscar solicitudpractica
ce:any;
  listasolicitudconvocatoria: any;
  EstudianteCancelado() {
    this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
    this.SolicitudConvocatoriasService.SolicitudesPorEstudianteNoCancelado(this.ce).subscribe(
      datasoli => {
        this.listasolicitudconvocatoria = datasoli;
        this.dataestudiante.data = this.listasolicitudconvocatoria;
    });
}

idestudentapro: any;
iduspracticanteApro: any;
fechaapro: any;
idsoliapro:any;
convo:any
listasolicitudconvocatoriatrue:any
/////cargar estudinates aprobados
EstudianteNoCancelado() {
  this.ce = localStorage.getItem("idusuario");
    console.log("id usuario " + this.ce);
  this.SolicitudConvocatoriasService.SolicitudesPorEstudianteCancelado(this.ce).subscribe(
      datasoli => {
        this.listasolicitudconvocatoriatrue = datasoli;
        this.dataestudiantetrue.data = this.listasolicitudconvocatoriatrue;
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
    this.SolicitudConvocatoriasService.getRequestSolicitudconvo(id).subscribe(
      (dataCUESTION) => {

        if(dataCUESTION.checkDirector == true){
          Swal.fire(
            'NO SE PUEDE REALIZAR ESTA ACCIÓN',
            'SOLICITUD EN PROCESO DE ACEPTACIÓN',
            'error'
          )
        }else{

          Swal.fire({
            title: 'Esta seguro de que deseas cancelar esta solicitud?',
            text: "Recuerde que no podra cambiar de opción una vez cancelada",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Continuar!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.Cedus = localStorage.getItem("idusuario");
              console.log("id usuario " + this.Cedus)
              console.log("ID seleccionado:", id);
              this.SolicitudConvocatoriasService.getRequestSolicitudconvo(id).subscribe(
                (dataBuscarsoli) => {
                  this.idsolienc = dataBuscarsoli.idSolicitudConvocatoria;
                  this.SolicitudConvocatoria = dataBuscarsoli;
                  this.SolicitudConvocatoria.estadoestudiante = true;
                    this.SolicitudConvocatoriasService.updateSolicitudConvocatoria(this.SolicitudConvocatoria, this.idsolienc).subscribe(
                      (datasoliencontrada) => {
                        console.log(datasoliencontrada);
                        this.EstudianteCancelado();
                        this.EstudianteNoCancelado();
                  });
          
          
                });
              Swal.fire(
                'SOLICITUD',
                'CANCELADA',
                'success'
              )
            }
          });
        }
        
      });
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
