import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DetallePerfilComponent } from '../components/detalle-perfil/detalle-perfil.component';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  private email:string;
  private email$:Subject<string>
  



  constructor() {
    this.email='';
    this.email$=new Subject<string>();
   }

   addEmail(email:string){
    this.email=email;
    this.email$.next(this.email);
    console.log("---" + email);
   }

   getEmail$():Observable<string>{
    return this.email$.asObservable();
   }
   
}
