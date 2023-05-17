import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarAcademicoComponent } from './side-bar-academico/side-bar-academico.component';
import { SideBarEmpresarialComponent } from './side-bar-empresarial/side-bar-empresarial.component';
import { SideBarDirectorComponent } from './side-bar-director/side-bar-director.component';
import { SideBarResponsableComponent } from './side-bar-responsable/side-bar-responsable.component';
import { SideBarCoordvinComponent } from './side-bar-coordvin/side-bar-coordvin.component';
import { SideBarEstudianteComponent } from './side-bar-estudiante/side-bar-estudiante.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

//Importaciones clave

import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
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
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    SideBarAcademicoComponent,
    SideBarEmpresarialComponent,
    SideBarDirectorComponent,
    SideBarResponsableComponent,
    SideBarCoordvinComponent,
    SideBarEstudianteComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
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
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    SideBarEstudianteComponent,
    SideBarAcademicoComponent,
    SideBarCoordvinComponent,
    SideBarDirectorComponent,
    SideBarEmpresarialComponent,
    SideBarResponsableComponent
  ]

})
export class SharedModule { }
