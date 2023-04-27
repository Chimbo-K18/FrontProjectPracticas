import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterResponsableRoutingModule } from './register-responsable-routing.module';
import { RegisterResponsableComponent } from './pages/register-responsable/register-responsable.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';






import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    RegisterResponsableComponent
  ],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    RegisterResponsableRoutingModule,


    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule


=======

    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,


    RegisterResponsableRoutingModule
>>>>>>> Stashed changes
  ],
  exports:[
    RegisterResponsableComponent
  ]
})
export class RegisterResponsableModule { }
