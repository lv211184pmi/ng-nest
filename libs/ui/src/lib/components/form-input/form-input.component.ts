import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldConfig } from "../../interfaces";

@Component({
  selector: 'ng-nest-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
