import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

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

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  onSubmit(){
    if( this.form.cin === this.form.password ){
      error=>console.log("cin is not be the passowrd");
    }
    this.loginService.create(this.form)
    .subscribe(
     data => console.log("success"+"/"+this.form),
    error=>  this.handelError(error)
     
    );

  }

  handelError(error){
   this.error = error.error.error;
  }

}
