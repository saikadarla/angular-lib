import { createReducer, on } from '@ngrx/store';
import { listStateInterface } from '../modals/list.modal';
import * as listActions from './action';

export const initialState: listStateInterface = {
  isLoading: false,
  list: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(listActions.getList, (state) => ({ ...state, isLoading: true })),
  on(listActions.getListSuccess, (state, action) => ({ ...state, isLoading: false, list:action.list })),
  on(listActions.getListFailure, (state, action) => ({ ...state, isLoading: true, error: action.error }))
);
