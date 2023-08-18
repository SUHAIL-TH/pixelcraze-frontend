import { AbstractControl, ValidationErrors } from '@angular/forms';


export const PasswordStrengthValidator = (control: AbstractControl): ValidationErrors | null => {
    
  const value: string = control.value || '';

  if (!value) {
    return null;
  }

  const hasUpperCase = /[A-Z]+/.test(value);
  const hasLowerCase = /[a-z]+/.test(value);
  const hasNumber = /[0-9]+/.test(value);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

  // Adjust the strength criteria as needed
  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar || value.length < 8) {
    return { passwordStrength: true };

  }

  return null;
};
