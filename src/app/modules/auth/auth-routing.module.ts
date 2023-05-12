import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'sign-in',
    loadChildren: () => import("./sign-in/sign-in.module").then(m => m.SignInModule)

  },

  {
    path: 'sign-up',
    loadChildren: () => import("./sign-up/sign-up.module").then(m => m.SignUpModule)

  },


  {
    path: 'reset-password',
    loadChildren: () => import("./reset-password/reset-password.module").then(m => m.ResetPasswordModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
