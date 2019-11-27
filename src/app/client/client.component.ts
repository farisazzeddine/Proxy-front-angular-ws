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
Newclient={
    id:0,
    agence:'1', nom:'', prenom:'', adresse:'', cin:'', codePostal:'',
    ville:'', telephone:'', compteEpargne:'0', compteCourant:'',
    solde:'', cartebancaire:'', typeCarte:''

  };

  constructor(private clientService : ClientService, private agenceService:AgenceService) { }

  ngOnInit() {
    this.getClient();
    this.  getAgence();
  }
  getClient(){
    this.clientService.findAll()
    .subscribe(clients =>this.clients = clients );
    
  }
  createClient(){
    

    this.clientService.createClient().subscribe(
      Response=>{
        console.log(Response);
        
      }
    );
  }
  getAgence(){
    this.agenceService.getAll()
    .subscribe(agences =>this.agences = agences );
   
  }

}