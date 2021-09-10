import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
isloggin: boolean
  constructor(public authservice: AngularFireAuth, private route: Router) {
    this.isloggin= false
    this.authservice.onAuthStateChanged((user)=>{
      if(user){
        this.isloggin= true;
      }else{
        this.isloggin= false;
      }

    })

  }

 async signin(email:string, password:any){
 this.authservice.signInWithEmailAndPassword(email, password)
 .then(res=>{
   this.isloggin= true

alert('connexion réussie')
   this.route.navigate(['/secretPage'])

 })
.catch(()=>{
  alert('identifiant ou mot passe invalide')

})
  }

signout(){
 this.authservice.signOut()
 this.isloggin= false
this.route.navigate(['/'])
  }

register(email: string, password: string){
this.authservice.createUserWithEmailAndPassword(email, password)
.then(()=>{
  this.isloggin= true
  alert('Enregistrement réussi')
   this.route.navigate(['/secretPage'])


})
.catch((error)=>{
console.log(error)
})
}

}
