import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ClientComponent } from './client/client.component';
import { OperationsComponent } from './operations/operations.component';
import { GerantComponent } from './gerant/gerant.component';
import { AdminComponent } from './admin/admin.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';



const routes: Routes = [
  {
    path:'',
   component:LoginComponent,
   canActivate: [BeforeLoginService]
  },
  {
    path:'employer/login',
   component:LoginComponent,
   canActivate : [BeforeLoginService]
  },
  {
    path:'employer/register',
   component:RegisterComponent,
   canActivate:[AfterLoginService],

   
   
  },
  {
    path:'accueil/register',
   component:RegisterComponent,
   canActivate: [BeforeLoginService],
  },
  {
  path:'client/compte',
  component:ClientComponent,
  canActivate:[AfterLoginService],
},
  {
  path:'operations/liste',
  component:OperationsComponent,
  canActivate:[AfterLoginService],
},
  {
  path:'gerant/configuration',
  component:GerantComponent,
  canActivate:[AfterLoginService],
},
  {
  path:'admin',
  component:AdminComponent,
  canActivate:[AfterLoginService],
},
  {
  path:'**',
   component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
