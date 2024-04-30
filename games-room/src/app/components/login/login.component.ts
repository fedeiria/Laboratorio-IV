import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogElementsComponent } from '../layout/dialogs/dialog-elements/dialog-elements.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DialogElementsComponent, MatButtonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usersCollection: any[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore, private router: Router) {

  }

  formLogin = new FormGroup({
    'email': new FormControl('', [Validators.email, Validators.required]),
    'password': new FormControl('', Validators.required)
  });

  get email() {
    return this.formLogin.get('email') as FormControl;
  }

  get password() {
    return this.formLogin.get('password') as FormControl;
  }

  openDialog() {
    this.dialog.open(DialogElementsComponent, { restoreFocus: false });
  }

  login() {
    let collections = collection(this.firestore, 'users');
    const observable = collectionData(collections);

    observable.subscribe((response) => {
      this.usersCollection = response;

      this.usersCollection.forEach(login => {
        if (login.email === this.email.value && login.password === this.password.value) {
          this.saveLoginTimestamp();
          this.router.navigate(['/home']);
        }
        else {
          this.openDialog();
        }
      });
    });
  }

  saveLoginTimestamp() {
    let collections = collection(this.firestore, 'logins');
    addDoc(collections, { 'email': this.email.value, 'created': new Date() });
  }

  onSubmit() {
    this.login();
  }
}
