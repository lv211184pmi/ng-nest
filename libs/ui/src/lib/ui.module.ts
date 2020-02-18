import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from './material.module';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormInputComponent,
    FormButtonComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ],
  exports: [
    DynamicFieldDirective,
    DynamicFormComponent,
  ],
  entryComponents: [
    FormInputComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ]
})
export class UiModule {}
