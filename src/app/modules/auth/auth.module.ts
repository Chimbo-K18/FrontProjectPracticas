import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeAuthComponent } from './welcome-auth/welcome-auth.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    WelcomeAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class AuthModule { }
