import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroEmpresaRoutingModule } from './registro-empresa-routing.module';
import { RegistroEmpresaComponent } from './pages/registro-empresa/registro-empresa.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroEmpresaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RegistroEmpresaRoutingModule,
    FormsModule
  ]
})
export class RegistroEmpresaModule { }
