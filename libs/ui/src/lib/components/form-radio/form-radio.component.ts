import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldConfig } from "../../interfaces";

@Component({
  selector: 'ng-nest-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
