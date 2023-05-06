import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvioSolicitudRoutingModule } from './envio-solicitud-routing.module';
import { EnvioSolicitudComponent } from './pages/envio-solicitud/envio-solicitud.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    EnvioSolicitudComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    EnvioSolicitudRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
    ],
  exports: [
    EnvioSolicitudComponent
  ]
})
export class EnvioSolicitudModule { }
