import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsablePppRoutingModule } from './responsable-ppp-routing.module';
import { WelcomeResponsableComponent } from './welcome-responsable/welcome-responsable.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeResponsableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResponsablePppRoutingModule
  ]
})
export class ResponsablePppModule { }
