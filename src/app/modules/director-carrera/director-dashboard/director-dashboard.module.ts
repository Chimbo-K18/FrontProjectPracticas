import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorDashboardRoutingModule } from './director-dashboard-routing.module';
import { DirectorDashboardComponent } from './pages/director-dashboard/director-dashboard.component';
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
    DirectorDashboardComponent
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
    DirectorDashboardRoutingModule,
    MatCardModule
  ],
  exports:[
    DirectorDashboardComponent
  ]
})
export class DirectorDashboardModule { }
