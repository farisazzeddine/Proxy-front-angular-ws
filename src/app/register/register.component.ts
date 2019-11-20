import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  register(e){
    e.preventDefault();
    const target = e.target;
    const prenom  =target.querySelector('#prenom').value;
    const nom  =target.querySelector('#nom').value;
    const email  =target.querySelector('#email').value;
    const password  =target.querySelector('#password').value;
    const c_password  =target.querySelector('#c_password').value;
    const cin  =target.querySelector('#cin').value;
    const conseiller  =target.querySelector('#conseiller').value;
    console.log(conseiller);

  }

}
