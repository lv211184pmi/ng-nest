import { Component, Injector, OnInit } from '@angular/core'
import { createCustomElement } from '@angular/elements'

import { ChatPopupComponent, LiveChatService } from '@myworkspace/live-chat'

@Component({
  selector: 'ng-nest-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  constructor(injector: Injector, public liveChatService: LiveChatService) {
    const LiveChatElement = createCustomElement(ChatPopupComponent, { injector })
    customElements.define('live-chat-element', LiveChatElement)
  }

  ngOnInit() {
    this.liveChatService.createWebElement('chat left-chat')
    this.liveChatService.createWebElement('chat right-chat')
  }
}
