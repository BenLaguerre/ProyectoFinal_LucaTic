import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.scss'],
})
export class AddPerfilComponent implements OnInit {
  ngOnInit(): void {}
  constructor(public auth: AuthService) {}

  // Validación de formulario
  // variables
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  gender = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);

  // error de email
  //
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'email requerido';
    }
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

  // error de contraseña
  getErrorMessagePass() {
    if (this.password.dirty) {
      return 'debe tener al menos 8 caracteres';
    }
    return this.password.hasError('required') ? 'contraseña requerida' : '';
  }

  // otros
  floatLabelControl = new FormControl('auto');
  hide = true;

  // Servicio de Registro aquí abajo.
  // esto es un copy pasta del servicio de registro que hicimos 
  // en conjunto entre los cuatro equipos, recomiendo no tocar.
  async registrar(user: string, pass: string) {
    try {
      await this.auth.registrar(user, pass);
      alert('Te has registrado');
    } catch (e: any) {
      alert(e.message);
    }
  }
}
