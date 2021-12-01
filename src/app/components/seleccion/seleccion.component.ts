import { Component, OnInit } from '@angular/core';
import { SeleccionService } from 'src/app/service/seleccion.service';


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  email:string;

  constructor(private seleccionService:SeleccionService) {
    this.email='';
   }

  ngOnInit(): void {
    this.seleccionService.getEmail$().subscribe(email => {
      this.email=email
      console.log(email);
    });  
  }
/*
  sin terminar

  like():any{
    this.crudService.like()
      .susbcribe()
  }
*/
}
