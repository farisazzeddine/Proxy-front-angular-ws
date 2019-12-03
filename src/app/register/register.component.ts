import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public form ={
prenom:null, name:null, cin:null, password:null, c_password:null, email:null, is_conseiller:null
};
public success =null;
public error = null;
  constructor( private registerService : RegisterService) { }

  ngOnInit() {
  }
  onRegister(){
   this.registerService.create(this.form).subscribe(
    data=> console.log(this.success)
   
   )}  
   handelError(error){
    this.error = error.error.error;
   }

}
