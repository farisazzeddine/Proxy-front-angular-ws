import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { Setting } from '../models/setting';


@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.scss']
})
export class GerantComponent implements OnInit {
 settings:Setting[]=[];
 Agences:Setting[]=[];

  constructor(private gerantService : GerantService) { }

  ngOnInit() {
    this.getParametreAg();
    this.getAllAgence();
  }
  getParametreAg(){
     this.gerantService.findAllParametres()
     .subscribe(Data =>this.settings=Data);
     
  }
  getAllAgence(){
    this.gerantService.findAgence().subscribe(Agences =>this.Agences=Agences);
  }
  
}
