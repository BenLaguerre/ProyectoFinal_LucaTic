import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
  }
/*
  sin terminar

  like():any{
    this.crudService.like()
      .susbcribe()
  }
*/
}
