import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';
import { RegisterValidator } from 'app/validators/register-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerValidator: RegisterValidator = new RegisterValidator();

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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

  onSubmit = () => {
    const user = new User(this.registerForm.value);
    this.userService.createUser(user.paramsParser()).subscribe(
      data => {
        console.log(`Success! New user created:\n${JSON.stringify(data)}`);
        this.registerForm.reset();
      },
      error => console.error(error.message)
    );
  }
}
