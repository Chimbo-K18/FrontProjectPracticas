import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteSeleccionRoutingModule } from './reporte-seleccion-routing.module';
import { ReporteSeleccionComponent } from './pages/reporte-seleccion/reporte-seleccion.component';
//Importaciones clave
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ReporteSeleccionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ReporteSeleccionRoutingModule
  ],
  exports:[
    ReporteSeleccionComponent
  ]
})
export class ReporteSeleccionModule { }
