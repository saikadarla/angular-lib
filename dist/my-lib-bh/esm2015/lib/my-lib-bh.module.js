import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib-bh.component';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { reducers } from 'projects/my-lib-bh/src/store/reducers';
import { reducers } from 'projects/my-lib-bh/src/lib';
// import { listEffects } from 'projects/my-lib-bh/src/store/effects';
import { listEffects } from 'projects/my-lib-bh/src/lib';
// import { GetListService } from 'projects/my-lib-bh/src/services/get-list.service';
import { GetListService } from 'projects/my-lib-bh/src/lib';
import { A11yModule } from '@angular/cdk/a11y';
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
        MatProgressSpinnerModule,
        A11yModule
        // MyLibModule
    ], exports: [MyLibComponent] });
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
            A11yModule
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
                        A11yModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLWJoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi1iaC9zcmMvbGliL215LWxpYi1iaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLG9FQUFvRTtBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsc0VBQXNFO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxxRkFBcUY7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQTs7OztBQUs1QyxjQUFjO0FBQ2Qsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixPQUFPO0FBQ1AsZUFBZTtBQUNmLE9BQU87QUFDUCxlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCLE1BQU07QUFDTixLQUFLO0FBQ0wsK0JBQStCO0FBd0IvQixNQUFNLE9BQU8sV0FBVzs7eUdBQVgsV0FBVzswR0FBWCxXQUFXLGlCQUhQLGNBQWMsYUFsQm5CLFlBQVksa0RBQ3RCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsVUFBVTtRQUNWLGNBQWM7aUJBU0osY0FBYzswR0FFYixXQUFXLGFBVFg7UUFDVDtZQUNBLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUM5QjtRQUNELGNBQWM7S0FBQyxZQWpCSixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekcsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4QixVQUFVO1lBQ1YsY0FBYztTQUNmOzRGQVVZLFdBQVc7a0JBdEJ2QixRQUFRO21CQUFFO29CQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3pHLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixVQUFVO3dCQUNWLGNBQWM7cUJBQ2Y7b0JBQ0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNBLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7eUJBQzlCO3dCQUNELGNBQWM7cUJBQUM7b0JBQ2IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE15TGliQ29tcG9uZW50IH0gZnJvbSAnLi9teS1saWItYmguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlLCBNQVRfUkFESU9fREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbi8vIGltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSAncHJvamVjdHMvbXktbGliLWJoL3NyYy9zdG9yZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyByZWR1Y2VycyB9IGZyb20gJ3Byb2plY3RzL215LWxpYi1iaC9zcmMvbGliJztcbi8vIGltcG9ydCB7IGxpc3RFZmZlY3RzIH0gZnJvbSAncHJvamVjdHMvbXktbGliLWJoL3NyYy9zdG9yZS9lZmZlY3RzJztcbmltcG9ydCB7IGxpc3RFZmZlY3RzIH0gZnJvbSAncHJvamVjdHMvbXktbGliLWJoL3NyYy9saWInO1xuLy8gaW1wb3J0IHsgR2V0TGlzdFNlcnZpY2UgfSBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL3NlcnZpY2VzL2dldC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgR2V0TGlzdFNlcnZpY2UgfSBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL2xpYic7XG5pbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5J1xuXG5cblxuXG4vLyBATmdNb2R1bGUoe1xuLy8gICBkZWNsYXJhdGlvbnM6IFtcbi8vICAgICBNeUxpYkNvbXBvbmVudFxuLy8gICBdLFxuLy8gICBpbXBvcnRzOiBbXG4vLyAgIF0sXG4vLyAgIGV4cG9ydHM6IFtcbi8vICAgICBNeUxpYkNvbXBvbmVudFxuLy8gICBdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIE15TGliTW9kdWxlIHsgfVxuXG5ATmdNb2R1bGUgKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnbGlzdCcsIHJlZHVjZXJzKSwgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtsaXN0RWZmZWN0c10pLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgSHR0cENsaWVudE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIEExMXlNb2R1bGVcbiAgLy8gTXlMaWJNb2R1bGVcbl0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICBwcm92aWRlOiBNQVRfUkFESU9fREVGQVVMVF9PUFRJT05TLFxuICAgIHVzZVZhbHVlOiB7IGNvbG9yOiAnd2FybicgfSxcbn0sXG5HZXRMaXN0U2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW015TGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7IH1cbiJdfQ==