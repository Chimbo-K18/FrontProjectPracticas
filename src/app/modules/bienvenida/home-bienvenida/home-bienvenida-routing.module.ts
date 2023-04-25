import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBienvenidaComponent } from './pages/home-bienvenida/home-bienvenida.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBienvenidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBienvenidaRoutingModule { }
