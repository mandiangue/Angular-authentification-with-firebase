import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { GuardserviceGuard } from './shared/guardservice.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '',redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'secretPage',component: SecretPageComponent,canActivate:[GuardserviceGuard]},
  {path: '**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
