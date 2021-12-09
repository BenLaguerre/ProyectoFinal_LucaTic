import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  getStatus(){
    let status = sessionStorage.getItem("status")
    return status
    }

  ngOnInit(): void {
    
  }

}
