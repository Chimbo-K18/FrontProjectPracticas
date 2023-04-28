import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroActividadesRoutingModule } from './registro-actividades-routing.module';
import { RegistroActividadesComponent } from './pages/registro-actividades/registro-actividades.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegistroActividadesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    RegistroActividadesRoutingModule
  ],
  exports:[
    RegistroActividadesComponent
  ]
})
export class RegistroActividadesModule { }
