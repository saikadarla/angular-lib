(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('projects/my-lib/src/store/action'), require('@ngrx/store'), require('projects/my-lib/src/store/selectors'), require('@angular/material/snack-bar'), require('@angular/router'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/common'), require('@angular/material/form-field'), require('@ngrx/effects'), require('@angular/common/http'), require('projects/my-lib/src/store/reducers'), require('projects/my-lib/src/store/effects'), require('projects/my-lib/src/services/get-list.service')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core', '@angular/forms', 'projects/my-lib/src/store/action', '@ngrx/store', 'projects/my-lib/src/store/selectors', '@angular/material/snack-bar', '@angular/router', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/common', '@angular/material/form-field', '@ngrx/effects', '@angular/common/http', 'projects/my-lib/src/store/reducers', 'projects/my-lib/src/store/effects', 'projects/my-lib/src/services/get-list.service'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["my-lib"] = {}, global.ng.core, global.ng.forms, global.ListActions, global.i4, global.selectors, global.ng.material.snackBar, global.ng.router, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.common, global.ng.material.formField, global.i2$1, global.ng.common.http, global.reducers, global.effects, global.getList_service));
})(this, (function (exports, i0, i1, ListActions, i4, selectors, i2, i3, i5, i6, i7, i8, i2$1, http, reducers, effects, getList_service) { 'use strict';

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
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
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
    MyLibService.??fac = i0__namespace.????ngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibService, deps: [], target: i0__namespace.????FactoryTarget.Injectable });
    MyLibService.??prov = i0__namespace.????ngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibService, providedIn: 'root' });
    i0__namespace.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent(
        // private radioService: GetListService,
        formBuilder, snackBar, route, store) {
            this.formBuilder = formBuilder;
            this.snackBar = snackBar;
            this.route = route;
            this.store = store;
            this.selectedValue = 'NA';
            this.profileForm = this.formBuilder.group({
                technology: ['', [i1.Validators.required]]
            });
            this.isLoading$ = this.store.pipe(i4.select(selectors.isLoadingSelector));
            this.error$ = this.store.pipe(i4.select(selectors.errorSelector));
            this.technologyList$ = this.store.pipe(i4.select(selectors.listSelector));
        }
        MyLibComponent.prototype.ngOnInit = function () {
            // this.technologyList$ = this.radioService.getTechnologyList();
            console.log('hello World: ', this.route);
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
    MyLibComponent.??fac = i0__namespace.????ngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibComponent, deps: [{ token: i1__namespace.FormBuilder }, { token: i2__namespace.MatSnackBar }, { token: i3__namespace.ActivatedRoute }, { token: i4__namespace.Store }], target: i0__namespace.????FactoryTarget.Component });
    MyLibComponent.??cmp = i0__namespace.????ngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MyLibComponent, selector: "lib-my-lib", ngImport: i0__namespace, template: "\n   <ng-container *ngIf=\"isLoading$ | async as Loading\">\n\t<mat-spinner *ngIf=\"Loading\"></mat-spinner>\n</ng-container>\n<form [formGroup]=\"profileForm\" class=\"form-container\" >\t\n\t<fieldset class=\"container\" role=\"radiogroup\">\n\t\t<mat-radio-group\n\t\t  aria-label=\"Select an option\"\n\t\t  formControlName=\"technology\"\n\t\t  class=\"radio-group\"\n\t\t  aria-labelledby=\"radio-group-label\"\n\t\t  tabIndex=\"-1\"\n\t\t  required\n\t\t>\n\t\t  <mat-radio-button\n\t\t\t*ngFor=\"let frameWork of technologyList$ | async; let i = index\"\n\t\t\tvalue=\"{{ frameWork.name }}\"\n\t\t\t[ngClass]=\"frameWork.name === selectedValue ? 'light-grey-bg' : 'green'\"\n\t\t\tclass=\"radio-button\"\n\t\t\t(click)=\"checked($event, frameWork.name)\"\n\t\t\tngClass=\"\"\n\t\t\trole=\"Radio\"\n\t\t\t(change)=\"radioChange($event, frameWork.name)\"\n\t\t  >\n\t\t\t{{ frameWork.name }}\n\t\t  </mat-radio-button>\n\t\t   <mat-error\n\t\t\t *ngIf=\"profileForm.get('technology')?.invalid\"\n\t\t  >Required</mat-error>\n\t\t  <span class=\"selected-value\"> You Selected: {{ selectedValue }} </span>\n\t\t</mat-radio-group>\n\t\t<input type=\"button\" value=\"submit\" (click)=\"saveForm()\" />\n\t  </fieldset>\n\n</form>\n  ", isInline: true, styles: [".container{width:20%}.radio-group{display:flex;flex-direction:column}.light-grey-bg{background-color:#060d74;color:#dedede}.radio-button{padding:10px;border-bottom:1px solid #dedede}.selected-value{font-size:16px;padding-top:24px}:host ::ng-deep .mat-radio-outer-circle{border-color:#000}\n"], components: [{ type: i5__namespace.MatSpinner, selector: "mat-spinner", inputs: ["color"] }, { type: i6__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.??NgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8__namespace.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-lib',
                        template: "\n   <ng-container *ngIf=\"isLoading$ | async as Loading\">\n\t<mat-spinner *ngIf=\"Loading\"></mat-spinner>\n</ng-container>\n<form [formGroup]=\"profileForm\" class=\"form-container\" >\t\n\t<fieldset class=\"container\" role=\"radiogroup\">\n\t\t<mat-radio-group\n\t\t  aria-label=\"Select an option\"\n\t\t  formControlName=\"technology\"\n\t\t  class=\"radio-group\"\n\t\t  aria-labelledby=\"radio-group-label\"\n\t\t  tabIndex=\"-1\"\n\t\t  required\n\t\t>\n\t\t  <mat-radio-button\n\t\t\t*ngFor=\"let frameWork of technologyList$ | async; let i = index\"\n\t\t\tvalue=\"{{ frameWork.name }}\"\n\t\t\t[ngClass]=\"frameWork.name === selectedValue ? 'light-grey-bg' : 'green'\"\n\t\t\tclass=\"radio-button\"\n\t\t\t(click)=\"checked($event, frameWork.name)\"\n\t\t\tngClass=\"\"\n\t\t\trole=\"Radio\"\n\t\t\t(change)=\"radioChange($event, frameWork.name)\"\n\t\t  >\n\t\t\t{{ frameWork.name }}\n\t\t  </mat-radio-button>\n\t\t   <mat-error\n\t\t\t *ngIf=\"profileForm.get('technology')?.invalid\"\n\t\t  >Required</mat-error>\n\t\t  <span class=\"selected-value\"> You Selected: {{ selectedValue }} </span>\n\t\t</mat-radio-group>\n\t\t<input type=\"button\" value=\"submit\" (click)=\"saveForm()\" />\n\t  </fieldset>\n\n</form>\n  ",
                        // styles: [ ''
                        // ],
                        styleUrls: ['./my-lib.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.FormBuilder }, { type: i2__namespace.MatSnackBar }, { type: i3__namespace.ActivatedRoute }, { type: i4__namespace.Store }]; } });

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
    MyLibModule.??fac = i0__namespace.????ngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, deps: [], target: i0__namespace.????FactoryTarget.NgModule });
    MyLibModule.??mod = i0__namespace.????ngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, declarations: [MyLibComponent], imports: [i7.CommonModule, i4__namespace.StoreFeatureModule, i2__namespace$1.EffectsFeatureModule, i6.MatRadioModule,
            http.HttpClientModule,
            i6.MatRadioModule,
            i1.FormsModule,
            i1.ReactiveFormsModule,
            i8.MatFormFieldModule,
            i2.MatSnackBarModule,
            i5.MatProgressSpinnerModule], exports: [MyLibComponent] });
    MyLibModule.??inj = i0__namespace.????ngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, providers: [
            {
                provide: i6.MAT_RADIO_DEFAULT_OPTIONS,
                useValue: { color: 'warn' },
            },
            getList_service.GetListService
        ], imports: [[i7.CommonModule, i4.StoreModule.forFeature('list', reducers.reducers), i2$1.EffectsModule.forFeature([effects.listEffects]),
                i6.MatRadioModule,
                http.HttpClientModule,
                i6.MatRadioModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i8.MatFormFieldModule,
                i2.MatSnackBarModule,
                i5.MatProgressSpinnerModule,
                // MyLibModule
            ]] });
    i0__namespace.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MyLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i7.CommonModule, i4.StoreModule.forFeature('list', reducers.reducers), i2$1.EffectsModule.forFeature([effects.listEffects]),
                            i6.MatRadioModule,
                            http.HttpClientModule,
                            i6.MatRadioModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i8.MatFormFieldModule,
                            i2.MatSnackBarModule,
                            i5.MatProgressSpinnerModule,
                            // MyLibModule
                        ],
                        providers: [
                            {
                                provide: i6.MAT_RADIO_DEFAULT_OPTIONS,
                                useValue: { color: 'warn' },
                            },
                            getList_service.GetListService
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

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=my-lib.umd.js.map
