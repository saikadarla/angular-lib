import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/operators';
import {
  AppStateInterface,
  FrameWorkList,
} from '../../../projects/my-lib-bh/src/modals/list.modal';
// import { AppStateInterface, FrameWorkList } from 'projects/my-lib-bh/src/lib';
import { GetListService } from '../../../projects/my-lib-bh/src/services/get-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as ListActions from '../../../projects/my-lib-bh/src/store/action';
// import * as ListActions from 'projects/my-lib-bh/src/lib';
import {
  errorSelector,
  isLoadingSelector,
  listSelector,
} from '../../../projects/my-lib-bh/src/store/selectors';
// import { errorSelector, isLoadingSelector, listSelector } from 'projects/my-lib-bh/src/lib';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
})
export class RadioButtonsComponent implements OnInit {
  public selectedValue: string = 'NA';
  public radBtns: FormGroup;

  profileForm = this.formBuilder.group({
    technology: ['', [Validators.required]],
  });
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  technologyList$: Observable<FrameWorkList[]>;

  constructor(
    private radioService: GetListService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.technologyList$ = this.store.pipe(select(listSelector));
  }

  ngOnInit(): void {
    // this.technologyList$ = this.radioService.getTechnologyList();
    console.log('hello World: ', this.route);
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
      this.snackBar.open(
        'You Have Selected: ' + this.profileForm.value.technology,
        'OK',
        {
          duration: 3000,
        }
      );
    }
  }
}
