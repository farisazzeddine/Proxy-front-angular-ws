import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form ={
    cin      : null,
    password : null
  } ;
  public error = null;

  constructor(
    private loginService:LoginService,
    private tokenService:TokenService,
    private router:Router,
    private Auth : AuthService
    ) { }

  ngOnInit() {
  }
  onSubmit(){
    if( this.form.cin === this.form.password ){
      error=>console.log("cin is not be the passowrd");
    }
    this.loginService.create(this.form)
    .subscribe(
     data => this.handleResponse(data),
     error=> this.handleError(error)
     
    );

  }
  handleResponse(data){
    
    localStorage.setItem('user_info',JSON.stringify(data))
    this.tokenService.handleToken(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/gerant/configuration');
  }

  handleError(error){
   this.error = error.error.error;
  }

}
