import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AddPerfilComponent } from './components/add-perfil/add-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { DetallePerfilComponent } from './components/detalle-perfil/detalle-perfil.component';
import { Eror404Component } from './components/eror404/eror404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LechonesGustadosComponent } from './components/lechones-gustados/lechones-gustados.component';
import { LoginComponent } from './components/login/login.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PrincipalComponent } from './components/principal/principal.component';
import { DetalleLechonComponent } from './components/detalle-lechon/detalle-lechon.component';

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
    LechonesGustadosComponent,
    LoginComponent,
    PrincipalComponent,
    DetalleLechonComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxDropzoneModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    DetallePerfilComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
