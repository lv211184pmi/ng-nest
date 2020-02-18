import { Component, OnInit, ViewChild } from '@angular/core';

import { DynamicFormComponent } from "@myworkspace/dynamicFormComponent";
import { FieldConfig } from '../../../shared/interfaces/dynamic-form.interface';
import { RegistrationForm } from '../../constants/registration-form-config';

@Component({
  selector: 'ng-nest-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  registrationConfig: FieldConfig[] = RegistrationForm.registrationConfig;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(value: any) {
    console.log('here we will execute registration implementation')
  }
}
