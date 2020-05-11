import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './screens/Signup/components/register/register.component';
import { LoginComponent } from './screens/Login/components/login/login.component';
import { BooksListComponent } from './screens/BooksList/components/books-list/books-list.component';
import { NavbarComponent } from './screens/BooksList/components/navbar/navbar.component';
import { BookItemComponent } from './screens/BooksList/components/book-item/book-item.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BooksListComponent,
    NavbarComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, UnauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
