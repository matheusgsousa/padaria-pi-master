import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PerfilfirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

/* create_NewPerfil : Cria um novo registro na coleção especificada usando o método add */
create_NewPerfil(record){
  return this.firestore.collection('Perfil').add(record);
}
/*read_Perfil: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
read_Perfil(){
  return this.firestore.collection('Perfil').snapshotChanges();
}
/*update_Perfil : atualiza o registro pegando o ID e chamando o método de atualização */
update_Perfil(recordID,record) {
  this.firestore.doc('Perfil/' + recordID).update(record);
}
/*delete_Perfil : chama o método de exclusão  ao registrar o ID*/
delete_Perfil(record_id) {
  this.firestore.doc('Perfil/' + record_id).delete();
  }
}