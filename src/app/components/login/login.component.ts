import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  getErrorMessage() {
    if (this.formLogin.get('email')?.hasError('required')) {
      return 'email requerido';
    }
    return this.formLogin.get('email')?.hasError('email')
      ? 'No es un email valido'
      : '';
  }

  getErrorMessagePass() {
    if (this.formLogin.get('password')?.dirty) {
      return 'debe tener al menos 8 caracteres';
    }
    return this.formLogin.get('password')?.hasError('required')
      ? 'contraseña requerida'
      : '';
  }
  
  hide = true;

  async login(user:string, pass:string){
    try {
      await this.auth.login(user,pass)
      // aquí función de mandar a home tras recoger this.formLogin.value.email
    } catch (e:any) {
      alert(e.message);
    }
    }

    clickLogin(){
      this.login(this.formLogin.value.email, this.formLogin.value.password);
    }
}