import { Component, EventEmitter, Input, Output } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'myworkspace-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.css'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
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
