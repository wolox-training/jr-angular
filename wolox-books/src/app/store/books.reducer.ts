import { Action } from '@ngrx/store'
import { Book } from 'app/models/book'
import * as BookActions from './books.actions'

export function reducer(state = [], action: BookActions.Actions) {
  switch(action.type) {
    case BookActions.ADD_BOOK:
      return [...state, action.payload];

    case BookActions.REMOVE_BOOK:
      const shoppingCart = [ ...state ];
      shoppingCart.splice(action.payload, 1);
      return shoppingCart;

    default:
      return state;
  }
}
