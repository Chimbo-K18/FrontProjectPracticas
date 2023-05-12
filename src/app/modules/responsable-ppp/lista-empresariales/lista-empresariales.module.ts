import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListaEmpresarialesRoutingModule } from './lista-empresariales-routing.module';
import { ListaEmpresarialesComponent } from './pages/lista-empresariales/lista-empresariales.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ListaEmpresarialesComponent
  ],
  imports: [
    CommonModule,
    ListaEmpresarialesRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
  ],
  exports:[
    ListaEmpresarialesComponent
  ]
})
export class ListaEmpresarialesModule { }
