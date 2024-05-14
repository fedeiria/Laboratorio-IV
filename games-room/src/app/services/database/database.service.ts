import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { DocumentData, DocumentReference, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore) { }

  getUsers(): Observable<DocumentData> {
    let userCollection = collection(this.firestore, 'users');
    return collectionData(userCollection);
  }

  getUserByEmail(email: any): DocumentReference<DocumentData> {
    return doc(this.firestore, email);
  }
}
