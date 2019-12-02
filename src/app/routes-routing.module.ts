import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ClientComponent } from './client/client.component';
import { OperationsComponent } from './operations/operations.component';
import { GerantComponent } from './gerant/gerant.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {
    path:'employer/login',
   component:LoginComponent
  },
  {
    path:'employer/register',
   component:RegisterComponent
  },
  {
    path:'accueil/register',
   component:RegisterComponent
  },
  {
  path:'client/compte',
  component:ClientComponent
},
  {
  path:'operations/liste',
  component:OperationsComponent
},
  {
  path:'gerant/configuration',
  component:GerantComponent
},
  {
  path:'admin',
  component:AdminComponent
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
