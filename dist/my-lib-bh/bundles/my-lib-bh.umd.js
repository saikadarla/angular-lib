(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('projects/my-lib-bh/src/lib'), require('@ngrx/store'), require('@angular/material/snack-bar'), require('@angular/cdk/a11y'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/common'), require('@angular/material/form-field'), require('@ngrx/effects'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('my-lib-bh', ['exports', '@angular/core', '@angular/forms', 'projects/my-lib-bh/src/lib', '@ngrx/store', '@angular/material/snack-bar', '@angular/cdk/a11y', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/common', '@angular/material/form-field', '@ngrx/effects', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["my-lib-bh"] = {}, global.ng.core, global.ng.forms, global.ListActions, global.i3, global.ng.material.snackBar, global.ng.cdk.a11y, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.common, global.ng.material.formField, global.i2$1, global.ng.common.http));
})(this, (function (exports, i0, i1, ListActions, i3, i2, i4, i5, i6, i7, i8, i2$1, http) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var ListActions__namespace = /*#__PURE__*/_interopNamespace(ListActions);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);

    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        return MyLibService;
    }());
    MyLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MyLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent(formBuilder, snackBar, store, liveAnnouncer) {
            this.formBuilder = formBuilder;
            this.snackBar = snackBar;
            this.store = store;
            this.liveAnnouncer = liveAnnouncer;
            this.selectedValue = 'NA';
            this.profileForm = this.formBuilder.group({
                technology: ['', [i1.Validators.required]]
            });
            this.isLoading$ = this.store.pipe(i3.select(ListActions.isLoadingSelector));
            this.error$ = this.store.pipe(i3.select(ListActions.errorSelector));
            this.technologyList$ = this.store.pipe(i3.select(ListActions.listSelector));
        }
        MyLibComponent.prototype.ngOnInit = function () {
            var t = this.liveAnnouncer.announce('list is displayed').then(function (a) { return console.log('inside: ', a); });
            this.store.dispatch(ListActions__namespace.getList());
        };
        MyLibComponent.prototype.checked = function (event, val) {
            this.selectedValue = val;
        };
        MyLibComponent.prototype.radioChange = function (event, val) {
            this.selectedValue = val;
        };
        MyLibComponent.prototype.saveForm = function () {
            if (this.profileForm.valid) {
                this.snackBar.open('You Have Selected: ' + this.profileForm.value.technology, 'OK', {
                    duration: 3000
                });
            }
        };
        return MyLibComponent;
    }());
    MyLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibComponent, deps: [{ token: i1__namespace.FormBuilder }, { token: i2__namespace.MatSnackBar }, { token: i3__namespace.Store }, { token: i4__namespace.LiveAnnouncer }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MyLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MyLibComponent, selector: "lib-my-lib-bh", ngImport: i0__namespace, template: "\n\t<ng-container *ngIf=\"isLoading$ | async as Loading\">\n\t<mat-spinner *ngIf=\"Loading\"></mat-spinner>\n\t</ng-container>\n\t<form [formGroup]=\"profileForm\" class=\"form-container\" >\t\n\t<fieldset class=\"container\" role=\"radiogroup\">\n\t\t<mat-radio-group\n\t\t\taria-label=\"Select an option\"\n\t\t\tformControlName=\"technology\"\n\t\t\tclass=\"radio-group\"\n\t\t\taria-labelledby=\"radio-group-label\"\n\t\t\ttabIndex=\"-1\"\n\t\t\trequired\n\t\t>\n\t\t<mat-radio-button\n\t\t\t*ngFor=\"let frameWork of technologyList$ | async; let i = index\"\n\t\t\tvalue=\"{{ frameWork.name }}\"\n\t\t\t[ngClass]=\"frameWork.name === selectedValue ? 'light-grey-bg' : 'green'\"\n\t\t\tclass=\"radio-button\"\n\t\t\t(click)=\"checked($event, frameWork.name)\"\n\t\t\tngClass=\"\"\n\t\t\taria-live=\"polite\"\n\t\t\taria-atomic=\"true\"\n\t\t\trole=\"Radio\"\n\t\t\t(change)=\"radioChange($event, frameWork.name)\"\n\t\t\t>\n\t\t\t{{ frameWork.name }}\n\t\t</mat-radio-button>\n\t\t<mat-error\n\t\t\t\t*ngIf=\"profileForm.get('technology')?.invalid\"\n\t\t>Required</mat-error>\n\t\t<span class=\"selected-value\"> You Selected: {{ selectedValue }} </span>\n\t\t</mat-radio-group>\n\t\t<input type=\"button\" value=\"submit\" (click)=\"saveForm()\" />\n\t\t</fieldset>\n\t</form>\n\t", isInline: true, styles: [".container{width:20%}.radio-group{display:flex;flex-direction:column}.light-grey-bg{background-color:#060d74;color:#dedede}.radio-button{padding:10px;border-bottom:1px solid #dedede}.selected-value{font-size:16px;padding-top:24px}:host ::ng-deep .mat-radio-outer-circle{border-color:#000}\n"], components: [{ type: i5__namespace.MatSpinner, selector: "mat-spinner", inputs: ["color"] }, { type: i6__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8__namespace.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-lib-bh',
                        template: "\n\t<ng-container *ngIf=\"isLoading$ | async as Loading\">\n\t<mat-spinner *ngIf=\"Loading\"></mat-spinner>\n\t</ng-container>\n\t<form [formGroup]=\"profileForm\" class=\"form-container\" >\t\n\t<fieldset class=\"container\" role=\"radiogroup\">\n\t\t<mat-radio-group\n\t\t\taria-label=\"Select an option\"\n\t\t\tformControlName=\"technology\"\n\t\t\tclass=\"radio-group\"\n\t\t\taria-labelledby=\"radio-group-label\"\n\t\t\ttabIndex=\"-1\"\n\t\t\trequired\n\t\t>\n\t\t<mat-radio-button\n\t\t\t*ngFor=\"let frameWork of technologyList$ | async; let i = index\"\n\t\t\tvalue=\"{{ frameWork.name }}\"\n\t\t\t[ngClass]=\"frameWork.name === selectedValue ? 'light-grey-bg' : 'green'\"\n\t\t\tclass=\"radio-button\"\n\t\t\t(click)=\"checked($event, frameWork.name)\"\n\t\t\tngClass=\"\"\n\t\t\taria-live=\"polite\"\n\t\t\taria-atomic=\"true\"\n\t\t\trole=\"Radio\"\n\t\t\t(change)=\"radioChange($event, frameWork.name)\"\n\t\t\t>\n\t\t\t{{ frameWork.name }}\n\t\t</mat-radio-button>\n\t\t<mat-error\n\t\t\t\t*ngIf=\"profileForm.get('technology')?.invalid\"\n\t\t>Required</mat-error>\n\t\t<span class=\"selected-value\"> You Selected: {{ selectedValue }} </span>\n\t\t</mat-radio-group>\n\t\t<input type=\"button\" value=\"submit\" (click)=\"saveForm()\" />\n\t\t</fieldset>\n\t</form>\n\t",
                        // styles: [ ''
                        // ],
                        styleUrls: ['./my-lib-bh.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.FormBuilder }, { type: i2__namespace.MatSnackBar }, { type: i3__namespace.Store }, { type: i4__namespace.LiveAnnouncer }]; } });

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
    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MyLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, declarations: [MyLibComponent], imports: [i7.CommonModule, i3__namespace.StoreFeatureModule, i2__namespace$1.EffectsFeatureModule, i6.MatRadioModule,
            http.HttpClientModule,
            i6.MatRadioModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i8.MatFormFieldModule,
            i2.MatSnackBarModule,
            i5.MatProgressSpinnerModule,
            i4.A11yModule
            // MyLibModule
        ], exports: [MyLibComponent] });
    MyLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, providers: [
            {
                provide: i6.MAT_RADIO_DEFAULT_OPTIONS,
                useValue: { color: 'warn' },
            },
            ListActions.GetListService
        ], imports: [[i7.CommonModule, i3.StoreModule.forFeature('list', ListActions.reducers), i2$1.EffectsModule.forFeature([ListActions.listEffects]),
                i6.MatRadioModule,
                http.HttpClientModule,
                i6.MatRadioModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i8.MatFormFieldModule,
                i2.MatSnackBarModule,
                i5.MatProgressSpinnerModule,
                i4.A11yModule
                // MyLibModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i7.CommonModule, i3.StoreModule.forFeature('list', ListActions.reducers), i2$1.EffectsModule.forFeature([ListActions.listEffects]),
                            i6.MatRadioModule,
                            http.HttpClientModule,
                            i6.MatRadioModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i8.MatFormFieldModule,
                            i2.MatSnackBarModule,
                            i5.MatProgressSpinnerModule,
                            i4.A11yModule
                            // MyLibModule
                        ],
                        providers: [
                            {
                                provide: i6.MAT_RADIO_DEFAULT_OPTIONS,
                                useValue: { color: 'warn' },
                            },
                            ListActions.GetListService
                        ],
                        declarations: [MyLibComponent],
                        exports: [MyLibComponent]
                    }]
            }] });

    /*
     * Public API Surface of my-lib-bh
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=my-lib-bh.umd.js.map
