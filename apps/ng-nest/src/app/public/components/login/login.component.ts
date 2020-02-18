import { Component, OnInit, ViewChild } from '@angular/core';

import { DynamicFormComponent } from "@myworkspace/dynamicFormComponent";
import { FieldConfig } from '../../../shared/interfaces/dynamic-form.interface';
import { LoginForm } from '../../constants/login-form-config';

@Component({
  selector: 'ng-nest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  loginConfig: FieldConfig[] = LoginForm.loginFormConfig;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(value: any) {
    console.log('here we will execute login implementation')
  }
}
