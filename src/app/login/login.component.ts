import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(e){
    e.preventDefault();
    const target = e.target;
    const cin = target.querySelector('#cin').value;
    const password = target.querySelector('#password').value;
    if( cin === password ){
      window.alert("votre cin n'est pas votre password")
    }
    console.log(cin);
    console.log(password);
  }

}
