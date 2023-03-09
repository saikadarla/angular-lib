import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as ListActions from 'projects/my-lib/src/store/action';
import { select } from '@ngrx/store';
import { errorSelector, isLoadingSelector, listSelector } from 'projects/my-lib/src/store/selectors';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/snack-bar";
import * as i3 from "@angular/router";
import * as i4 from "@ngrx/store";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/form-field";
export class MyLibComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQWUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFPcEUsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsTUFBTSxFQUFTLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7Ozs7QUE0Q3JHLE1BQU0sT0FBTyxjQUFjO0lBWXpCO0lBQ0Usd0NBQXdDO0lBQ2hDLFdBQXdCLEVBQ3hCLFFBQXFCLEVBQ3JCLEtBQXFCLEVBQ3JCLEtBQStCO1FBSC9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFmbEMsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFHcEMsZ0JBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNuQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBYUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUgsUUFBUTtRQUNOLGdFQUFnRTtRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELE9BQU8sQ0FBQyxLQUFVLEVBQUUsR0FBUTtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVUsRUFBRSxHQUFRO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFO2dCQUNsRixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7NEdBOUNVLGNBQWM7Z0dBQWQsY0FBYyxrREF4Q2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUOzRGQUtVLGNBQWM7a0JBMUMxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUO29CQUNELGVBQWU7b0JBQ2YsS0FBSztvQkFDTCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcHBTdGF0ZUludGVyZmFjZSwgRnJhbWVXb3JrTGlzdCB9IGZyb20gJ3Byb2plY3RzL215LWxpYi9zcmMvbW9kYWxzL2xpc3QubW9kYWwnO1xuLy8gaW1wb3J0IHsgR2V0TGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9nZXQtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgTGlzdEFjdGlvbnMgZnJvbSAncHJvamVjdHMvbXktbGliL3NyYy9zdG9yZS9hY3Rpb24nO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGVycm9yU2VsZWN0b3IsIGlzTG9hZGluZ1NlbGVjdG9yLCBsaXN0U2VsZWN0b3IgfSBmcm9tICdwcm9qZWN0cy9teS1saWIvc3JjL3N0b3JlL3NlbGVjdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teS1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTG9hZGluZyQgfCBhc3luYyBhcyBMb2FkaW5nXCI+XG5cdDxtYXQtc3Bpbm5lciAqbmdJZj1cIkxvYWRpbmdcIj48L21hdC1zcGlubmVyPlxuPC9uZy1jb250YWluZXI+XG48Zm9ybSBbZm9ybUdyb3VwXT1cInByb2ZpbGVGb3JtXCIgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiID5cdFxuXHQ8ZmllbGRzZXQgY2xhc3M9XCJjb250YWluZXJcIiByb2xlPVwicmFkaW9ncm91cFwiPlxuXHRcdDxtYXQtcmFkaW8tZ3JvdXBcblx0XHQgIGFyaWEtbGFiZWw9XCJTZWxlY3QgYW4gb3B0aW9uXCJcblx0XHQgIGZvcm1Db250cm9sTmFtZT1cInRlY2hub2xvZ3lcIlxuXHRcdCAgY2xhc3M9XCJyYWRpby1ncm91cFwiXG5cdFx0ICBhcmlhLWxhYmVsbGVkYnk9XCJyYWRpby1ncm91cC1sYWJlbFwiXG5cdFx0ICB0YWJJbmRleD1cIi0xXCJcblx0XHQgIHJlcXVpcmVkXG5cdFx0PlxuXHRcdCAgPG1hdC1yYWRpby1idXR0b25cblx0XHRcdCpuZ0Zvcj1cImxldCBmcmFtZVdvcmsgb2YgdGVjaG5vbG9neUxpc3QkIHwgYXN5bmM7IGxldCBpID0gaW5kZXhcIlxuXHRcdFx0dmFsdWU9XCJ7eyBmcmFtZVdvcmsubmFtZSB9fVwiXG5cdFx0XHRbbmdDbGFzc109XCJmcmFtZVdvcmsubmFtZSA9PT0gc2VsZWN0ZWRWYWx1ZSA/ICdsaWdodC1ncmV5LWJnJyA6ICdncmVlbidcIlxuXHRcdFx0Y2xhc3M9XCJyYWRpby1idXR0b25cIlxuXHRcdFx0KGNsaWNrKT1cImNoZWNrZWQoJGV2ZW50LCBmcmFtZVdvcmsubmFtZSlcIlxuXHRcdFx0bmdDbGFzcz1cIlwiXG5cdFx0XHRyb2xlPVwiUmFkaW9cIlxuXHRcdFx0KGNoYW5nZSk9XCJyYWRpb0NoYW5nZSgkZXZlbnQsIGZyYW1lV29yay5uYW1lKVwiXG5cdFx0ICA+XG5cdFx0XHR7eyBmcmFtZVdvcmsubmFtZSB9fVxuXHRcdCAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuXHRcdCAgIDxtYXQtZXJyb3Jcblx0XHRcdCAqbmdJZj1cInByb2ZpbGVGb3JtLmdldCgndGVjaG5vbG9neScpPy5pbnZhbGlkXCJcblx0XHQgID5SZXF1aXJlZDwvbWF0LWVycm9yPlxuXHRcdCAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC12YWx1ZVwiPiBZb3UgU2VsZWN0ZWQ6IHt7IHNlbGVjdGVkVmFsdWUgfX0gPC9zcGFuPlxuXHRcdDwvbWF0LXJhZGlvLWdyb3VwPlxuXHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJzdWJtaXRcIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiIC8+XG5cdCAgPC9maWVsZHNldD5cblxuPC9mb3JtPlxuICBgLFxuICAvLyBzdHlsZXM6IFsgJydcbiAgLy8gXSxcbiAgc3R5bGVVcmxzOiBbJy4vbXktbGliLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBzZWxlY3RlZFZhbHVlOiBzdHJpbmcgPSAnTkEnO1xuICBwdWJsaWMgcmFkQnRuczogRm9ybUdyb3VwO1xuXG4gIHByb2ZpbGVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgdGVjaG5vbG9neTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gIH0pO1xuICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBlcnJvciQ6IE9ic2VydmFibGU8c3RyaW5nIHwgbnVsbD47XG4gIHRlY2hub2xvZ3lMaXN0JDogT2JzZXJ2YWJsZTxGcmFtZVdvcmtMaXN0W10+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSByYWRpb1NlcnZpY2U6IEdldExpc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlSW50ZXJmYWNlPlxuICAgICkge1xuXG4gICAgICB0aGlzLmlzTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGlzTG9hZGluZ1NlbGVjdG9yKSk7XG4gICAgICB0aGlzLmVycm9yJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZXJyb3JTZWxlY3RvcikpO1xuICAgICAgdGhpcy50ZWNobm9sb2d5TGlzdCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGxpc3RTZWxlY3RvcikpO1xuICAgIH0gIFxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMudGVjaG5vbG9neUxpc3QkID0gdGhpcy5yYWRpb1NlcnZpY2UuZ2V0VGVjaG5vbG9neUxpc3QoKTtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gV29ybGQ6ICcsIHRoaXMucm91dGUpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goTGlzdEFjdGlvbnMuZ2V0TGlzdCgpKTtcbiAgfVxuXG5cbiAgY2hlY2tlZChldmVudDogYW55LCB2YWw6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbDtcbiAgfVxuXG4gIHJhZGlvQ2hhbmdlKGV2ZW50OiBhbnksIHZhbDogYW55KSB7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsO1xuICB9XG5cbiAgc2F2ZUZvcm0oKSB7XG4gICAgaWYgKHRoaXMucHJvZmlsZUZvcm0udmFsaWQpIHsgXG4gICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1lvdSBIYXZlIFNlbGVjdGVkOiAnICsgdGhpcy5wcm9maWxlRm9ybS52YWx1ZS50ZWNobm9sb2d5LCAnT0snLCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG59XG4iXX0=