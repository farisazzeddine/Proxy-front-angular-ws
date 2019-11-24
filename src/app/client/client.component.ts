import { Component, OnInit } from '@angular/core';
import {Client} from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  agences: Client[] = [];

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.getClient();
    this.  getAgence();
  }
  getClient(){
    this.clientService.findAll()
    .subscribe(clients =>this.clients = clients );
    
  }
  getAgence(){
    this.clientService. findAgenceForclient()
    .subscribe(agences =>this.agences = agences );
   
  }

}
