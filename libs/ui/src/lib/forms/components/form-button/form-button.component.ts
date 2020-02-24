import { Component, ViewEncapsulation } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldConfig } from '../../interfaces'

@Component({
  selector: 'ng-nest-form-button',
  template: `
    <div [formGroup]="group">
      <button
        
        type="submit"
        mat-raised-button
        [ngClass]="field?.class"
      >
        {{ field.label }}
      </button>
    </div>
  `,
  styleUrls: ['./form-button.component.css'],
})
export class FormButtonComponent{
  field: FieldConfig
  group: FormGroup
}
