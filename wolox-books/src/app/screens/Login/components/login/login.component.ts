import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['']
    });
  }

  errorMessage(controlName) {
    if (this.loginForm.get(controlName).errors) {
      if (this.loginForm.get(controlName).errors.required) {
        return 'This field is required';
      } else if (this.loginForm.get(controlName).errors.email) {
        return 'Invalid email format';
      } else if (this.loginForm.get(controlName).errors.pattern) {
        return 'Must have at least one number and one capital letter';
      } else if (!this.loginForm.get(controlName).errors.passwordConfirmation) {
        return 'The passwords must match';
      }
    }
  }

  onSubmit() {
    console.log('works');
  }
}
