import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.scss'],
})
export class AddPerfilComponent implements OnInit {
  ngOnInit(): void { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage(){
    if (this.email.hasError('required')) {
      return 'email requerido';
    }
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

  getErrorMessagePass(){
    if (this.password.dirty) {
      return 'debe tener al menos 8 caracteres';
    }
    return this.password.hasError('required') ? 'contraseña requerida' : '';
  }
  floatLabelControl = new FormControl('auto');
  hide = true;
}