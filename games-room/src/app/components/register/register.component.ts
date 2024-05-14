import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { DialogService } from '../../services/messages/dialog/dialog.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations/validations.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(private authService: AuthService, private dialogService: DialogService, private router: Router, private validationsService: ValidationsService) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      'email': new FormControl('', [Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'), Validators.required]),
      'name': new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      'surname': new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      'password': new FormControl('', [Validators.minLength(8), Validators.required]),
      'repeat-password': new FormControl('', [Validators.minLength(8), Validators.required])
    }, this.validationsService.confirmPassword());
  }

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

  get repeatPassword() {
    return this.formRegister.get('repeat-password') as FormControl;
  }

  onSubmit() {
    this.authService.register(this.email.value, this.password.value)
    .then(() => {
      this.authService.saveLoginTimestamp(this.email.value);
      this.router.navigate(['/home']);
    })
    .catch(() => {
      this.dialogService.showDialogMessage({
        title: 'Games Room',
        content: 'Ya existe un usuario registrado con ese correo.'
      });
    });
  }
}
