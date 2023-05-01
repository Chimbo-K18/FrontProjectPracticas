import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprobacionEstudiantesRoutingModule } from './aprobacion-estudiantes-routing.module';
import { AprobacionEstudiantesComponent } from './pages/aprobacion-estudiantes/aprobacion-estudiantes.component';


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
    AprobacionEstudiantesComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    AprobacionEstudiantesRoutingModule
  ],
  exports:[
    AprobacionEstudiantesComponent
  ]
})
export class AprobacionEstudiantesModule { }
