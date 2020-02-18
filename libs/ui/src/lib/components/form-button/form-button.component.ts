import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldConfig } from '../../interfaces'

@Component({
  selector: 'ng-nest-form-button',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button type="submit" mat-raised-button color="primary">
        {{ field.label }}
      </button>
    </div>
  `,
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent{
  field: FieldConfig
  group: FormGroup
}
