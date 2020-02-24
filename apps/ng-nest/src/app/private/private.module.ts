import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiFormModule } from '@myworkspace/ui/forms'
import { LiveChatModule } from '@myworkspace/live-chat'
import { PrivateComponent } from './container/private.component'
import { PrivateRoutingModule } from './private-routing.module'



@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    UiFormModule,
    LiveChatModule
  ]
})
export class PrivateModule { }
