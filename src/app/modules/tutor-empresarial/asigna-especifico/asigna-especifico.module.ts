import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaEspecificoRoutingModule } from './asigna-especifico-routing.module';
import { AsignaEspecificoComponent } from './pages/asigna-especifico/asigna-especifico.component';
//Importaciones clave
//Importaciones clave
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AsignaEspecificoComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    AsignaEspecificoRoutingModule
  ],
  exports:[
    AsignaEspecificoComponent
  ]
})
export class AsignaEspecificoModule { }
