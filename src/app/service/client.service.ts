import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   client:any[];
  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get<Client[]>("http://127.0.0.1:8000/api/client/index");
  }
  createClient(){
    return this.http.post<Client[]>("http://127.0.0.1:8000/api/client/create",this.client);
  }
 
  
}