import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseAuthService} from '../services/firebase-auth.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
usuario: any;
email:string;
password:string;
usuariosNome: string;
usuariosTelefone:string;
isAlert=false;
alertMsg = "Usuário criado com sucesso";

  constructor(private FirebaseAuthService: FirebaseAuthService, public auth: AngularFireAuth) { }

  ngOnInit(){
    this.FirebaseAuthService.read_Usuarios().subscribe(data => {
    this.usuario = data.map(e => {
    return{
      id: e.payload.doc.id,
      isEdit: false,
      Nome: e.payload.doc.data()['Nome'],
      Telefone: e.payload.doc.data()['Telefone'],
    };
    })
    console.log(this.usuario);
    });
    }
    CreateRecord(){
      
      let record = {};
      record['Nome'] = this.usuariosNome;
      record['Telefone'] = this.usuariosTelefone;
      
      this.FirebaseAuthService.create_NewUsuarios(record).then(resp => {
        this.usuariosNome="";
        this.usuariosTelefone = "";
        this.isAlert = true;
        console.log(resp);
        
        
      })
      .catch(error => {
        console.log(error);

      });
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
