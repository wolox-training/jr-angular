import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';
import { Router } from '@angular/router';
import { RegisterValidator } from 'app/validators/register-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerValidator: RegisterValidator = new RegisterValidator();
  user: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

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
    this.user = this.registerForm.value;
    this.userService.createUser(this.userParser()).subscribe(
      data => {
        console.log(`Success! New user created:\n${JSON.stringify(data)}`);
        this.router.navigate(['/login']);
      },
      error => console.error(error.message)
    );
  }

  userParser() {
    return {
      first_name: this.user.name,
      last_name: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      password_confirmation: this.user.password,
      locale: "en"
    }
  }
}
