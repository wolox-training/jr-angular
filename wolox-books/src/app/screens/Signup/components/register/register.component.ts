import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterValidator } from 'app/validators/register-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerValidator: RegisterValidator = new RegisterValidator();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [''],
      lastName: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required,Validators.pattern(this.registerValidator.passwordRegexPattern)])],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.registerValidator.passwordConfirmation()
    });
  }

  onSubmit() {
    console.log({ user: this.registerForm.value });
    this.registerForm.reset();
  }
}
