import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.scss']
})

export class AddPerfilComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  constructor() { }
  ngOnInit(): void { }
}