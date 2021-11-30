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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LechonesGustadosComponent } from './components/lechones-gustados/lechones-gustados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPerfilComponent,
    SeleccionComponent,
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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
