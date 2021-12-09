import { Component, OnInit } from '@angular/core';
import { SeleccionService } from 'src/app/service/seleccion.service';
import { Perfil } from 'src/app/model/Perfil';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { DetallePerfilComponent } from '../detalle-perfil/detalle-perfil.component';


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {

  email:string;
  userPerfil!: Perfil;
  numeroRandom :number =Math.floor(Math.random()*20);
  constructor(
    private crudService:CrudService,
    private router:Router, 
    private seleccionService:SeleccionService, 
    private detallePerfil: DetallePerfilComponent) {
      this.email='';
    }

  ngOnInit(): void {
    this.seleccionService.getEmail$().subscribe(email => {
      this.email=email
    }); 

    //Get your account information
    this.crudService.GetOnProfile(sessionStorage.getItem('id')).subscribe(res => {
     this.userPerfil = new Perfil (
        res[0]._id,
        res[0].id,
        res[0].email,
        res[0].name,
        res[0].gender,
        res[0].age,
        res[0].city,
        res[0].description,
        res[0].music,
        res[0].arrayLikes,
        res[0].arrayDislikes
      )
    });
  }

  fillArrayLikes(){
    this.userPerfil.arrayLikes.push(this.email)
    console.log(this.userPerfil.arrayLikes)
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
    }); 

    this.crudService.updateProfile(this.userPerfil.getMongoId(), this.userPerfil).subscribe(() => {
      console.log('Data updated successfully!')
    }, (err) => {
      console.log(err);
  })
}
  fillArrayDislikes(){
    this.userPerfil.arrayDislikes.push(this.email)
    console.log(this.userPerfil.arrayDislikes)
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
    });

    this.crudService.updateProfile(this.userPerfil.getMongoId(), this.userPerfil).subscribe(() => {
      console.log('Data updated successfully!')
    }, (err) => {
      console.log(err);
  })
  }

/*
  sin terminar

  like():any{
    this.crudService.like()
      .susbcribe()
  }
*/
}
