import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPerfilComponent } from './components/add-perfil/add-perfil.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { Eror404Component } from './components/eror404/eror404.component';
import { HomeComponent } from './components/home/home.component';
import { LechonesGustadosComponent } from './components/lechones-gustados/lechones-gustados.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';

const routes: Routes = [
  {
    path: 'add-perfil',
    component: AddPerfilComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detalle-perfil/:id',
    component: DetallePerfilComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'principal',
    component: PrincipalComponent
  },
  {
    path: 'lechones-gustados', 
    component: LechonesGustadosComponent
  }, 
  {
    path: '**', 
    component: Eror404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
