import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ng-nest-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.css'],
})
export class ChatPopupComponent {
  private state: 'opened' | 'closed' = 'closed'

  @Input()
  set message(message: string) {
    this._message = message
    this.state = 'opened'
  }
  get message(): string { return this._message }
  _message: string

  @Output()
  closed = new EventEmitter()
}
