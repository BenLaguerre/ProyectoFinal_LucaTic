import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  numeroRandom:number=0;

  reproducir() {
    const audio = new Audio('../../../assets/sound/heartbeat.wav');
    audio.play();
  }

  constructor() { }
  
  ngOnInit(): void {
    this.crearId();
    this.reproducir();
  }
  
  crearId():number {
    this.numeroRandom=Math.floor(Math.random()*10);
    return this.numeroRandom
  }

}
