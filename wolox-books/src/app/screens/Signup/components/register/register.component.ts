import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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
    const user = new User(this.registerForm.value);
    this.userService.createUser(user.paramsParser()).subscribe(
      data => console.log(data),
      error => console.error(error.message)
    );
    this.registerForm.reset();
  }
}
