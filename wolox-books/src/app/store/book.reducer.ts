import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from './book.actions';

export const initialState = [];

const shoppingCartReducer = createReducer(initialState,
  on(addBook, (state, book) => [...state, book]),
  on(removeBook, (state, removeAction) => {
    const shoppingCart = [ ...state ];
    shoppingCart.splice(removeAction.index, 1);
    return shoppingCart;
  })
);

export function reducer(state, action) {
  return shoppingCartReducer(state, action);
}
