import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { DialogService } from '../../services/messages/dialog/dialog.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private dialogService: DialogService, private router: Router) { }

  formLogin = new FormGroup({
    'email': new FormControl('', [Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.required]),
    'password': new FormControl('', Validators.required)
  });

  get email() {
    return this.formLogin.get('email') as FormControl;
  }

  get password() {
    return this.formLogin.get('password') as FormControl;
  }

  onSubmit() {
    this.authService.login(this.email.value, this.password.value)
    .then(() => {
      this.authService.saveLoginTimestamp(this.email.value);
      this.router.navigate(['/home']);
    })
    .catch(() => {
      this.dialogService.showDialogMessage({
        title: "Games Room",
        content: "Usuario/contraseña incorrectos."
      });
    });
  }
}
