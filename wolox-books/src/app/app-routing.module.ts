import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/Signup/components/register/register.component';
import { LoginComponent } from './screens/Login/components/login/login.component';
import { BooksListComponent } from './screens/BooksList/components/books-list/books-list.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/unauth/login', pathMatch: 'full' },
  {
    path: 'auth',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'books',
        component: BooksListComponent
      }
    ]
  },
  {
    path: 'unauth',
    canActivateChild: [UnauthGuard],
    children: [
      {
        path: 'sign-up',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
