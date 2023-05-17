import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudpracticasService } from 'src/app/services/solicitudpracticas.service';
import { SolicitudConvocatoriasService } from 'src/app/services/solicitudconvocatoria.service';
import { SolicitudPracticas } from 'src/app/models/solicitudpracticas';
import { SolicitudConvocatoria } from 'src/app/models/solicitudconvocatoria';
import Swal from 'sweetalert2';
import { PracticaService } from 'src/app/services/practica.service';
import { Practica } from 'src/app/models/practica';
import { UserService } from 'src/app/services/user.service';
import { tutorempresarialService } from 'src/app/services/tutorempresarial.service';
import { Anexo7Service } from 'src/app/services/anexo7.service';
import { Anexo7 } from 'src/app/models/anexo7';

@Component({
  selector: 'app-genera-anexo7',
  templateUrl: './genera-anexo7.component.html',
  styleUrls: ['./genera-anexo7.component.css']
})





export class GeneraAnexo7Component   implements AfterViewInit{

  practicasSolicitud: SolicitudPracticas[] = [] ;
  mivariable !: any;
  listaSolicitudesAprobadas: any;
  practica : Practica= new Practica();
  anexo7: Anexo7 = new Anexo7();


  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'estado', 'nombre', 'symbol'];
  dataF1 = new MatTableDataSource<Practica>([]);

  dColumns: string[] = ['nombre', 'fechainicio', 'fechafin', 'horainicio', 'horafin', 'sy'];
  dataTabla = new MatTableDataSource<SolicitudConvocatoria>([]);


  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;
@ViewChild('paginator2', {static: true}) paginator2!: MatPaginator;

  ngAfterViewInit() {
    this.dataF1.paginator = this.paginator1;
    this.dataTabla.paginator = this.paginator2;
  }

  //FINTABLA





  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  tresFormGroup = this._formBuilder.group({
    tresCtrl: ['', Validators.required],
  });

  cuatroFormGroup = this._formBuilder.group({
    cuatroCtrl: ['', Validators.required],
  });

  cincoFormGroup = this._formBuilder.group({
    cincoCtrl: ['', Validators.required],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private solicitudPracticas: SolicitudpracticasService, private anexo7service: Anexo7Service,
    private solicitudService: SolicitudConvocatoriasService, private userService: UserService, private practicaservice: PracticaService, private tutorempresarialService: tutorempresarialService) { }

  ngOnInit(): void {

    this.listarSolicitudesAprobadasPracticas();
  }


  estadosoli: any;
  idsolienc: any;
  Ceduss: any;
  dataUs: any;
  dataSolicitud: any;
  idsoliG: any;
  id: any;
  datatutorEmps: any
  practicasSolicitudesd: any;
  listarSolicitudesAprobadasPracticas() {
    this.Ceduss = localStorage.getItem("idusuario");
    console.log("id usuario " + this.Ceduss)
    this.userService.getuscedula(this.Ceduss).subscribe(dataUserEncon => {
      this.tutorempresarialService.extraerEmpresarialIdUsuario(dataUserEncon.idUsuario).subscribe(dataTutor => {
        console.log("esta es la dat del tuto");
        console.log(dataTutor);
        this.datatutorEmps = dataTutor.empresa.idEmpresa;
        this.practicaservice.listarPorEmpresaAnexo7(this.datatutorEmps).subscribe(datapractica => {
          this.practicasSolicitudesd = datapractica;
          console.log(datapractica);
          this.dataF1.data = this.practicasSolicitudesd
    
        });
      });
    });
  }

  listapraacticas: any[] = [];
  seleccionarConvocatoria(tutor: any) {
    console.log(tutor);
    this.practicaservice.listarPorListarAnexo7(tutor).subscribe(datapracticalist => {
      console.log(datapracticalist);
      this.listapraacticas = [];
      datapracticalist.forEach((practica: Practica) => {
        this.listapraacticas.push(practica);
      });
      // Asignar la lista al datasource de la tabla
      this.dataTabla.data = this.listapraacticas;
      console.log(this.listapraacticas);
    }
    );
  }

  idanexo7:any;
  idAnexo7Generado: any;
  CreaAnexo7(anexoid:any){
    this.idanexo7 = anexoid;
    this.practicaservice.buscarId(anexoid).subscribe(practicadata=>{
      console.log(practicadata);
      this.practica = practicadata;
      this.practica.estadoanexo7 = true;
      this.practicaservice.UpdatePractica(this.practica, this.idanexo7).subscribe(practicaupdate=>{
        console.log(practicaupdate);
        this.anexo7.practica = practicaupdate;
        this.anexo7service.crearAnexo7(this.anexo7).subscribe(dataanexo7=>{
          console.log(dataanexo7);
          this.idAnexo7Generado = dataanexo7.idAnexo7;

          Swal.fire(
            'PROCESO',
            'GENERADO CON EXITO',
            'success'
          )
        });
      });

    });
  }

  descargarPDF() {
    const idanexo3 = this.idAnexo7Generado; // obtén el ID de la solicitud
    const url = `http://localhost:8080/api/jasperReport/anexo3/${idanexo3}`;
    window.open(url, '_blank');
  }

}
