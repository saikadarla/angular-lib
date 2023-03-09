import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ListActions from './action';
import { GetListService } from 'projects/my-lib-bh/src/lib';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class listEffects {

  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.getList),
      mergeMap(() => {
        return this.getListService.getTechnologyList().pipe(
          map((list) => ListActions.getListSuccess({ list })),
          catchError((error) => {
            return of(ListActions.getListFailure({ error: error.message }));
          })
        );
      })
    )
  );
  constructor(private actions$: Actions, private getListService: GetListService) {
    console.log(this, 'called with')
  }
}
