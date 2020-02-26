import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { UiFormModule } from '@myworkspace/ui/forms'
import { UiButtonModule } from '@myworkspace/ui/button'
import { ChatPopupComponent } from './container/chat-popup/chat-popup.component'
import { LiveChatService } from './services/live-chat.service'
import { LiveChatComponent } from './components/live-chat/live-chat.component'
import { ChatPendingComponent } from './components/chat-pending/chat-pending.component'

@NgModule({
  imports: [UiFormModule, UiButtonModule, CommonModule],
  providers: [LiveChatService],
  declarations: [ChatPopupComponent, LiveChatComponent, ChatPendingComponent],
  bootstrap: [ChatPopupComponent],
  entryComponents: [ChatPopupComponent],
  exports: [ChatPendingComponent],
})

export class LiveChatModule {
}
