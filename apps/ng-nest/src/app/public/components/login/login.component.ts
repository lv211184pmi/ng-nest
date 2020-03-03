import { Component, ViewChild } from '@angular/core'

import { DynamicFormComponent } from '@myworkspace/ui/forms'
import { FieldConfig } from '../../../shared/interfaces/dynamic-form.interface'
import { LoginFormConfig } from '../../constants/login-form-config'
import { AuthService } from '../../../core/services/auth.service'

@Component({
  selector: 'ng-nest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent
  loginConfig: FieldConfig[] = LoginFormConfig

  constructor(private authService: AuthService) {}

  loginUser(value: any) {
    this.authService.login(value.name, value.password)
  }
}
