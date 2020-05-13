import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { RegisterValidator } from 'app/validators/register-validator';
import * as Constants from 'app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validator: RegisterValidator = new RegisterValidator();
  routerLinks = Constants.routerLinks;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.loginUser(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('accessToken', res.headers.get('access-token'));
        localStorage.setItem('client', res.headers.get('client'));
        localStorage.setItem('uid', res.headers.get('uid'));
        this.router.navigate(['/home']);
      },
      error => console.error(error.message)
    );
  }
}
