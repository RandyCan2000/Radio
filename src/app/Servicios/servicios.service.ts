import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

//Modelos
import { Users } from '../Model/Users';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  private UsersCollection:AngularFirestoreCollection<Users>;
  private Users:Observable<Users[]>;

  constructor(private afs:AngularFirestore) {
    this.UsersCollection=afs.collection<any>('Users');
    this.Users=this.UsersCollection.valueChanges();
  }

  public getAllUsers(){
    return this.Users=this.UsersCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action=>{
        const data=action.payload.doc.data() as Users;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
  }
  public getUser(Id:string){
    return this.afs.collection<User>('Users').doc(Id).snapshotChanges();
  }

}
