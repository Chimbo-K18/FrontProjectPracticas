import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesAprobadasRoutingModule } from './solicitudes-aprobadas-routing.module';
import { SolicitudesAprobadasComponent } from './pages/solicitudes-aprobadas/solicitudes-aprobadas.component';
//Importaciones clave

import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    SolicitudesAprobadasComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    SolicitudesAprobadasRoutingModule
  ],
  exports:[
    SolicitudesAprobadasComponent
  ]
})
export class SolicitudesAprobadasModule { }
