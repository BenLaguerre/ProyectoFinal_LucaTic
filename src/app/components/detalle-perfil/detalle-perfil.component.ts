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
  detalle: any[] = [];
  email:string='';

  constructor(private crudService:CrudService, private route:ActivatedRoute, private seleccionService:SeleccionService) { }

  numeroRandom:number = Math.floor(Math.random()*10);
  

  addEmail(email:string){
    return this.seleccionService.addEmail(this.email);
  }
  getStatus(){
    let status = sessionStorage.getItem("status")
    return status
    }
  
  ngOnInit(): void {
    this.par = this.route.params
    this.crudService.GetOnProfile(this.par._value.id).subscribe(res => {
      this.detalle=res
      console.log(this.detalle);

    });
    console.log("-----",this.par._value.id)
    setTimeout(()=>{
      this.email = this.detalle[0].email
      console.log(this.detalle)
      this.addEmail(this.email);
      console.log(this.email)
    },1000)
    
    

  }

  

} 
