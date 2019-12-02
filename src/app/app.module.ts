import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';
import { RoutesRoutingModule } from './routes-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientService } from './service/client.service';
import { OperationService } from './service/operation.service';
import { OperationsComponent } from './operations/operations.component';
import { GerantComponent } from './gerant/gerant.component';
import { GerantService } from './service/gerant.service';
import { AgenceService } from './service/agence.service';
// Material angular 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { LoginService } from './service/login.service';




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
    GerantComponent,
  
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RoutesRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule

    
  ],
  providers: [
    ClientService,
    OperationService,
    GerantService, 
    AgenceService,
    LoginService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
