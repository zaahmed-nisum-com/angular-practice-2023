import { Action, createAction, props } from '@ngrx/store';
import { Checkout } from '../checkout';

export const addItemToCheckout = createAction(
  '[Checkout Component] Add Item',
  (payload: any = {}) => payload
);
export const removeItemToCheckout = createAction(
  '[Checkout Component] Remove Item',
  (payload: any = {}) => payload
);
