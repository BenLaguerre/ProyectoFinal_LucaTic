import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPerfilComponent } from './components/add-perfil/add-perfil.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { Eror404Component } from './components/eror404/eror404.component';
import { HomeComponent } from './components/home/home.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';

const routes: Routes = [
  {
    path: 'add-perfil',
    component: AddPerfilComponent
  },
  {
    path: 'seleccion/:id',
    component: SeleccionComponent
  },
  {
    path: 'detalle-perfil/:id',
    component: DetallePerfilComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**', 
    component: Eror404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
