import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { Setting } from '../models/setting';
import { AgenceService } from '../service/agence.service';
import { Agence } from '../models/agence';


@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.scss']
})
export class GerantComponent implements OnInit {
 Settings:Setting[]=[];
 Agences:Agence[]=[];
 newAgence={
   id:0,
   nomAgence:'',
   adresseAgence:''
  };

 editAg=true;
 newSetting={
   id:0,
   nomAgence:'',
  commissionVirement:'',
  commissionRetrait:'',
  commissionRetraitCheque:'',
  commissionVersement:'',
  fraisOuvertureCompte:'',
  fraisDotation:'',
  choixChangementCrtGuichet:'',
  DemandeCheque:'',
  TransferSldEtranger:'',
  NbrMxconseillersParclient:'',
  nbrMxconseillers:''
 };
 editFrais=true;

  constructor(private gerantService : GerantService , private agenceService: AgenceService) { }

  ngOnInit() {
    this.getParametreAg();
    this.getAllAgence();
  }
  getParametreAg(){
     this.gerantService.getAll()
     .subscribe(Settings =>this.Settings=Settings);  
  }
  createParametreAg(){
this.gerantService.create(this.newSetting).subscribe(()=>{
this.newSetting={
  id:0,
 nomAgence:'',
 commissionVirement:'',
 commissionRetrait:'',
 commissionRetraitCheque:'',
 commissionVersement:'',
 fraisOuvertureCompte:'',
 fraisDotation:'',
 choixChangementCrtGuichet:'',
 DemandeCheque:'',
 TransferSldEtranger:'',
 NbrMxconseillersParclient:'',
 nbrMxconseillers:''
};  
  this.getParametreAg();
  console.log(true);
})

}
editParametreAg(setting){
  this.newSetting=setting;
  this.editFrais=false;
}
updateParametreAg(){
  this.gerantService.update(this.newSetting).subscribe(()=>{
    this.newSetting={
      id:0, nomAgence:'',commissionVirement:'',commissionRetrait:'',commissionRetraitCheque:'',commissionVersement:'',fraisOuvertureCompte:'',fraisDotation:'',
     choixChangementCrtGuichet:'',DemandeCheque:'',TransferSldEtranger:'',NbrMxconseillersParclient:'',nbrMxconseillers:''
    }; 
    this.editFrais=true;
    console.log("true");
  })
}
deleteParametreAg(setting){
  this.gerantService.delete(setting).subscribe(()=>{
    let index = this.Settings.indexOf(setting);
    this.Settings.splice(index, 1);
    this.getParametreAg();
    console.log("is deleted");

  })

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
