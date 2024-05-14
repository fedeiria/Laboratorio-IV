import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore) { }

  register(email: any, password: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email:any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logOut() {
    return signOut(this.auth);
  }

  saveLoginTimestamp(email: any) {
    let loginCollection = collection(this.firestore, 'logins');
    addDoc(loginCollection, { 'email': email, 'created': new Date() });
  }
}
