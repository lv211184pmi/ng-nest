import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ng-nest-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.css'],
})
export class ChatPopupComponent {
  public state: 'opened' | 'closed' = 'closed'

  onChatStateChange(chatState): void {
    this.state = chatState
  }
}
