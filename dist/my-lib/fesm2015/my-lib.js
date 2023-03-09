import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as ListActions from 'projects/my-lib/src/store/action';
import * as i4 from '@ngrx/store';
import { select, StoreModule } from '@ngrx/store';
import { isLoadingSelector, errorSelector, listSelector } from 'projects/my-lib/src/store/selectors';
import * as i2 from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i3 from '@angular/router';
import * as i5 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i6 from '@angular/material/radio';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i8 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@ngrx/effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from 'projects/my-lib/src/store/reducers';
import { listEffects } from 'projects/my-lib/src/store/effects';
import { GetListService } from 'projects/my-lib/src/services/get-list.service';

class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibComponent {
    constructor(
    // private radioService: GetListService,
    formBuilder, snackBar, route, store) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.route = route;
        this.store = store;
        this.selectedValue = 'NA';
        this.profileForm = this.formBuilder.group({
            technology: ['', [Validators.required]]
        });
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.technologyList$ = this.store.pipe(select(listSelector));
    }
    ngOnInit() {
        // this.technologyList$ = this.radioService.getTechnologyList();
        console.log('hello World: ', this.route);
        this.store.dispatch(ListActions.getList());
    }
    checked(event, val) {
        this.selectedValue = val;
    }
    radioChange(event, val) {
        this.selectedValue = val;
    }
    saveForm() {
        if (this.profileForm.valid) {
            this.snackBar.open('You Have Selected: ' + this.profileForm.value.technology, 'OK', {
                duration: 3000
            });
        }
    }
}
MyLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibComponent, deps: [{ token: i1.FormBuilder }, { token: i2.MatSnackBar }, { token: i3.ActivatedRoute }, { token: i4.Store }], target: i0.ɵɵFactoryTarget.Component });
MyLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MyLibComponent, selector: "lib-my-lib", ngImport: i0, template: `
   <ng-container *ngIf="isLoading$ | async as Loading">
	<mat-spinner *ngIf="Loading"></mat-spinner>
</ng-container>
<form [formGroup]="profileForm" class="form-container" >	
	<fieldset class="container" role="radiogroup">
		<mat-radio-group
		  aria-label="Select an option"
		  formControlName="technology"
		  class="radio-group"
		  aria-labelledby="radio-group-label"
		  tabIndex="-1"
		  required
		>
		  <mat-radio-button
			*ngFor="let frameWork of technologyList$ | async; let i = index"
			value="{{ frameWork.name }}"
			[ngClass]="frameWork.name === selectedValue ? 'light-grey-bg' : 'green'"
			class="radio-button"
			(click)="checked($event, frameWork.name)"
			ngClass=""
			role="Radio"
			(change)="radioChange($event, frameWork.name)"
		  >
			{{ frameWork.name }}
		  </mat-radio-button>
		   <mat-error
			 *ngIf="profileForm.get('technology')?.invalid"
		  >Required</mat-error>
		  <span class="selected-value"> You Selected: {{ selectedValue }} </span>
		</mat-radio-group>
		<input type="button" value="submit" (click)="saveForm()" />
	  </fieldset>

</form>
  `, isInline: true, styles: [".container{width:20%}.radio-group{display:flex;flex-direction:column}.light-grey-bg{background-color:#060d74;color:#dedede}.radio-button{padding:10px;border-bottom:1px solid #dedede}.selected-value{font-size:16px;padding-top:24px}:host ::ng-deep .mat-radio-outer-circle{border-color:#000}\n"], components: [{ type: i5.MatSpinner, selector: "mat-spinner", inputs: ["color"] }, { type: i6.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-lib',
                    template: `
   <ng-container *ngIf="isLoading$ | async as Loading">
	<mat-spinner *ngIf="Loading"></mat-spinner>
</ng-container>
<form [formGroup]="profileForm" class="form-container" >	
	<fieldset class="container" role="radiogroup">
		<mat-radio-group
		  aria-label="Select an option"
		  formControlName="technology"
		  class="radio-group"
		  aria-labelledby="radio-group-label"
		  tabIndex="-1"
		  required
		>
		  <mat-radio-button
			*ngFor="let frameWork of technologyList$ | async; let i = index"
			value="{{ frameWork.name }}"
			[ngClass]="frameWork.name === selectedValue ? 'light-grey-bg' : 'green'"
			class="radio-button"
			(click)="checked($event, frameWork.name)"
			ngClass=""
			role="Radio"
			(change)="radioChange($event, frameWork.name)"
		  >
			{{ frameWork.name }}
		  </mat-radio-button>
		   <mat-error
			 *ngIf="profileForm.get('technology')?.invalid"
		  >Required</mat-error>
		  <span class="selected-value"> You Selected: {{ selectedValue }} </span>
		</mat-radio-group>
		<input type="button" value="submit" (click)="saveForm()" />
	  </fieldset>

</form>
  `,
                    // styles: [ ''
                    // ],
                    styleUrls: ['./my-lib.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.MatSnackBar }, { type: i3.ActivatedRoute }, { type: i4.Store }]; } });

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
class MyLibModule {
}
MyLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, declarations: [MyLibComponent], imports: [CommonModule, i4.StoreFeatureModule, i2$1.EffectsFeatureModule, MatRadioModule,
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

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
