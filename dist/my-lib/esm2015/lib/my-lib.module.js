import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { reducers } from 'projects/my-lib/src/store/reducers';
import { listEffects } from 'projects/my-lib/src/store/effects';
import { GetListService } from 'projects/my-lib/src/services/get-list.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
// @NgModule({
//   declarations: [
//     MyLibComponent
//   ],
//   imports: [
//   ],
//   exports: [
//     MyLibComponent
//   ]
// })
// export class MyLibModule { }
export class MyLibModule {
}
MyLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, declarations: [MyLibComponent], imports: [CommonModule, i1.StoreFeatureModule, i2.EffectsFeatureModule, MatRadioModule,
        HttpClientModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatProgressSpinnerModule], exports: [MyLibComponent] });
MyLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, providers: [
        {
            provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'warn' },
        },
        GetListService
    ], imports: [[CommonModule, StoreModule.forFeature('list', reducers), EffectsModule.forFeature([listEffects]),
            MatRadioModule,
            HttpClientModule,
            MatRadioModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSnackBarModule,
            MatProgressSpinnerModule,
            // MyLibModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, StoreModule.forFeature('list', reducers), EffectsModule.forFeature([listEffects]),
                        MatRadioModule,
                        HttpClientModule,
                        MatRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSnackBarModule,
                        MatProgressSpinnerModule,
                        // MyLibModule
                    ],
                    providers: [
                        {
                            provide: MAT_RADIO_DEFAULT_OPTIONS,
                            useValue: { color: 'warn' },
                        },
                        GetListService
                    ],
                    declarations: [MyLibComponent],
                    exports: [MyLibComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBSy9FLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLE9BQU87QUFDUCxlQUFlO0FBQ2YsT0FBTztBQUNQLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsTUFBTTtBQUNOLEtBQUs7QUFDTCwrQkFBK0I7QUF3Qi9CLE1BQU0sT0FBTyxXQUFXOzt5R0FBWCxXQUFXOzBHQUFYLFdBQVcsaUJBSFAsY0FBYyxhQWpCbkIsWUFBWSxrREFDdEIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHdCQUF3QixhQVVkLGNBQWM7MEdBRWIsV0FBVyxhQVRYO1FBQ1Q7WUFDQSxPQUFPLEVBQUUseUJBQXlCO1lBQ2xDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7U0FDOUI7UUFDRCxjQUFjO0tBQUMsWUFoQkosQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pHLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQix3QkFBd0I7WUFDeEIsY0FBYztTQUNmOzRGQVVZLFdBQVc7a0JBckJ2QixRQUFRO21CQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3pHLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixjQUFjO3FCQUNmO29CQUNDLFNBQVMsRUFBRTt3QkFDVDs0QkFDQSxPQUFPLEVBQUUseUJBQXlCOzRCQUNsQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO3lCQUM5Qjt3QkFDRCxjQUFjO3FCQUFDO29CQUNiLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeUxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXktbGliLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSwgTUFUX1JBRElPX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJ1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyByZWR1Y2VycyB9IGZyb20gJ3Byb2plY3RzL215LWxpYi9zcmMvc3RvcmUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgbGlzdEVmZmVjdHMgfSBmcm9tICdwcm9qZWN0cy9teS1saWIvc3JjL3N0b3JlL2VmZmVjdHMnO1xuaW1wb3J0IHsgR2V0TGlzdFNlcnZpY2UgfSBmcm9tICdwcm9qZWN0cy9teS1saWIvc3JjL3NlcnZpY2VzL2dldC1saXN0LnNlcnZpY2UnO1xuXG5cblxuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBkZWNsYXJhdGlvbnM6IFtcbi8vICAgICBNeUxpYkNvbXBvbmVudFxuLy8gICBdLFxuLy8gICBpbXBvcnRzOiBbXG4vLyAgIF0sXG4vLyAgIGV4cG9ydHM6IFtcbi8vICAgICBNeUxpYkNvbXBvbmVudFxuLy8gICBdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIE15TGliTW9kdWxlIHsgfVxuXG5cbkBOZ01vZHVsZSAoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdsaXN0JywgcmVkdWNlcnMpLCBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW2xpc3RFZmZlY3RzXSksXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBIdHRwQ2xpZW50TW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgLy8gTXlMaWJNb2R1bGVcbl0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICBwcm92aWRlOiBNQVRfUkFESU9fREVGQVVMVF9PUFRJT05TLFxuICAgIHVzZVZhbHVlOiB7IGNvbG9yOiAnd2FybicgfSxcbn0sXG5HZXRMaXN0U2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW015TGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7IH1cbiJdfQ==