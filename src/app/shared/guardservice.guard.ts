import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthserviceService } from './authservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GuardserviceGuard implements CanActivate {
  constructor(private authservice: AuthserviceService, public Auth: AngularFireAuth, public route: Router){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
     if(this.authservice.isloggin){

      return true
     }else
     this.route.navigate(['/login'])
     return false


      }






}





