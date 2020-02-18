import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldConfig } from '../../interfaces'

@Component({
  selector: 'ng-nest-form-checkbox',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <mat-checkbox [formControlName]="field.name">{{ field.label }}</mat-checkbox>
    </div>
  `,
  styleUrls: ['./form-checkbox.component.css']
})

export class FormCheckboxComponent {
  field: FieldConfig
  group: FormGroup
}
