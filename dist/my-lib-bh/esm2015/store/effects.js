import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import * as ListActions from './action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "projects/my-lib-bh/src/lib";
export class listEffects {
    constructor(actions$, getListService) {
        this.actions$ = actions$;
        this.getListService = getListService;
        this.getList$ = createEffect(() => this.actions$.pipe(ofType(ListActions.getList), mergeMap(() => {
            return this.getListService.getTechnologyList().pipe(map((list) => ListActions.getListSuccess({ list })), catchError((error) => {
                return of(ListActions.getListFailure({ error: error.message }));
            }));
        })));
        console.log(this, 'called with');
    }
}
listEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: listEffects, deps: [{ token: i1.Actions }, { token: i2.GetListService }], target: i0.ɵɵFactoryTarget.Injectable });
listEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: listEffects });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: listEffects, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.GetListService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi1iaC9zcmMvc3RvcmUvZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQVcsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sS0FBSyxXQUFXLE1BQU0sVUFBVSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHMUIsTUFBTSxPQUFPLFdBQVc7SUFldEIsWUFBb0IsUUFBaUIsRUFBVSxjQUE4QjtRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYjdFLGFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUMzQixRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ25ELFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FBQztRQUVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7O3lHQWpCVSxXQUFXOzZHQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBMaXN0QWN0aW9ucyBmcm9tICcuL2FjdGlvbic7XG5pbXBvcnQgeyBHZXRMaXN0U2VydmljZSB9IGZyb20gJ3Byb2plY3RzL215LWxpYi1iaC9zcmMvbGliJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgbGlzdEVmZmVjdHMge1xuXG4gIGdldExpc3QkID0gY3JlYXRlRWZmZWN0KCgpID0+XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgb2ZUeXBlKExpc3RBY3Rpb25zLmdldExpc3QpLFxuICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMaXN0U2VydmljZS5nZXRUZWNobm9sb2d5TGlzdCgpLnBpcGUoXG4gICAgICAgICAgbWFwKChsaXN0KSA9PiBMaXN0QWN0aW9ucy5nZXRMaXN0U3VjY2Vzcyh7IGxpc3QgfSkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YoTGlzdEFjdGlvbnMuZ2V0TGlzdEZhaWx1cmUoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIGdldExpc3RTZXJ2aWNlOiBHZXRMaXN0U2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMsICdjYWxsZWQgd2l0aCcpXG4gIH1cbn1cbiJdfQ==