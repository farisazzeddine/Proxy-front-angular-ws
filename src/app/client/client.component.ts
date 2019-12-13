import { Component, OnInit } from '@angular/core';
import {Client} from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AgenceService } from '../service/agence.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  agences: Client[] = [];
  editCl:boolean=true;
  ajouteClientValue:boolean=true;
  labelPosition = 'after';
  isCompteCourant:boolean=true;
Newclient={
    id:0,
    agence:'', name:'', prenom:'', adresse:'', cin:'', codePostal:'',
    ville:'', telephone:'', compteEpargne:false, compteCourant:false,
    solde:'', cartebancaire:'', typeCarte:''

  };
  
  constructor(private clientService : ClientService, private agenceService:AgenceService) { }

  ngOnInit() {
    this.getClient();
    this.  getAgence();
  }
  openCoumpteCourant(){
this.Newclient.compteCourant=true,
this.Newclient.compteEpargne=false,
this.isCompteCourant=!true;
  }
  openCoumpteEpargne(){
    this.Newclient.compteEpargne=true,
    this.Newclient.compteCourant=false,
    this.isCompteCourant=!false;
  }
  
  ajouteClient(){
 this.ajouteClientValue=!this.ajouteClientValue;
  }
  getAgence(){
    this.agenceService.getAll()
    .subscribe(agences =>this.agences = agences );
   
  }
  getClient(){
    
    this.clientService.getAll()
    .subscribe(clients =>this.clients = clients );
    
    
  }
  editClient(Client){
     this.Newclient=Client;
     this.editCl=false;
  }
  updateClient(){

  }
  createClient(){
    this.clientService.create(this.Newclient).subscribe(
      ()=>{
        this.getClient();
        console.log("true");
        
      }
    );
  }

}