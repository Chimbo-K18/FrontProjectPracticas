import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ConvocatoriasService } from 'src/app/services/convocatorias.service';
import { Convocatorias } from 'src/app/models/convocatorias';
import { UserService } from 'src/app/services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-lista-convocatorias',
  templateUrl: './lista-convocatorias.component.html',
  styleUrls: ['./lista-convocatorias.component.css']
})
export class ListaConvocatoriasComponent implements OnInit {

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  convocatorias: Convocatorias | any;
  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombreConvocatoria', 'fechaPublicacion', 'fechaExpiracion', 'estadoConvocatoria', 'carrera'];
  dataSource = new MatTableDataSource<any>([]);
  apiResponse: any = [];
  listaConvocatoria: Convocatorias[] = [];
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private convocatoriaService: ConvocatoriasService,
    private userservice: UserService) { }
  datos: { nombreconvocatoria: string, fechapublicacion: string, fechaexpiracion: string, estadoConvocatoria: boolean, carrera: string }[] = [];


  ngOnInit(): void {
    this.obtenerConvocatorias();
  }

  //obtener convocatorias
  //obtener convocatorias
  storageUser: any;
  varcarrera: any;
  usuariocarrera: any;
  estadoTexto: any;

  obtenerConvocatorias() {
    this.storageUser = localStorage.getItem("idusuario");
    console.log("id usuario " + this.storageUser)
    this.userservice.getcedula(this.storageUser).subscribe(datausu => {
      this.usuariocarrera = datausu.carrera;
      this.convocatoriaService.listarConvocatoriasPorCarrera(this.usuariocarrera).subscribe((data) => {
        this.listaConvocatoria = data.map((result) => {
          let convo = new Convocatorias();
          convo.idConvocatorias = result.idConvocatorias;
          convo.nombreConvocatoria = result.nombreConvocatoria;
          convo.fechaPublicacion = result.fechaPublicacion
          convo.fechaExpiracion = result.fechaExpiracion;
          convo.documentoConvatoria = result.documentoConvatoria;
          this.estadoTexto = convo.estadoConvocatoria ? "Aprobada" : "Pendiente";
          this.varcarrera = result.solicitudPracticas?.nombre_carrera
          console.log(data);
          return convo;
        });
        this.dataSource.data = this.listaConvocatoria;
        this.loading = false;
      });
    });

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
