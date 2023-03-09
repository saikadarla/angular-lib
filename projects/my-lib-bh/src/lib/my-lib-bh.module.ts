import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib-bh.component';

import { CommonModule } from '@angular/common';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { reducers } from 'projects/my-lib-bh/src/store/reducers';
import { reducers } from 'projects/my-lib-bh/src/lib';
// import { listEffects } from 'projects/my-lib-bh/src/store/effects';
import { listEffects } from 'projects/my-lib-bh/src/lib';
// import { GetListService } from 'projects/my-lib-bh/src/services/get-list.service';
import { GetListService } from 'projects/my-lib-bh/src/lib';
import {A11yModule} from '@angular/cdk/a11y'




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

@NgModule ({
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
GetListService],
  declarations: [MyLibComponent],
  exports: [MyLibComponent]
})
export class MyLibModule { }
