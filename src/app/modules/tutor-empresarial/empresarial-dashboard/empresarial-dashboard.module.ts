import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresarialDashboardRoutingModule } from './empresarial-dashboard-routing.module';
import { EmpresarialDashboardComponent } from './pages/empresarial-dashboard/empresarial-dashboard.component';
import {MatCardModule} from '@angular/material/card';

//Importaciones clave

import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    EmpresarialDashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
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
    EmpresarialDashboardRoutingModule,
    MatCardModule
  ],
  exports:[
    EmpresarialDashboardComponent
  ]
})
export class EmpresarialDashboardModule { }
