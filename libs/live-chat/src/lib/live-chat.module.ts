import { NgModule } from '@angular/core'

import { UiModule } from '@myworkspace/ui'
import { ChatPopupComponent } from './container/chat-popup/chat-popup.component'
import { LiveChatService } from './services/live-chat.service'
import { LiveChatComponent } from './components/live-chat/live-chat.component'

@NgModule({
  imports: [UiModule, ],
  providers: [LiveChatService],
  declarations: [ChatPopupComponent, LiveChatComponent],
  bootstrap: [ChatPopupComponent],
  entryComponents: [ChatPopupComponent],
})

export class LiveChatModule {
}
