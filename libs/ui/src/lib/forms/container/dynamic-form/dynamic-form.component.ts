import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms'

import { FieldConfig, Validator } from '../../interfaces'


@Component({
  selector: 'ng-nest-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = []
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>()

  form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createControl()
  }

  get value() {
    return this.form.value
  }

  createControl() {
    const group = this.fb.group({})
    this.fields.forEach(field => {
      if (field.type === 'button') return
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      )
      group.addControl(field.name, control)
    })
    return group
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = []
      validations.forEach(valid => {
        validList.push(valid.validator)
      })
      return Validators.compose(validList)
    }
    return null
  }

  onSubmit(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value)
    } else {
      this.validateAllFormFields(this.form)
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field)
      control.markAsTouched({ onlySelf: true })
    })
  }
}
