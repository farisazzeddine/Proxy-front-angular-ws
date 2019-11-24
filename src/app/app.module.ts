import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { ClientService } from './service/client.service';
import { OperationService } from './service/operation.service';
import { OperationsComponent } from './operations/operations.component';
import { GerantComponent } from './gerant/gerant.component';
import { GerantService } from './service/gerant.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ClientComponent,
    AdminComponent,
    PageNotFoundComponent,
    OperationsComponent,
    GerantComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RoutesRoutingModule
    
  ],
  providers: [ClientService,OperationService,GerantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
