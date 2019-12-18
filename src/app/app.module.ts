import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { LoginService } from './service/login.service';
import { TokenService } from './service/token.service';
// Material angular 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';




//auth settings
import { AuthService } from './service/auth.service';
import { AfterLoginService } from './service/after-login.service';
import { BeforeLoginService } from './service/before-login.service';
import { UserConseillerService } from './service/user-conseiller.service';
import { UserGerantService } from './service/user-gerant.service';




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
    MatRadioModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatGridListModule,
    MatTableModule

    
  ],
  providers: [
    ClientService,
    OperationService,
    GerantService, 
    AgenceService,
    LoginService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService,
    UserConseillerService,
    UserGerantService
    
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
