import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './screens/Signup/components/auth/auth.component';
import { RegisterComponent } from './screens/Signup/components/register/register.component';
import { ButtonComponent } from './components/Button/button.component';
import { LoginComponent } from './screens/Login/components/login/login.component';
import { BooksListComponent } from './screens/BooksList/components/books-list/books-list.component';
import { NavbarComponent } from './screens/BooksList/components/navbar/navbar.component';
import { BookItemComponent } from './screens/BooksList/components/book-item/book-item.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FilterBooksPipe } from './pipes/filter-books.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    ButtonComponent,
    LoginComponent,
    BooksListComponent,
    NavbarComponent,
    BookItemComponent,
    FilterBooksPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, UnauthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
