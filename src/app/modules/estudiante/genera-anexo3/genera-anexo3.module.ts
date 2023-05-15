import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraAnexo3RoutingModule } from './genera-anexo3-routing.module';
import { GeneraAnexo3Component } from './pages/genera-anexo3/genera-anexo3.component';

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
    GeneraAnexo3Component
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
    GeneraAnexo3RoutingModule
  ],
  exports:[
    GeneraAnexo3Component
  ]
})
export class GeneraAnexo3Module { }
