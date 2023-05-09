import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterResponsableRoutingModule } from './register-responsable-routing.module';
import { RegisterResponsableComponent } from './pages/register-responsable/register-responsable.component';

import {FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    RegisterResponsableComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    FormsModule,
    MatSlideToggleModule,

    RegisterResponsableRoutingModule
  ],
  exports:[
    RegisterResponsableComponent
  ]
})
export class RegisterResponsableModule { }