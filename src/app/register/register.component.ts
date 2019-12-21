import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { UserGerantService } from '../service/user-gerant.service';
import { UserConseillerService } from '../service/user-conseiller.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
gerants:any[];
agents:any[];
labelPosition = 'after';
public isGerants:boolean=false;
public isAgent:boolean=false;
public isAdd:boolean=false;
headElements = [
  "UserId","Nom Et Prénom",
  "CIN°","E-mali","date de Création",
  "action"
];
public form ={
prenom:null, name:null, cin:null, password:null, c_password:null, email:null, is_conseiller:0, is_gerant:0,
};
public success =null;
public error = [];
public loggedIn:boolean;
  constructor( 
    private Auth : AuthService,
    private userConseillerService : UserConseillerService,
    private userGerantService     : UserGerantService,
    private registerService       : RegisterService,
    private tokenService          : TokenService,
    private router                : Router

     ) { }

  ngOnInit() {
    this.getGerant();
    this.getAgent();
    this.Auth.authStatus.subscribe(
      value=>this.loggedIn=value
      );
  }
  addUser(){
    this.isAdd=!this.isAdd
  }
  showAgent(){
    this.isAgent=!this.isAgent;
  }

  // ***********************************************
  getGerant(){
    this.userGerantService.getAll()
    .subscribe(gerants =>this.gerants = gerants );
  }
  getAgent(){
    this.userConseillerService.getAll()
    .subscribe(agents =>this.agents = agents );
  }
  onRegister(){
   this.registerService.create(this.form).subscribe(
    data=> this.handleResponse(data),
    error=>this.handelError(error)
   
   )}  
  //  ************************************************************************************************
   handleResponse(data){
    this.tokenService.handleToken(data.access_token);
    this.router.navigateByUrl('/employer/login')
  }
   handelError(error){
    this.error = error.error.errors;
   }

}
