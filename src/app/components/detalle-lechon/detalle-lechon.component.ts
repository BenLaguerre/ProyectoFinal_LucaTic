import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import {​ ActivatedRoute }​ from '@angular/router';
import { SeleccionService } from 'src/app/service/seleccion.service';

@Component({
  selector: 'app-detalle-lechon',
  templateUrl: './detalle-lechon.component.html',
  styleUrls: ['./detalle-lechon.component.scss']
})
export class DetalleLechonComponent implements OnInit {

  id!:number;
  detalle: any;
  param:any;
  constructor(private crudService:CrudService, private route:ActivatedRoute, private seleccionService:SeleccionService) { }
  
  getStatus(){
    let status = sessionStorage.getItem("status")
    return status
    }

  ngOnInit(): void {
    this.param = this.route.params

    this.cargarDetaille();
  }


  cargarDetaille():void {
    let id = parseInt(this.param["_value"].id);
    
      this.crudService.SelectOnProfile(id).subscribe(res => {
        this.detalle = res;
        
       });
   
  }
}
