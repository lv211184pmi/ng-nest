import { Component, Input, Output, EventEmitter } from '@angular/core'

import { UIButtonConfig } from '../button-interface'

@Component({
  selector: 'ng-nest-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent {
  @Input() buttonConfig: UIButtonConfig
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>() 
  
  public onButtonClick(): void {
    this.clickEvent.emit()
  }
}
