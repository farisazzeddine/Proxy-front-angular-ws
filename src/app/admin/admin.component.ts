import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
isClosed:boolean=true;
showFiller = false;
public loggedIn:boolean;

typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit() {
  }
  
  openSide(){
  this.isClosed=!this.isClosed;
  }
}
