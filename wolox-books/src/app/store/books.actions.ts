import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from 'app/models/book'

export const ADD_BOOK = 'Add a book to the shopping cart';
export const REMOVE_BOOK = 'Remove a book from the shopping cart';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;

  constructor(public payload: number) {}
}

export type Actions = AddBook | RemoveBook
