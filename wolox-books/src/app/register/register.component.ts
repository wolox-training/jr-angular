import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).*$')])],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.passwordConfirmation('password', 'confirmPassword')
    });
  }

  passwordConfirmation = (password, confirmPassword) => {
    return formGroup => {
      const userPassword = formGroup.get(password)
      const confirmedPassword = formGroup.get(confirmPassword);

      return userPassword.value !== confirmedPassword.value && confirmedPassword.setErrors({ passwordConfirmation: false })
    }
  }

  errorMessage = controlName => {
    if (this.registerForm.get(controlName).errors) {
      if (this.registerForm.get(controlName).errors.required) {
        return 'This field is required';
      } else if (this.registerForm.get(controlName).errors.email) {
        return 'Invalid email format';
      } else if (this.registerForm.get(controlName).errors.pattern) {
        return 'Must have at least one number and one capital letter';
      } else if (!this.registerForm.get(controlName).errors.passwordConfirmation) {
        return 'The passwords must match';
      }
    }
  }

  onSubmit = () => {
    console.log({ user: this.registerForm.value });
    this.registerForm.reset();
  }
}
