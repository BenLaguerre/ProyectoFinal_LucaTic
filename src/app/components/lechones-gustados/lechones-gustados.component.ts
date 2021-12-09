import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-lechones-gustados',
  templateUrl: './lechones-gustados.component.html',
  styleUrls: ['./lechones-gustados.component.scss'],
})
export class LechonesGustadosComponent implements OnInit {
  constructor(private crudService: CrudService, public auth: AuthService) {}
  //Falta añadir el html y su logica :)
  getStatus() {
    let status = sessionStorage.getItem('status');
    return status;
  }
  userMail!: string;
  likes!: any;
  likesInfo: any[] = [];
  Id!: number;

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchLikes();
    }, 1000);
    setTimeout(() => {
      this.showLiked();
    }, 1200);
  }

  fetchLikes(): any {
    this.userMail = this.auth.userFirebase;
    this.crudService.GetCurrentProfile(this.userMail).subscribe((res) => {
      res;
      this.likes = res[0].arrayLikes;
    });
  }
  showLiked(): any {
    this.likes.forEach((userInfo: any) => {
      this.crudService.GetCurrentProfile(userInfo).subscribe((users) => {
        this.likesInfo.push(users);
      });
    });
  }
  ensenaId(Ide: number) {
    this.Id = Ide;
    let stringID = Ide.toString();
    sessionStorage.setItem('ide', stringID);
  }
}
