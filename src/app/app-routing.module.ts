import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPerfilComponent } from './components/add-perfil/add-perfil.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';

const routes: Routes = [
  {
    path: 'add-perfil',
    component: AddPerfilComponent
  },
  {
    path: 'seleccion',
    component: SeleccionComponent
  },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
