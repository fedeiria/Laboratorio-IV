import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {
  constructor(private router: Router) {
    
  }

  formRecover = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  get email() {
    return this.formRecover.get('email') as FormControl;
  }

  recoverPassword(): void {
    window.alert('We send an email to ' + this.email.value + '. Please check your mailbox and follow the instructions!');
    this.router.navigate(['welcome']);
  }
}
