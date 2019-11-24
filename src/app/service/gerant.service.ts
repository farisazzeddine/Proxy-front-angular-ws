import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Setting } from '../models/setting';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GerantService {

  constructor(private http:HttpClient) { }
  findAllParametres(){
    return this.http.get<Setting[]>("http://127.0.0.1:8000/api/setting/liste");
  }
  findAgence(){
    return this.http.get<Setting[]>("http://127.0.0.1:8000/api/agence/index");
  }
}
