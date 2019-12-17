import { Component, OnInit } from '@angular/core';
import {Client} from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AgenceService } from '../service/agence.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  serClient: Client[] = [];
  agences: Client[] = [];

  searchText = '';
  editCl:boolean=true;
  ajouteClientValue:boolean=true;
  labelPosition = 'after';
  isCompteCourant:boolean=true;
  headElements = [
    "#","Agence","Nom Et Prénom",
    "CIN°","Numéro de compte",
    "Type de Compte", "solde",
    "La date"
];
constructor(
  private tokenService:TokenService,
  private clientService : ClientService, 
  private agenceService:AgenceService
  ) { }
Newclient={
    id:0,
    agence:'', nom:'', prenom:'', adresse:'', cin:'', codePostal:'',
    ville:'', telephone:'', compteEpargne:false, compteCourant:false,
    solde:'', cartebancaire:'', typeCarte:''

  };
  

  ngOnInit() {
    this.getClient();
    this.getAgence();
  }

  //les evenements click*********************************************************************************
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
     this.Newclient;
  }
  // pour vider la formule*********************************************************************************
  resetForms(){
    this.Newclient={
      id:0,
      agence:'', nom:'', prenom:'', adresse:'', cin:'', codePostal:'',
      ville:'', telephone:'', compteEpargne:false, compteCourant:false,
      solde:'', cartebancaire:'', typeCarte:''
  
    };
  }

  //partie crud pour les clients********************************************************************************* 

  getAgence(){
    this.agenceService.getAll()
    .subscribe(agences =>this.agences = agences ); 
  }
 
  getClient(){
    this.clientService.getAll()
    .subscribe(clients =>{
     this.serClient= this.clients = clients
     });
  }
  createClient(){
    this.clientService.create(this.Newclient).subscribe(
      ()=>{
        this.resetForms();
        this.getClient();
        console.log("true");
        
      }
    );
  }
  editClient(Client){
   this.Newclient=Client;
   this.editCl=false;
   this.ajouteClientValue=false;
    
  }
  updateClient(){

  }
  deleteClient(Client){
    this.clientService.delete(Client).subscribe(()=>{
    let index = this.serClient.indexOf(Client);
    this.serClient.splice(index, 1);
    this.getClient();
    this.getAgence();
    })

  }

  searcheClient(){
    this.serClient = this.clients.filter(
      (client)=> client.cin.toLowerCase().
      includes(this.searchText.toLowerCase()))

  }
  //partie crud finis
}