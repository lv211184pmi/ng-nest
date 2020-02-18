import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldConfig } from "../../interfaces";

@Component({
  selector: 'ng-nest-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
