import { Action, createAction, props } from '@ngrx/store';
import { OrderHistory } from '../orderHistory';

export const addItemToOrderHistory = createAction(
  '[OrderHistory Component] Add Item',
  (payload: any = {}) => payload
);

