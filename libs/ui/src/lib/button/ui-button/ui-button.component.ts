import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core'

import { UIButtonConfig } from '../button-interface'

@Component({
  selector: 'ng-nest-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent implements OnInit, AfterViewInit {
  @Input() buttonConfig: UIButtonConfig
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>() 

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.buttonConfig)
  }
  
  ngAfterViewInit() {
    // console.log(this.buttonConfig)
    // console.log('hi')
  }
  
  public onButtonClick(event) {
    this.clickEvent.emit()
  }
}
