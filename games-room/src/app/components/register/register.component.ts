import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogElementsComponent } from '../layout/dialogs/dialog-elements/dialog-elements.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, DialogElementsComponent, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usersCollection: any[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore, private router: Router) {

  }

  formRegister = new FormGroup({
    'name': new FormControl('', Validators.required),
    'surname': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.email, Validators.required]),
    'password': new FormControl('', Validators.required)
  });

  get name() {
    return this.formRegister.get('name') as FormControl;
  }

  get surname() {
    return this.formRegister.get('surname') as FormControl;
  }

  get email() {
    return this.formRegister.get('email') as FormControl;
  }

  get password() {
    return this.formRegister.get('password') as FormControl;
  }

  openDialog() {
    this.dialog.open(DialogElementsComponent, { restoreFocus: false });
  }

  register() {
    let collections = collection(this.firestore, 'users');
    const observable = collectionData(collections);

    observable.subscribe((response) => {
      this.usersCollection = response;

      if (this.usersCollection.find(({ email }) => email === this.email.value)) {
        this.openDialog();
      }
      else {
        addDoc(collections, { 'name': this.name.value, 'surname': this.surname.value, 'email': this.email.value, 'password': this.password.value, 'created': new Date(), 'status': true });
        alert("Registro exitoso!");
        this.router.navigate(['/home']);
      }
    });
  }

  onSubmit() {
    this.register();
  }
}
