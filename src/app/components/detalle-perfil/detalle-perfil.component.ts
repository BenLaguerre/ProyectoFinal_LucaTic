import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.scss']
})
export class DetallePerfilComponent implements OnInit {

  constructor() { }
  details: any; 

  mostrarDetalle(url:string):any {
    let person;
    fetch(url).then(user=>{
      if(!user.ok){
        throw new Error(user.statusText)
      }
      return user.json()
    }).then(data=>{
      this.details = data.results;
      console.log(data.results)
      return person = data.results
    })
    return person
  }
  
  ngOnInit(): void {
    this.mostrarDetalle("https://randomuser.me/api/")

  }

  

} 
