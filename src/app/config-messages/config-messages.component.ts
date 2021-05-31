import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'config-messages',
  templateUrl: './config-messages.component.html',
  styleUrls: ['./config-messages.component.css']
})
export class ConfigMessagesComponent implements OnInit {

  assunto: string = '';
  mensagem: string = '';

  constructor(private store: StoreService) {

   }

  ngOnInit(): void {
  }

  setMessage(){
    this.store.setNewMessage(this.assunto,this.mensagem);
    this.assunto = '';
    this.mensagem = '';
    alert('Mensagem Salva com sucesso!');
  }

}
