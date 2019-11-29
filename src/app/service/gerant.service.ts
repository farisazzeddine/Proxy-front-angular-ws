import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Setting } from '../models/setting';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class GerantService extends DataService {

  constructor(http:HttpClient) { 
    super("http://127.0.0.1:8000/api/setting",http);
  }
  
 
}
