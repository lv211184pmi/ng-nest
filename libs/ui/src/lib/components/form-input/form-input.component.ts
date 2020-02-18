import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldConfig } from '../../interfaces'

@Component({
  selector: 'ng-nest-form-input',
  template: `
    <mat-form-field class="demo-full-width" [formGroup]="group">
      <input
        matInput
        [formControlName]="field.name"
        [placeholder]="field.label"
        [type]="field.inputType"
      />
      <ng-container
        *ngFor="let validation of field.validations"
        ngProjectAs="mat-error"
      >
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{
          validation.message
        }}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styleUrls: ['./form-input.component.css']
})

export class FormInputComponent {
  field: FieldConfig
  group: FormGroup
}
