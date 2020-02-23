import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldConfig } from '../../interfaces'

@Component({
  selector: 'ng-nest-form-textarea',
  template: `
    <div>
      <mat-form-field class="example-full-width" [formGroup]="group">
        <mat-label>Leave a comment</mat-label>
        <textarea 
          matInput
          placeholder="Type your message here..."
          [formControlName]="field.name"
        ></textarea>
          <ng-container
            *ngFor="let validation of field.validations"
            ngProjectAs="mat-error"
          >
            <mat-error *ngIf="group.get(field.name).hasError(validation.name)">
              {{ validation.message }}
            </mat-error>
        </ng-container>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent {
  field: FieldConfig
  group: FormGroup
}
