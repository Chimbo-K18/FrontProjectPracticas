import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Convocatorias } from 'src/app/models/convocatorias';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import { UserService } from 'src/app/services/user.service';
import { Responsable_PPPService } from 'src/app/services/responsable_ppp.service';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import { DocumentoSolicitudConvocatoria } from 'src/app/services/doc/DocumentoSolicitudConvocatoria.service';


@Component({
  selector: 'app-aprobacion-estudiantes',
  templateUrl: './aprobacion-estudiantes.component.html',
  styleUrls: ['./aprobacion-estudiantes.component.css']
})
export class AprobacionEstudiantesComponent implements AfterViewInit {


  convocatorias: Convocatorias | any;
  mivariable !: any;
  //TABLA
  //TABLA convocatorias
  displayedColumns: string[] = [
    'nombreconvocatoria',
    'fechapublicacion',
    'fechaexpiracion',
    'estadoConvocatoria',
    'opciones',
  ];
  listaConvocatoria: Convocatorias[] = [];
  solicitudconvocatoria: SolicitudConvocatoria = new SolicitudConvocatoria();
  loading: boolean = true;

  //TABLA
  dataSource = new MatTableDataSource<Convocatorias>([]);

  dColumns: string[] = ['nombre', 'fecha', 'carrera', 'esta', 'sy'];
  data = new MatTableDataSource<SolicitudConvocatoria>([]);

  diColumns: string[] = ['nombre', 'fecha', 'carrera'];
  datam = new MatTableDataSource<SolicitudConvocatoria>([]);

  @ViewChild('paginator1', { static: true }) paginator1!: MatPaginator;
  @ViewChild('paginator2', { static: true }) paginator2!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
    this.data.paginator = this.paginator2;
  }

  //FINTABLA





  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder,
    private convocatoriaService: ConvocatoriasService, 
    private solicitudconvocatoriaservice: SolicitudConvocatoriasService,
    private documentConvocatoria:DocumentoSolicitudConvocatoria,
    private responsableppservice: Responsable_PPPService) {
    this.obtenerConvocatorias();
  }
  @ViewChild(MatStepper) stepper!: MatStepper;
  ngOnInit(): void {

    this.listaConvocatorias();
  }

  listaConvocatorias() {
    this.convocatoriaService.getConvocatorias().subscribe(
      (res) => {
        this.convocatorias = res;
        console.log(this.convocatorias);
      }
    );
  }



  seleccionarConvocatoria(convocatoria: any) {
    sessionStorage.setItem('convocatoriaSeleccionada', JSON.stringify(convocatoria));

    const valor = JSON.parse(
      sessionStorage.getItem('convocatoriaSeleccionada') || '{}'
    );

    this.mivariable = valor.idConvocatorias;
    console.log(this.mivariable)

  }

  listassolicitudes: any[] = [];
  idusuarious: any;
  dataresponsableus: any;
  //obtener convocatorias
  obtenerConvocatorias() {
    this.idusuarious = localStorage.getItem("idusuario");
    this.responsableppservice.getBuscarcedula(this.idusuarious).subscribe(datausu => {
    this.dataresponsableus = datausu.carrera;
    console.log(this.dataresponsableus);
    this.convocatoriaService.listarConvocatoriasPorCarrera(this.dataresponsableus).subscribe((data) => {
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
      console.log(this.listaConvocatoria);
      this.loading = false;

    });
    });
   
  }

  getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  nombresusuario: any;
  fechaenvio: any;
  carrera: any;
  listassolicitudesll: any[] = [];
  listassolicitudeslltrue: any[] = [];
  traerconvocatoria(idconvocatoria: any) {
    this.solicitudconvocatoriaservice.Solicitudestudiantes(idconvocatoria).subscribe((dataconvo) => {
      // Guardar los datos en la lista
      this.listassolicitudesll = [];
      dataconvo.forEach((solicitud: SolicitudConvocatoria) => {
        this.listassolicitudesll.push(solicitud);
      });
      // Asignar la lista al datasource de la tabla
      this.data.data = this.listassolicitudesll;
      console.log(this.listassolicitudesll);
      this.solicitudconvocatoriaservice.Solicitudestudiantestrue(idconvocatoria).subscribe((datasolitrue) => {
        // Guardar los datos en la lista
        this.listassolicitudeslltrue = [];
        datasolitrue.forEach((solicitud: SolicitudConvocatoria) => {
          this.listassolicitudeslltrue.push(solicitud);
        });
        // Asignar la lista al datasource de la tabla
        this.datam.data = this.listassolicitudeslltrue;
        console.log(this.listassolicitudeslltrue);
      });
    });



  }

  resetStepper() {
    this.stepper.reset();
  }

  idusuario: any;
  dataresponsable: any;
  datasoli: any;
  idsoli: any;
  aprobarestudiante(idsoliconvo: any) {
    this.idsoli = idsoliconvo;
    console.log(this.idsoli);
    this.solicitudconvocatoriaservice.getRequestSolicitudconvo(idsoliconvo).subscribe(datasoliconvo => {
      console.log(datasoliconvo);
      this.datasoli = datasoliconvo;
      console.log(this.datasoli);
      this.solicitudconvocatoria = datasoliconvo;
      this.idusuario = localStorage.getItem("idusuario");
      this.responsableppservice.getBuscarcedula(this.idusuario).subscribe(datausu => {
        this.dataresponsable = datausu;
        this.solicitudconvocatoria.checkResponsable = true;
        this.solicitudconvocatoria.fechaAprobacion = this.getCurrentDate();
        this.solicitudconvocatoria.responsablePPP = this.dataresponsable;

        this.solicitudconvocatoriaservice.updateSolicitudConvocatoria(this.solicitudconvocatoria, this.idsoli).subscribe(dataactual => {
          console.log(dataactual);
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Datos Creados Correctamente',
            showConfirmButton: false,
            timer: 2000,
          });
          this.resetStepper();

        })
      })
    });

  }

  selectedSolicitud: any;
  seleccionarSolicitudC(solicitud: any) {
    console.log('Se seleccionó la solicitud:', solicitud);
    this.selectedSolicitud = solicitud.idSolicitudConvocatoria;
    this.buscarSolicitudC();
  }


  idencontrado:any;
  buscarSolicitudC(){
  this.solicitudconvocatoriaservice.getRequestSolicitudconvo(this.selectedSolicitud).subscribe(dataSolicitudes =>{
    console.log(dataSolicitudes);
  });
    this.solicitudconvocatoriaservice.buscarDocumentoSolicitudConv(this.selectedSolicitud).subscribe(datadocumento =>{
      console.log(datadocumento)
      this.downloadDocumentoSolicitudConvocatoria(datadocumento);

  });
  }

  public downloadDocumentoSolicitudConvocatoria(id:any) {
    this.documentConvocatoria.descargarSolicitudConvocatoria(id).subscribe(
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


}
