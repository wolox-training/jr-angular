import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/Signup/components/register/register.component';
import { LoginComponent } from './screens/Login/components/login/login.component';
import { BooksListComponent } from './screens/BooksList/components/books-list/books-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BooksListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
