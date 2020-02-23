import { Component, ViewChild } from '@angular/core'

import { DynamicFormComponent } from '@myworkspace/dynamicFormComponent'
import { LiveChatFormConfig } from '../../constants/forms-constants'
import { FieldConfig } from '../../interfaces/dynamic-form.interface'


@Component({
  selector: 'ng-nest-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent
  liveChatConfig: FieldConfig[] = LiveChatFormConfig

  sendMessage(value: any) {
    console.log('here we will execute login implementation')
  }
}
