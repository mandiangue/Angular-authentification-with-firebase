import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from './../shared/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
adRegister: FormGroup
isloggin= false
  constructor(private authser: AuthserviceService, public fbuild: FormBuilder, public route: Router) { }

  ngOnInit(): void {
   this.adRegister = this.fbuild.group({
email: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(3)] ],

    })
  }
registerUser(){
  if(this.adRegister.valid){
    this.authser.register(this.adRegister.value.email, this.adRegister.value.password)
this.isloggin= true
  }

}
}
