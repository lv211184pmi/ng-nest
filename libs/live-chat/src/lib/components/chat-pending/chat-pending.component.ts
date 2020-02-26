import { Component, Output, EventEmitter } from '@angular/core'

import { UIButtonConfig } from '../../interfaces/ui-button.interface'

@Component({
  selector: 'ng-nest-chat-pending',
  templateUrl: './chat-pending.component.html',
  styleUrls: ['./chat-pending.component.css']
})
export class ChatPendingComponent {
  @Output() openChat = new EventEmitter<null>()

  buttonConfig: UIButtonConfig = {
    type: 'fab',
    icon: 'question_answer',
    color: '#002E55'
  }

  public onButtonClick(): void {
    this.openChat.emit()
  }
}
