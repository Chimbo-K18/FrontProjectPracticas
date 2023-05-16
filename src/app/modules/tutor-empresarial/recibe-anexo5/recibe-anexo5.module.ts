import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo5RoutingModule } from './recibe-anexo5-routing.module';
import { RecibeAnexo5Component } from './pages/recibe-anexo5/recibe-anexo5.component';


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
    RecibeAnexo5Component
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
    RecibeAnexo5RoutingModule
  ],
  exports:[
    RecibeAnexo5Component
  ]
})
export class RecibeAnexo5Module { }
