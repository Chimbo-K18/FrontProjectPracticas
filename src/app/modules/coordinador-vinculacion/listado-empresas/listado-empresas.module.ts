import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoEmpresasRoutingModule } from './listado-empresas-routing.module';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';

//Importaciones clave
import {MatStepperModule} from '@angular/material/stepper';

import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoEmpresasComponent
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
    ListadoEmpresasRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule
  ],
  exports:[
    ListadoEmpresasComponent
  ]
})
export class ListadoEmpresasModule { }
