import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
isClosed:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  openSide(){
  this.isClosed=!this.isClosed;
  }
}
