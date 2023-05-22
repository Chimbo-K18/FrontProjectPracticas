import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibeAnexo6RoutingModule } from './recibe-anexo6-routing.module';
import { RecibeAnexo6Component } from './pages/recibe-anexo6/recibe-anexo6.component';
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
    RecibeAnexo6Component
  ],
  imports: [
    CommonModule,
    RecibeAnexo6RoutingModule,
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
    FormsModule,

  ],
  exports:[
    RecibeAnexo6Component
  ]
})
export class RecibeAnexo6Module { }
