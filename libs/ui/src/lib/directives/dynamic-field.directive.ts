import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldConfig } from '../interfaces';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormRadioComponent } from '../components/form-radio/form-radio.component';
import { FormCheckboxComponent } from '../components/form-checkbox/form-checkbox.component';


@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentMapper = {
    input: FormInputComponent,
    radiobutton: FormRadioComponent,
    checkbox: FormCheckboxComponent,
    button: FormButtonComponent,
  }

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      this.componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
