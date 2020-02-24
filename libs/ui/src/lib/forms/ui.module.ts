import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from '../material.module'
import { FormInputComponent } from './components/form-input/form-input.component'
import { FormButtonComponent } from './components/form-button/form-button.component'
import { DynamicFieldDirective } from './directives/dynamic-field.directive'
import { DynamicFormComponent } from './container/dynamic-form/dynamic-form.component'
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component'
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component'

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
    FormRadioComponent,
    FormTextareaComponent
  ],
  exports: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormTextareaComponent,
  ],
  entryComponents: [
    FormInputComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ]
})
export class UiFormModule {}
