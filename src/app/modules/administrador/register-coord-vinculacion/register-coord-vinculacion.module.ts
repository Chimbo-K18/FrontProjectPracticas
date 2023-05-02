import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCoordVinculacionRoutingModule } from './register-coord-vinculacion-routing.module';
import { RegisterCoordVinculacionComponent } from './pages/register-coord-vinculacion/register-coord-vinculacion.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox'



@NgModule({
  declarations: [
    RegisterCoordVinculacionComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    RegisterCoordVinculacionRoutingModule
    
  ],
  exports:[
    RegisterCoordVinculacionComponent
  ]
})
export class RegisterCoordVinculacionModule { }