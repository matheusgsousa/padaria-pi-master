import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseAuthService} from '../services/firebase-auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch(error => console.log(error.code)
    )
    .then(res => console.log(res));
  }
  cadastrar(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .catch(error => console.log(error.code)
    )
    .then(res => console.log(res));
  }

}
