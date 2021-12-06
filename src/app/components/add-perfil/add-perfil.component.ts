import { Component, NgZone, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/service/upload.service';
import { CrudService } from 'src/app/service/crud.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.scss'],
  providers: [UploadService, CrudService, AuthService],
})
export class AddPerfilComponent implements OnInit {
  files: File[] = [];
  formRegistro: FormGroup;
  foto: any;
  ngOnInit(): void {}

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    if (!this.files[0]) {
    }
    const fileData = this.files[0];
    const data = new FormData();
    data.append('file', fileData);
    data.append('upload_preset', 'angular.cloudinary');
    data.append('cloud_name', 'lechon-match');
    this._uploadService.uploadImage(data).subscribe((response) => {
      if (response) {
        this.foto = String(response.url);
        console.log(response.url, this.foto);
      }
    });
  }

  constructor(
    public auth: AuthService,
    public formBuilder: FormBuilder,
    public router: Router,
    private crudService: CrudService,
    private _uploadService: UploadService
  ) {
    // Declaración del formulario
    this.formRegistro = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      music: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }
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

  getErrorMessageCity() {
    if (this.formRegistro.get('city')?.hasError('required')) {
      return 'ciudad requerida';
    }
    return '';
  }

  getStatus() {
    let status = sessionStorage.getItem('status');
    return status;
  }

  getErrorMessageDescription() {
    if (this.formRegistro.get('description')?.hasError('required')) {
      return 'descrición requerida';
    }
    return '';
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
      console.log('Te has registrado');
    } catch (e: any) {
      console.log(e.message);
    }
  }

  //registro de datos
  addPerfil() {
    this.onUpload();
    this.formRegistro.value.age = Number(
      2021 - this.formRegistro.value.age.getFullYear()
    );
    this.formRegistro.value.name = {
      firstName: this.formRegistro.value.firstName,
      lastName: this.formRegistro.value.lastName,
    };
    this.formRegistro.value.arrayLikes = [];
    this.formRegistro.value.arrayDislikes = [];
    setTimeout(() => {
      this.formRegistro.value.image = this.foto;
    }, 500);
    console.log(this.formRegistro.value);
    this.registrar(
      this.formRegistro.value.email,
      this.formRegistro.value.password
    );
    this.crudService.addProfile(this.formRegistro.value).subscribe(
      () => {
        console.log('Data added successfully!');
        // aquí función para mandar a login
      },
      (err) => {
        console.log(err);
      }
    );
    this.regresoLogin();
  }

  regresoLogin() {
    this.router.navigate(['/']);
  }
}
