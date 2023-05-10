import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaAcademicoRoutingModule } from './asigna-academico-routing.module';
import { AsignaAcademicoComponent } from './pages/asigna-academico/asigna-academico.component';

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
    AsignaAcademicoComponent
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
    AsignaAcademicoRoutingModule
  ],
  exports:[
    AsignaAcademicoComponent
  ]
})
export class AsignaAcademicoModule { }
