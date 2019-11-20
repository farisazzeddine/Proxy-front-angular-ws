import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http:HttpClient) { }
    findAllOperation(){
      return this.http.get<Operation[]>("http://127.0.0.1:8000/api/operation/liste");
    
  }
}
