import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
  constructor(public auth: AngularFireAuth, private router: Router) { 

  }

  ngOnInit(): void {
  }
  login(){
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch(error => console.log(error.code)
    )
    .then(res => {
      console.log(res);
      this.router.navigateByUrl('/',{state:{ auth: true }});
    });
  }
  cadastrar(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .catch(error => console.log(error.code)
    )
    .then(res => {
      console.log(res);
      this.router.navigateByUrl('/',{state:{ auth: true }});
    })
  }

}
