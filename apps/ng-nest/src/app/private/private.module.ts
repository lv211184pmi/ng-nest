import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiModule } from '@myworkspace/ui'
import { LiveChatModule } from '@myworkspace/live-chat'
import { PrivateComponent } from './container/private.component'
import { PrivateRoutingModule } from './private-routing.module'



@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    UiModule,
    LiveChatModule
  ]
})
export class PrivateModule { }
