import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { Setting } from '../models/setting';
import { AgenceService } from '../service/agence.service';


@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.scss']
})
export class GerantComponent implements OnInit {
 settings:Setting[]=[];
 Agences:Setting[]=[];
 editAg=true;
 newAgence={id:0, nomAgence:'',adresseAgence:''}

  constructor(private gerantService : GerantService , private agenceService: AgenceService) { }

  ngOnInit() {
    this.getParametreAg();
    this.getAllAgence();
  }
  getParametreAg(){
     this.gerantService.findAllParametres()
     .subscribe(Data =>this.settings=Data);
     
  }
  // partie Agence ajoute et supprime et modification
  getAllAgence(){
    this.agenceService.getAll().subscribe(Agences =>this.Agences=Agences);
  }
  createAgence() {
  this.agenceService.create(this.newAgence).subscribe(() =>{
    this.newAgence={id:0, nomAgence:'',adresseAgence:''};
    window.alert("l'agence créer avec succes");
    this.getAllAgence();
  });
  }
  editAgence(agence){
    this.newAgence=agence;
    this.editAg=false;
    
  }

  updateAgence(){
    this.agenceService.update(this.newAgence).subscribe(responce=>{
      this.newAgence={id:0, nomAgence:'',adresseAgence:''};
      this.editAg=true;
      window.alert("is updating");
      console.log(" true");
    })
  }
  deleteAgence(agence){
    this.agenceService.delete(agence).subscribe(response=>{
      let index = this.Agences.indexOf(agence);
      this.Agences.splice(index, 1);
      this.getAllAgence();
     })
    
  }
  
}
