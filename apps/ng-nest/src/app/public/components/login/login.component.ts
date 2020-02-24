import { Component, ViewChild } from '@angular/core'

import { DynamicFormComponent } from '@myworkspace/ui/forms'
import { FieldConfig } from '../../../shared/interfaces/dynamic-form.interface'
import { LoginFormConfig } from '../../constants/login-form-config'

@Component({
  selector: 'ng-nest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent
  loginConfig: FieldConfig[] = LoginFormConfig

  submitForm(value: any) {
    console.log('here we will execute login implementation')
  }
}
