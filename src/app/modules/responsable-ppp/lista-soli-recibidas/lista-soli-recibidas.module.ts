import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSoliRecibidasRoutingModule } from './lista-soli-recibidas-routing.module';
import { ListaSoliRecibidasComponent } from './pages/lista-soli-recibidas/lista-soli-recibidas.component';


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
    ListaSoliRecibidasComponent
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
    ListaSoliRecibidasRoutingModule
  ],
  exports:[
    ListaSoliRecibidasComponent
  ]
})
export class ListaSoliRecibidasModule { }
