import { AuthserviceService } from './../shared/authservice.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.css']
})
export class SecretPageComponent implements OnInit {
  isloggin= false
  constructor(private authser: AuthserviceService,  private route: Router,public authfire: AngularFireAuth) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isloggin = true
    else this.isloggin= false
  }
  signout(){
    this.authser.signout()
    this.route.navigate(['/'])
    this.isloggin= false
  }
}
