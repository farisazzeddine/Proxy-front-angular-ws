import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../models/operation';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService extends DataService{

  constructor(http:HttpClient) {
    super("http://127.0.0.1:8000/api/operation",http);
   }
    
}
