import { Component, ViewChild, Output, EventEmitter } from '@angular/core'

import { DynamicFormComponent } from '@myworkspace/ui/forms'
import { LiveChatFormConfig } from '../../constants/forms-constants'
import { FieldConfig } from '../../interfaces/dynamic-form.interface'


@Component({
  selector: 'ng-nest-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent
  @Output() closeChat = new EventEmitter<null>()

  liveChatConfig: FieldConfig[] = LiveChatFormConfig

  sendMessage(value: any) {
    console.log('here we will execute login implementation')
  }

  onCloseChat(): void {
    this.closeChat.emit()
  }
}
