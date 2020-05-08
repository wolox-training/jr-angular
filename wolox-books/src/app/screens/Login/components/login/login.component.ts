import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
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
    this.userService.loginUser(this.loginForm.value).subscribe(
      res => {
        const headers = {
          accessToken: res.headers.get('access-token'),
          client: res.headers.get('client'),
          uid: res.headers.get('uid')
        };
        localStorage.setItem('accessToken', res.headers.get('access-token'));
        localStorage.setItem('client', res.headers.get('client'));
        localStorage.setItem('uid', res.headers.get('uid'));
        this.router.navigate(['/auth/books']);
      },
      error => console.error(error.message)
    );
  }
}
