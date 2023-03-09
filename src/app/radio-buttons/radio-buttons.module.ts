import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetListService } from '../../../projects/my-lib-bh/src/services/get-list.service';
import { RadioButtonsComponent } from './radio-buttons.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { reducers } from "../../../projects/my-lib-bh/src/store/reducers";
import { EffectsModule } from '@ngrx/effects'
import { listEffects } from '../../../projects/my-lib-bh/src/store/effects'
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MyLibModule } from 'projects/my-lib-bh/src/lib/my-lib-bh.module';

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
  MyLibModule
],
  providers: [
    {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'warn' },
},
GetListService],
  declarations: [RadioButtonsComponent],
  exports: [RadioButtonsComponent]
})
export class RadioButtonsModule { }
