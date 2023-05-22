import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo7RoutingModule } from './recibe-anexo7-routing.module';
import { RecibeAnexo7Component } from './pages/recibe-anexo7/recibe-anexo7.component';
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
    RecibeAnexo7Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo7RoutingModule,
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
    RecibeAnexo7Component
  ]
})
export class RecibeAnexo7Module { }
