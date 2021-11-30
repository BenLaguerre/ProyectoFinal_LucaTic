import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { AddPerfilComponent } from './components/add-perfil/add-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { Eror404Component } from './components/eror404/eror404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPerfilComponent,
    SeleccionComponent,
    DetallePerfilComponent,
    Eror404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
