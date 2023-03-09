	import { Component, OnInit } from '@angular/core';

	import { FormBuilder, Validators, FormGroup } from '@angular/forms';
	import { Observable } from 'rxjs/internal/Observable';
	// import { AppStateInterface, FrameWorkList } from 'projects/my-lib-bh/src/modals/list.modal';
	import { AppStateInterface, FrameWorkList } from 'projects/my-lib-bh/src/lib';
	
	import { MatSnackBar } from "@angular/material/snack-bar";
	// import * as ListActions from 'projects/my-lib-bh/src/store/action';
	import * as ListActions from 'projects/my-lib-bh/src/lib';
	import { select, Store } from '@ngrx/store';
	// import { errorSelector, isLoadingSelector, listSelector } from 'projects/my-lib-bh/src/store/selectors';
	import { errorSelector, isLoadingSelector, listSelector } from 'projects/my-lib-bh/src/lib';
	import { LiveAnnouncer } from '@angular/cdk/a11y';

	@Component({
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
	})
	export class MyLibComponent implements OnInit {

	public selectedValue: string = 'NA';
	public radBtns: FormGroup;

	profileForm = this.formBuilder.group({
	technology: ['', [Validators.required]]
	});
	isLoading$: Observable<boolean>;
	error$: Observable<string | null>;
	technologyList$: Observable<FrameWorkList[]>

	constructor(
	private formBuilder: FormBuilder,
	private snackBar: MatSnackBar,
	private store: Store<AppStateInterface>,
	private liveAnnouncer: LiveAnnouncer
	) {
		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.error$ = this.store.pipe(select(errorSelector));
		this.technologyList$ = this.store.pipe(select(listSelector));
	}  

	ngOnInit(): void {
	const t = this.liveAnnouncer.announce('list is displayed').then((a) => console.log('inside: ', a));
	this.store.dispatch(ListActions.getList());
	}

	checked(event: any, val: any) {
	this.selectedValue = val;
	}

	radioChange(event: any, val: any) {
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
