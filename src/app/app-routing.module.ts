import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';

const routes: Routes = [
  { path: 'radio', component: RadioButtonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
