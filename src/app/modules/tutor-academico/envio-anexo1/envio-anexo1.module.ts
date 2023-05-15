import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioAnexo1RoutingModule } from './envio-anexo1-routing.module';
import { Anexo1Component } from './pages/anexo1/anexo1.component';


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
    Anexo1Component
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
    EnvioAnexo1RoutingModule
  ],
  exports:[
    Anexo1Component
  ]
})
export class EnvioAnexo1Module { }
