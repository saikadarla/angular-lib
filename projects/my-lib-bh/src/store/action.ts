import { createAction, props } from '@ngrx/store';
import { FrameWorkList } from '../modals/list.modal';

export const getList = createAction('[list] Get List');
export const getListSuccess = createAction(
  '[list] Get List Success',
  props<{ list: FrameWorkList[] }>()
);
export const getListFailure = createAction(
  '[list] Get List Failure',
  props<{ error: string | null }>()
);
