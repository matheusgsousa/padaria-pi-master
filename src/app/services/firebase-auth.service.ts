import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private firestore: AngularFirestore
  ) { }
create_NewUsuarios(record){
  return this.firestore.collection('usuarios').add(record);
}

read_Usuarios(){
  return this.firestore.collection('usuarios').snapshotChanges();
}

update_Usuario(recordID,record) {
  this.firestore.doc('usuarios/' + recordID).update(record);
}

delete_Usuario(record_id) {
  this.firestore.doc('usuarios/' + record_id).delete();
  }
}