import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSoliEnviadasRoutingModule } from './lista-soli-enviadas-routing.module';
import { ListaSoliEnviadasComponent } from './pages/lista-soli-enviadas/lista-soli-enviadas.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ListaSoliEnviadasComponent
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
    ListaSoliEnviadasRoutingModule
  ],
  exports:[
    ListaSoliEnviadasComponent
  ]
})
export class ListaSoliEnviadasModule { }
