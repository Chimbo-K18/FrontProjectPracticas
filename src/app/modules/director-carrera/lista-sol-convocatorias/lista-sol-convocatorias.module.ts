import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSolConvocatoriasRoutingModule } from './lista-sol-convocatorias-routing.module';
import { ListaSolConvocatoriasComponent } from './pages/lista-sol-convocatorias/lista-sol-convocatorias.component';


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
    ListaSolConvocatoriasComponent
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
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ListaSolConvocatoriasRoutingModule
  ],
  exports: [
    ListaSolConvocatoriasComponent
  ]
})
export class ListaSolConvocatoriasModule { }
