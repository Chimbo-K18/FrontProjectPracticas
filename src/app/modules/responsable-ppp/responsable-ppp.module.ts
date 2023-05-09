import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsablePppRoutingModule } from './responsable-ppp-routing.module';
import { WelcomeResponsableComponent } from './welcome-responsable/welcome-responsable.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeResponsableComponent
  ],
  imports: [
    CommonModule,
    ResponsablePppRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ResponsablePppModule { }
