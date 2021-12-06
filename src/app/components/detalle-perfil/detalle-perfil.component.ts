import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/Perfil';
import { CrudService } from 'src/app/service/crud.service';
import {​ ActivatedRoute }​ from '@angular/router';
import { SeleccionService } from 'src/app/service/seleccion.service';



@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.scss']
})
export class DetallePerfilComponent implements OnInit {
  
  par: any;
  detalle: any;
  allProfil: any = [];
  email:string='';
  

  constructor(private crudService:CrudService, private route:ActivatedRoute, private seleccionService:SeleccionService) { }

  numeroRandom!:number; 
  

  addEmail(email:string){
    return this.seleccionService.addEmail(this.email);
  }
  
  ngOnInit(): void {
    /*this.par = this.route.params
    this.crudService.GetOnProfile(this.par._value.id).subscribe(res => {
      console.log(res)
      this.detalle = res
    });*/

    this.cargarDetaille()

    
    
  }
  
  cargarDetaille():void {
    this.crudService.GetAllProfile().subscribe(res => {
      this.allProfil = res
      this.detalle = this.allProfil[(Math.floor(Math.random()*this.allProfil.length))]
     });
     
     setTimeout(()=>{
      this.email = this.detalle.email
      this.addEmail(this.email);

    },1000)
  }
} 
