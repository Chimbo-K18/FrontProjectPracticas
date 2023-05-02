import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsablePppRoutingModule } from './responsable-ppp-routing.module';
import { WelcomeResponsableComponent } from './welcome-responsable/welcome-responsable.component';


@NgModule({
  declarations: [
    WelcomeResponsableComponent
  ],
  imports: [
    CommonModule,
    ResponsablePppRoutingModule
  ]
})
export class ResponsablePppModule { }
