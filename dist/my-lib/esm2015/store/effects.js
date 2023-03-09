import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import * as ListActions from './action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../services/get-list.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvc3RvcmUvZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQVcsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sS0FBSyxXQUFXLE1BQU0sVUFBVSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHMUIsTUFBTSxPQUFPLFdBQVc7SUFldEIsWUFBb0IsUUFBaUIsRUFBVSxjQUE4QjtRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBYjdFLGFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUMzQixRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNqRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ25ELFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FBQztRQUVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7O3lHQWpCVSxXQUFXOzZHQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBMaXN0QWN0aW9ucyBmcm9tICcuL2FjdGlvbic7XG5pbXBvcnQgeyBHZXRMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dldC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBsaXN0RWZmZWN0cyB7XG5cbiAgZ2V0TGlzdCQgPSBjcmVhdGVFZmZlY3QoKCkgPT5cbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGUoTGlzdEFjdGlvbnMuZ2V0TGlzdCksXG4gICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExpc3RTZXJ2aWNlLmdldFRlY2hub2xvZ3lMaXN0KCkucGlwZShcbiAgICAgICAgICBtYXAoKGxpc3QpID0+IExpc3RBY3Rpb25zLmdldExpc3RTdWNjZXNzKHsgbGlzdCB9KSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZihMaXN0QWN0aW9ucy5nZXRMaXN0RmFpbHVyZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApXG4gICk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgZ2V0TGlzdFNlcnZpY2U6IEdldExpc3RTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2codGhpcywgJ2NhbGxlZCB3aXRoJylcbiAgfVxufVxuIl19