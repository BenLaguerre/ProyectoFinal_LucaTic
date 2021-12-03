import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lechones-gustados',
  templateUrl: './lechones-gustados.component.html',
  styleUrls: ['./lechones-gustados.component.scss']
})
export class LechonesGustadosComponent implements OnInit {

  constructor() { }
  //Falta añadir el html y su logica :)
  getStatus(){
    let status = sessionStorage.getItem("status")
    return status
    }

  ngOnInit(): void {
  }

}
