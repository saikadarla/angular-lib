import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { AppStateInterface, FrameWorkList } from 'projects/my-lib-bh/src/lib';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from '@ngrx/store';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
export declare class MyLibComponent implements OnInit {
    private formBuilder;
    private snackBar;
    private store;
    private liveAnnouncer;
    selectedValue: string;
    radBtns: FormGroup;
    profileForm: FormGroup;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    technologyList$: Observable<FrameWorkList[]>;
    constructor(formBuilder: FormBuilder, snackBar: MatSnackBar, store: Store<AppStateInterface>, liveAnnouncer: LiveAnnouncer);
    ngOnInit(): void;
    checked(event: any, val: any): void;
    radioChange(event: any, val: any): void;
    saveForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyLibComponent, "lib-my-lib-bh", never, {}, {}, never, never>;
}
