import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaraprobadosRoutingModule } from './listaraprobados-routing.module';
import { ListaraprobadosComponent } from './pages/listaraprobados/listaraprobados.component';



//Importaciones clave
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ListaraprobadosComponent
  ],
  imports: [
    CommonModule,
    ListaraprobadosRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports:[
    ListaraprobadosComponent
  ]
})
export class ListaraprobadosModule { }
