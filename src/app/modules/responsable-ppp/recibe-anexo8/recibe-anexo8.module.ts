import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo8RoutingModule } from './recibe-anexo8-routing.module';
import { RecibeAnexo8Component } from './pages/recibe-anexo8/recibe-anexo8.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    RecibeAnexo8Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo8RoutingModule,
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
    FormsModule
  ],
  exports:[
    RecibeAnexo8Component
  ]
})
export class RecibeAnexo8Module { }
