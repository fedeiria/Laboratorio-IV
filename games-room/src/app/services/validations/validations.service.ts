import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor(private database: DatabaseService) { }

  confirmPassword(): ValidatorFn {
    return(formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password');
      const repeatPassword = formGroup.get('repeat-password');
      const errorMessage = { noMatch: 'las contraseñas no coinciden'};

      if (password?.value !== repeatPassword?.value) {
        formGroup.get('repeat-password')?.setErrors(errorMessage);
        return errorMessage;
      }
      else {
        formGroup.get('repeat-password')?.setErrors(null);
        return null;
      }
    }
  }
}
