import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { UserGerantService } from '../service/user-gerant.service';
import { UserConseillerService } from '../service/user-conseiller.service';
import { AuthService } from '../service/auth.service';
import { User } from '../models/user';
import { CountAgentService } from '../service/count-agent.service';
import { CountGerantService } from '../service/count-gerant.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
gerants:User[];
agents:User[]=[];
serUserAgent:User[]=[];
serUserGerant:User[]=[];

public searchAgent:string ='';
public searchGerant:string ='';

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
    private countAgentService     : CountAgentService,
    private countGerantService    : CountGerantService,
    private Auth                  : AuthService,
    private userConseillerService : UserConseillerService,
    private userGerantService     : UserGerantService,
    private registerService       : RegisterService,
    private tokenService          : TokenService,
    private router                : Router

     ) { }

  ngOnInit() {
    this.getGerant();
    this.getAgent();
    this.countGerant();
    this.countAgent();
    this.Auth.authStatus.subscribe(
      value=>this.loggedIn=value
      );
  }
  //***********************************aside bare parametre */
  addUser(){
    this.restForm();
    this.isAdd=!this.isAdd;
    this.isAgent=false;
    this.isGerants=false;
    
  }
  showAgent(){
    this.isAgent=!this.isAgent;
    this.isGerants=false;
  }
  showGerant(){
    this.isGerants=!this.isGerants;
    this.isAgent=false;
  }

  // **************** form traitement*******************************
  chooseConseiller(){
    this.form.is_conseiller=1;
    this.form.is_gerant=0;
    
  }
  chooseGerant(){
    this.form.is_conseiller=0;
    this.form.is_gerant=1;
  }
  restForm(){
    this.form ={
      prenom:'', name:'',
      cin:'', password:'',
      c_password:'', email:'',
      is_conseiller:0, is_gerant:0,
      };

    
  }
   countGer:any[]=[];
  countGerant(){
    this.countGerantService.getAll()
      .subscribe(countGer =>{ this.countGer=countGer}); 
  }
  countAg:any[]=[];
  countAgent(){
    this.countAgentService.getAll()
      .subscribe(countAg =>{ this.countAg=countAg }); 
  }
  getGerant(){
    this.userGerantService.getAll()
    .subscribe(gerants =>{
      this.serUserGerant=
      this.gerants = gerants} );
  }
  getAgent(){
    this.userConseillerService.getAll()
    .subscribe(agents =>{
      this.serUserAgent = this.agents = agents
    });
  }
  onRegister(){
   this.registerService.create(this.form).subscribe(
    data => this.handleResponse(data),
    error=> this.handelError(error)
   
   )} 
     //  ************************************search user************************************************************
     searchUserAgent(){
      this.serUserAgent = this.agents.filter(
      (agent)=> agent.cin.toLowerCase().
      includes(this.searchAgent.toLowerCase()))
     }
     searchUserGerant(){
       this.serUserGerant= this.gerants.filter(
         (gerant)=>gerant.cin.toLowerCase().
         includes(this.searchGerant.toLowerCase())
       )

    }
 
  //  ************************************gestion des errors************************************************************
   handleResponse(data){
    this.tokenService.handleToken(data.access_token);
    this.router.navigateByUrl('/employer/login')
  }
   handelError(error){
    this.error = error.error.errors; 
   }

}
