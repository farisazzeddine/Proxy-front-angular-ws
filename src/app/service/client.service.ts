import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client'
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService  extends DataService{
   
  constructor(http:HttpClient) { 
    super("http://127.0.0.1:8000/api/client",http);
  }
 
  
}