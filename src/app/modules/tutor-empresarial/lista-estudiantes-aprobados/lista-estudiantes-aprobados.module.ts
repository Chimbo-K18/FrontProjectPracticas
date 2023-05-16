import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEstudiantesAprobadosRoutingModule } from './lista-estudiantes-aprobados-routing.module';
import { ListaEstudiantesAprobadosComponent } from './pages/lista-estudiantes-aprobados/lista-estudiantes-aprobados.component';

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
    ListaEstudiantesAprobadosComponent
  ],
  imports: [
    CommonModule,
    ListaEstudiantesAprobadosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  exports:[
    ListaEstudiantesAprobadosComponent
  ]
})
export class ListaEstudiantesAprobadosModule { }
