import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.scss'],
})
export class AddPerfilComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {}

  // Declaración del formulario
  formRegistro = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    musicGenre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  // Validación de formulario
  // variables

  // error de email
  //
  getErrorMessage() {
    if (this.formRegistro.get('email')?.hasError('required')) {
      return 'email requerido';
    }
    return this.formRegistro.get('email')?.hasError('email')
      ? 'No es un email valido'
      : '';
  }

  // error de contraseña
  getErrorMessagePass() {
    if (this.formRegistro.get('password')?.dirty) {
      return 'debe tener al menos 8 caracteres';
    }
    return this.formRegistro.get('password')?.hasError('required')
      ? 'contraseña requerida'
      : '';
  }

  getErrorMessageName() {
    if (this.formRegistro.get('name')?.hasError('required')) {
      return 'nombre requerido';
    }return ''
  }

  getErrorMessageCity() {
    if (this.formRegistro.get('city')?.hasError('required')) {
      return 'ciudad requerida';
    }return ''
  }

  getErrorMessageDescription() {
    if (this.formRegistro.get('description')?.hasError('required')) {
      return 'descrición requerida';
    }return ''
  }

  // otros
  floatLabelControl = new FormControl('auto');
  hide = true;

  //registro de datos
  addPerfil() {
    console.log(this.formRegistro.value);
    console.log(2021-this.formRegistro.value.age.getFullYear());
  }
  // Servicio de Registro aquí abajo.
  // esto es un copy pasta del servicio de registro que hicimos
  // en conjunto entre los cuatro equipos, recomiendo no tocar.
  /* async registrar(user: string, pass: string) {
    try {
      await this.auth.registrar(user, pass);
      alert('Te has registrado');
    } catch (e: any) {
      alert(e.message);
    }
  } */
}
