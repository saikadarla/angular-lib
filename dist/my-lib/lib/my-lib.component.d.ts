import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { AppStateInterface, FrameWorkList } from 'projects/my-lib/src/modals/list.modal';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export declare class MyLibComponent implements OnInit {
    private formBuilder;
    private snackBar;
    private route;
    private store;
    selectedValue: string;
    radBtns: FormGroup;
    profileForm: FormGroup;
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    technologyList$: Observable<FrameWorkList[]>;
    constructor(formBuilder: FormBuilder, snackBar: MatSnackBar, route: ActivatedRoute, store: Store<AppStateInterface>);
    ngOnInit(): void;
    checked(event: any, val: any): void;
    radioChange(event: any, val: any): void;
    saveForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyLibComponent, "lib-my-lib", never, {}, {}, never, never>;
}
