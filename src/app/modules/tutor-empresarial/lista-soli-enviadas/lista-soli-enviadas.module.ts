import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSoliEnviadasRoutingModule } from './lista-soli-enviadas-routing.module';
import { ListaSoliEnviadasComponent } from './pages/lista-soli-enviadas/lista-soli-enviadas.component';
//Importaciones clave
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ListaSoliEnviadasComponent
  ],
  imports: [
    CommonModule,
    ListaSoliEnviadasRoutingModule,
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports:[
    ListaSoliEnviadasComponent
  ]
})
export class ListaSoliEnviadasModule { }
