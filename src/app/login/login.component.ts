import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../shared/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adForm!: FormGroup;
  isloggin= false
 
  constructor(private fbuilder: FormBuilder, private route: Router,public authfire: AngularFireAuth, public authser: AuthserviceService) { }

  ngOnInit(): void {
    this.adForm = this.fbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)] ]

        }) ;

  }
  onLoggin(){
  this.authser.signin(this.adForm.value.email, this.adForm.value.password)
 this.isloggin= true
  }


}
