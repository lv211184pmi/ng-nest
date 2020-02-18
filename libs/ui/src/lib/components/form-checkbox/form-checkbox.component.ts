import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldConfig } from "../../interfaces";

@Component({
  selector: 'ng-nest-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
