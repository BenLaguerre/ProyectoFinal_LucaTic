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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LechonesGustadosComponent } from './components/lechones-gustados/lechones-gustados.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPerfilComponent,
    SeleccionComponent,
    DetallePerfilComponent,
    Eror404Component,
    HeaderComponent,
    FooterComponent,
    LechonesGustadosComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
