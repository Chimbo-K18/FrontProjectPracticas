import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaConveniosRoutingModule } from './lista-convenios-routing.module';
import { ListaConveniosComponent } from './pages/lista-convenios/lista-convenios.component';


// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {MatTableModule} from '@angular/material/table';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import { MatIconModule } from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
//  import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { FormsModule } from '@angular/forms';
 import { MatDatepickerModule } from '@angular/material/datepicker';
 import { MatNativeDateModule } from '@angular/material/core';

import {MatStepperModule} from '@angular/material/stepper';

import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaConveniosComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    ListaConveniosRoutingModule,
    MatSlideToggleModule,
    // xxxx
    ReactiveFormsModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ListaConveniosModule { }
