import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroTutEmpresarialRoutingModule } from './registro-tut-empresarial-routing.module';
import { RegistroTutEmpresarialComponent } from './pages/registro-tut-empresarial/registro-tut-empresarial.component';


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
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    RegistroTutEmpresarialComponent
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
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    RegistroTutEmpresarialRoutingModule,
    FormsModule
  ],
  exports: [
    RegistroTutEmpresarialComponent
  ]
})
export class RegistroTutEmpresarialModule { }
