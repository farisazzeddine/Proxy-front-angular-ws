import { Component, OnInit } from '@angular/core';
import {Client} from 'src/app/models/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.getClient();
  }
  getClient(){
    this.clientService.findAll().subscribe(clients =>this.clients = clients );
    // console.log(this.getClient());

  }

}
