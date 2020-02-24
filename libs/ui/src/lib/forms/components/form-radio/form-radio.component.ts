import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldConfig } from '../../interfaces'

@Component({
  selector: 'ng-nest-form-radio',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label class="radio-label-padding">{{ field.label }}:</label>
      <mat-radio-group [formControlName]="field.name">
        <mat-radio-button *ngFor="let item of field.options" [value]="item">{{
          item
        }}</mat-radio-button>
      </mat-radio-group>
    </div>
  `,
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent {
  field: FieldConfig
  group: FormGroup
}
