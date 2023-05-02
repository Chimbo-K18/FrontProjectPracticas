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
    RouterModule
  ], 
  exports:[
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ]

})
export class SharedModule { }