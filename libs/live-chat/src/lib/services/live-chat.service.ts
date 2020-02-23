import { Injectable } from '@angular/core'
import { NgElement, WithProperties } from '@angular/elements'

import { ChatPopupComponent } from '../container/chat-popup/chat-popup.component'


@Injectable()
export class LiveChatService {
  constructor() {}

  createWebElement(className: string) {
    const liveChat: NgElement & WithProperties<ChatPopupComponent> = document.createElement('live-chat-element') as any

    liveChat.className = className
    liveChat.addEventListener('closed', () => document.body.removeChild(liveChat))
    document.body.appendChild(liveChat)
  }
}