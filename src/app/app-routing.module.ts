import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPerfilComponent } from './components/add-perfil/add-perfil.component';

const routes: Routes = [
  {
    path: 'add-perfil',
    component: AddPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
