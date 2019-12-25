import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  public loggedIn:boolean;
  user_info = JSON.parse(localStorage.getItem('user_info'));
  constructor(
    private Auth          : AuthService,
    private tokenService  : TokenService,
    private router        : Router

  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(
       value=>this.loggedIn=value
       );

  }
  
  deconnecte(event: MouseEvent){
    event.preventDefault();
    this.tokenService.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/employer/login');

  }

}
