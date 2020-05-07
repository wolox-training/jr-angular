export class RegisterValidator {

  readonly passwordRegexPattern = '^(?=.*[A-Z])(?=.*[0-9]).*$';
  readonly errorMessages = {
    required: 'This field is required',
    email: 'Invalid email format',
    pattern: 'Must have at least one number and one capital letter',
    passwordConfirmation: 'The passwords must match'
  }

  constructor() { }

  passwordConfirmation() {
    return function(formGroup) {
      const userPassword = formGroup.controls.password;
      const confirmedPassword = formGroup.controls.confirmPassword;

      return userPassword.value !== confirmedPassword.value && confirmedPassword.setErrors({ passwordConfirmation: false })
    }
  }

  errorMessage(controlName, formGroup) {
    const controlErrors = formGroup.get(controlName).errors;
    if (controlErrors) return this.errorMessages[Object.keys(controlErrors).toString()];
  }
}
