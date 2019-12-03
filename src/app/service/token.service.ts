import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  
  handleToken(token){
   this.set(token);
  }
  set(token){
    localStorage.setItem('token',token)
  }

}
