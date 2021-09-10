import { AuthserviceService } from './shared/authservice.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Firebase Authentification';

isloggin: boolean
adForm!: FormGroup;



  constructor(private fbuilder: FormBuilder, private route: Router,public authfire: AngularFireAuth, public authser: AuthserviceService){}


  ngOnInit(){
    this.adForm = this.fbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)] ]

        }) ;
        this.authfire.onAuthStateChanged((user)=>{
          if(user){
            this.isloggin= true;
          }else{
            this.isloggin= false;
          }

        })
  }

  signout(){
    this.authser.signout()
    this.route.navigate(['/login'])
    this.isloggin= false
  }

  onLoggin(){
    this.authser.signin(this.adForm.value.email, this.adForm.value.password)
   this.isloggin= true
    }
  }



