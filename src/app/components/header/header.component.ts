import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  numeroRandom:number=0;
  constructor() { }
  
  ngOnInit(): void {
    this.crearId();
  }
  
  crearId():number {
    this.numeroRandom=Math.floor(Math.random()*10);
    return this.numeroRandom
  }
  getName(){
    return sessionStorage.getItem("name")
  }
  
}


