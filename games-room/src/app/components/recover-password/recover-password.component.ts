import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from '../../services/messages/dialog/dialog.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {

  constructor(private dialogService: DialogService, private router: Router) { }

  formRecover = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  get email() {
    return this.formRecover.get('email') as FormControl;
  }

  recoverPassword() {
    this.dialogService.showDialogMessage({
      title: 'Games Room',
      content: 'Te enviamos un email a ' + this.email.value + '<br>' + '.Verifica tu bandeja de entrada y segui los pasos para recuperar la contraseña',
    });
    this.router.navigate(['welcome']);
  }
}