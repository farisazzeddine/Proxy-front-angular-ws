import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public form ={
prenom:null, name:null, cin:null, password:null, c_password:null, email:null, is_conseiller:0, is_gerant:0,
};
public success =null;
public error = [];

  constructor( 
    private registerService : RegisterService,
    private tokenService    : TokenService,
    private router          : Router

     ) { }

  ngOnInit() {
  }
  onRegister(){
   this.registerService.create(this.form).subscribe(
    data=> this.handleResponse(data),
    error=>this.handelError(error)
   
   )}  
   handleResponse(data){
    this.tokenService.handleToken(data.access_token);
    this.router.navigateByUrl('/gerant/configuration')
  }
   handelError(error){
    this.error = error.error.errors;
   }

}
