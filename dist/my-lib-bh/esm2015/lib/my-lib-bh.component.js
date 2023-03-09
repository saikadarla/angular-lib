import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// import * as ListActions from 'projects/my-lib-bh/src/store/action';
import * as ListActions from 'projects/my-lib-bh/src/lib';
import { select } from '@ngrx/store';
// import { errorSelector, isLoadingSelector, listSelector } from 'projects/my-lib-bh/src/store/selectors';
import { errorSelector, isLoadingSelector, listSelector } from 'projects/my-lib-bh/src/lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/snack-bar";
import * as i3 from "@ngrx/store";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/form-field";
export class MyLibComponent {
    constructor(formBuilder, snackBar, store, liveAnnouncer) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.store = store;
        this.liveAnnouncer = liveAnnouncer;
        this.selectedValue = 'NA';
        this.profileForm = this.formBuilder.group({
            technology: ['', [Validators.required]]
        });
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.technologyList$ = this.store.pipe(select(listSelector));
    }
    ngOnInit() {
        const t = this.liveAnnouncer.announce('list is displayed').then((a) => console.log('inside: ', a));
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
MyLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibComponent, deps: [{ token: i1.FormBuilder }, { token: i2.MatSnackBar }, { token: i3.Store }, { token: i4.LiveAnnouncer }], target: i0.ɵɵFactoryTarget.Component });
MyLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MyLibComponent, selector: "lib-my-lib-bh", ngImport: i0, template: `
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
			aria-live="polite"
			aria-atomic="true"
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
                    selector: 'lib-my-lib-bh',
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
			aria-live="polite"
			aria-atomic="true"
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
                    styleUrls: ['./my-lib-bh.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.MatSnackBar }, { type: i3.Store }, { type: i4.LiveAnnouncer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLWJoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi1iaC9zcmMvbGliL215LWxpYi1iaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQWUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFNcEUsc0VBQXNFO0FBQ3RFLE9BQU8sS0FBSyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBUyxNQUFNLGFBQWEsQ0FBQztBQUM1QywyR0FBMkc7QUFDM0csT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7OztBQThDNUYsTUFBTSxPQUFPLGNBQWM7SUFZM0IsWUFDUSxXQUF3QixFQUN4QixRQUFxQixFQUNyQixLQUErQixFQUMvQixhQUE0QjtRQUg1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZDdCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBR3BDLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQVdGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFFBQVE7UUFDUixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVUsRUFBRSxHQUFRO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBVSxFQUFFLEdBQVE7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUU7Z0JBQ3BGLFFBQVEsRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDO1NBQ0g7SUFDRCxDQUFDOzs0R0ExQ1ksY0FBYztnR0FBZCxjQUFjLHFEQXpDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9DVDs0RkFLWSxjQUFjO2tCQTNDMUIsU0FBUzttQkFBQztvQkFDWCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQ1Q7b0JBQ0QsZUFBZTtvQkFDZixLQUFLO29CQUNMLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIlx0aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXHRpbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXHRpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcblx0Ly8gaW1wb3J0IHsgQXBwU3RhdGVJbnRlcmZhY2UsIEZyYW1lV29ya0xpc3QgfSBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL21vZGFscy9saXN0Lm1vZGFsJztcblx0aW1wb3J0IHsgQXBwU3RhdGVJbnRlcmZhY2UsIEZyYW1lV29ya0xpc3QgfSBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL2xpYic7XG5cdFxuXHRpbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXJcIjtcblx0Ly8gaW1wb3J0ICogYXMgTGlzdEFjdGlvbnMgZnJvbSAncHJvamVjdHMvbXktbGliLWJoL3NyYy9zdG9yZS9hY3Rpb24nO1xuXHRpbXBvcnQgKiBhcyBMaXN0QWN0aW9ucyBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL2xpYic7XG5cdGltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cdC8vIGltcG9ydCB7IGVycm9yU2VsZWN0b3IsIGlzTG9hZGluZ1NlbGVjdG9yLCBsaXN0U2VsZWN0b3IgfSBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL3N0b3JlL3NlbGVjdG9ycyc7XG5cdGltcG9ydCB7IGVycm9yU2VsZWN0b3IsIGlzTG9hZGluZ1NlbGVjdG9yLCBsaXN0U2VsZWN0b3IgfSBmcm9tICdwcm9qZWN0cy9teS1saWItYmgvc3JjL2xpYic7XG5cdGltcG9ydCB7IExpdmVBbm5vdW5jZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cblx0QENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbGliLW15LWxpYi1iaCcsXG5cdHRlbXBsYXRlOiBgXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xvYWRpbmckIHwgYXN5bmMgYXMgTG9hZGluZ1wiPlxuXHQ8bWF0LXNwaW5uZXIgKm5nSWY9XCJMb2FkaW5nXCI+PC9tYXQtc3Bpbm5lcj5cblx0PC9uZy1jb250YWluZXI+XG5cdDxmb3JtIFtmb3JtR3JvdXBdPVwicHJvZmlsZUZvcm1cIiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCIgPlx0XG5cdDxmaWVsZHNldCBjbGFzcz1cImNvbnRhaW5lclwiIHJvbGU9XCJyYWRpb2dyb3VwXCI+XG5cdFx0PG1hdC1yYWRpby1ncm91cFxuXHRcdFx0YXJpYS1sYWJlbD1cIlNlbGVjdCBhbiBvcHRpb25cIlxuXHRcdFx0Zm9ybUNvbnRyb2xOYW1lPVwidGVjaG5vbG9neVwiXG5cdFx0XHRjbGFzcz1cInJhZGlvLWdyb3VwXCJcblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cInJhZGlvLWdyb3VwLWxhYmVsXCJcblx0XHRcdHRhYkluZGV4PVwiLTFcIlxuXHRcdFx0cmVxdWlyZWRcblx0XHQ+XG5cdFx0PG1hdC1yYWRpby1idXR0b25cblx0XHRcdCpuZ0Zvcj1cImxldCBmcmFtZVdvcmsgb2YgdGVjaG5vbG9neUxpc3QkIHwgYXN5bmM7IGxldCBpID0gaW5kZXhcIlxuXHRcdFx0dmFsdWU9XCJ7eyBmcmFtZVdvcmsubmFtZSB9fVwiXG5cdFx0XHRbbmdDbGFzc109XCJmcmFtZVdvcmsubmFtZSA9PT0gc2VsZWN0ZWRWYWx1ZSA/ICdsaWdodC1ncmV5LWJnJyA6ICdncmVlbidcIlxuXHRcdFx0Y2xhc3M9XCJyYWRpby1idXR0b25cIlxuXHRcdFx0KGNsaWNrKT1cImNoZWNrZWQoJGV2ZW50LCBmcmFtZVdvcmsubmFtZSlcIlxuXHRcdFx0bmdDbGFzcz1cIlwiXG5cdFx0XHRhcmlhLWxpdmU9XCJwb2xpdGVcIlxuXHRcdFx0YXJpYS1hdG9taWM9XCJ0cnVlXCJcblx0XHRcdHJvbGU9XCJSYWRpb1wiXG5cdFx0XHQoY2hhbmdlKT1cInJhZGlvQ2hhbmdlKCRldmVudCwgZnJhbWVXb3JrLm5hbWUpXCJcblx0XHRcdD5cblx0XHRcdHt7IGZyYW1lV29yay5uYW1lIH19XG5cdFx0PC9tYXQtcmFkaW8tYnV0dG9uPlxuXHRcdDxtYXQtZXJyb3Jcblx0XHRcdFx0Km5nSWY9XCJwcm9maWxlRm9ybS5nZXQoJ3RlY2hub2xvZ3knKT8uaW52YWxpZFwiXG5cdFx0PlJlcXVpcmVkPC9tYXQtZXJyb3I+XG5cdFx0PHNwYW4gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiPiBZb3UgU2VsZWN0ZWQ6IHt7IHNlbGVjdGVkVmFsdWUgfX0gPC9zcGFuPlxuXHRcdDwvbWF0LXJhZGlvLWdyb3VwPlxuXHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJzdWJtaXRcIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiIC8+XG5cdFx0PC9maWVsZHNldD5cblx0PC9mb3JtPlxuXHRgLFxuXHQvLyBzdHlsZXM6IFsgJydcblx0Ly8gXSxcblx0c3R5bGVVcmxzOiBbJy4vbXktbGliLWJoLmNvbXBvbmVudC5zY3NzJ11cblx0fSlcblx0ZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwdWJsaWMgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nID0gJ05BJztcblx0cHVibGljIHJhZEJ0bnM6IEZvcm1Hcm91cDtcblxuXHRwcm9maWxlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHR0ZWNobm9sb2d5OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cblx0fSk7XG5cdGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdGVycm9yJDogT2JzZXJ2YWJsZTxzdHJpbmcgfCBudWxsPjtcblx0dGVjaG5vbG9neUxpc3QkOiBPYnNlcnZhYmxlPEZyYW1lV29ya0xpc3RbXT5cblxuXHRjb25zdHJ1Y3Rvcihcblx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuXHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZUludGVyZmFjZT4sXG5cdHByaXZhdGUgbGl2ZUFubm91bmNlcjogTGl2ZUFubm91bmNlclxuXHQpIHtcblx0XHR0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGlzTG9hZGluZ1NlbGVjdG9yKSk7XG5cdFx0dGhpcy5lcnJvciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGVycm9yU2VsZWN0b3IpKTtcblx0XHR0aGlzLnRlY2hub2xvZ3lMaXN0JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QobGlzdFNlbGVjdG9yKSk7XG5cdH0gIFxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRjb25zdCB0ID0gdGhpcy5saXZlQW5ub3VuY2VyLmFubm91bmNlKCdsaXN0IGlzIGRpc3BsYXllZCcpLnRoZW4oKGEpID0+IGNvbnNvbGUubG9nKCdpbnNpZGU6ICcsIGEpKTtcblx0dGhpcy5zdG9yZS5kaXNwYXRjaChMaXN0QWN0aW9ucy5nZXRMaXN0KCkpO1xuXHR9XG5cblx0Y2hlY2tlZChldmVudDogYW55LCB2YWw6IGFueSkge1xuXHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWw7XG5cdH1cblxuXHRyYWRpb0NoYW5nZShldmVudDogYW55LCB2YWw6IGFueSkge1xuXHR0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWw7XG5cdH1cblxuXHRzYXZlRm9ybSgpIHtcblx0aWYgKHRoaXMucHJvZmlsZUZvcm0udmFsaWQpIHsgXG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKCdZb3UgSGF2ZSBTZWxlY3RlZDogJyArIHRoaXMucHJvZmlsZUZvcm0udmFsdWUudGVjaG5vbG9neSwgJ09LJywge1xuXHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0fSk7XG5cdH1cblx0fVxuXHR9XG4iXX0=